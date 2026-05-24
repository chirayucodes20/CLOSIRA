from fastapi import FastAPI, Depends, BackgroundTasks, HTTPException
from sqlalchemy.orm import Session
import models
import schemas
from database import engine, get_db
from tasks import process_enquiry_task
import logging
import json

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger(__name__)

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Closira Enquiry API",
    version="1.0.0"
)

@app.get("/health", tags=["Health"])
async def health_check():
    return {"status": "ok", "message": "API is running smoothly"}

@app.post("/enquiry", response_model=dict, tags=["Enquiry"])
async def create_enquiry(
    enquiry: schemas.EnquiryCreate, 
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    db_enquiry = models.Enquiry(
        channel=enquiry.channel,
        customer_name=enquiry.customer_name,
        message=enquiry.message
    )
    db.add(db_enquiry)
    db.commit()
    db.refresh(db_enquiry)

    logger.info(json.dumps({"event": "enquiry_created", "enquiry_id": db_enquiry.id, "channel": db_enquiry.channel}))

    background_tasks.add_task(process_enquiry_task, db_enquiry.id, db)

    return {"job_id": db_enquiry.id, "message": "Enquiry received"}

@app.post("/enquiry/{id}/follow-up", tags=["Enquiry"])
async def schedule_follow_up(id: int, follow_up: schemas.FollowUpCreate, db: Session = Depends(get_db)):
    enquiry = db.query(models.Enquiry).filter(models.Enquiry.id == id).first()
    if not enquiry:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    
    return {
        "message": f"Follow-up scheduled in {follow_up.delay_minutes} minutes",
        "enquiry_id": id,
        "template": follow_up.message_template
    }

@app.post("/enquiry/{id}/escalate", tags=["Enquiry"])
async def escalate_enquiry(id: int, escalation: schemas.EscalateCreate, db: Session = Depends(get_db)):
    enquiry = db.query(models.Enquiry).filter(models.Enquiry.id == id).first()
    if not enquiry:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    
    enquiry.status = "escalated"
    enquiry.reason = escalation.reason
    logger.info(json.dumps({"event": "escalation_triggered", "enquiry_id": id, "reason": enquiry.reason}))
    db.commit()
    db.refresh(enquiry)
    
    return {"message": "Enquiry escalated", "enquiry_id": id, "reason": enquiry.reason}

@app.get("/enquiry/{id}/history", response_model=schemas.EnquiryResponse, tags=["Enquiry"])
async def get_enquiry_history(id: int, db: Session = Depends(get_db)):
    enquiry = db.query(models.Enquiry).filter(models.Enquiry.id == id).first()
    if not enquiry:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    
    return enquiry