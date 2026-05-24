from sqlalchemy.orm import Session
from models import Enquiry
import logging
import json

logger = logging.getLogger(__name__)

def process_enquiry_task(enquiry_id: int, db: Session):
    logger.info(json.dumps({"event": "task_processed", "enquiry_id": enquiry_id}))
    
    enquiry = db.query(Enquiry).filter(Enquiry.id == enquiry_id).first()
    if not enquiry:
        return

    msg = enquiry.message.lower()
    matched = False
    
    if "price" in msg or "cost" in msg or "quote" in msg:
        enquiry.sop_matched = "Pricing SOP"
        enquiry.suggested_response = "Here is our pricing structure."
        matched = True
    elif "book" in msg or "schedule" in msg or "appointment" in msg:
        enquiry.sop_matched = "Booking SOP"
        enquiry.suggested_response = "Let's schedule your appointment."
        matched = True
    elif "issue" in msg or "broken" in msg or "complain" in msg:
        enquiry.sop_matched = "Complaint SOP"
        enquiry.suggested_response = "We apologize. An agent will contact you."
        enquiry.status = "escalated"
        enquiry.reason = "Customer complaint"
        logger.info(json.dumps({"event": "escalation_triggered", "enquiry_id": enquiry_id, "reason": enquiry.reason}))
    else:
        enquiry.status = "escalated"
        enquiry.reason = "No SOP matched"
        logger.info(json.dumps({"event": "escalation_triggered", "enquiry_id": enquiry_id, "reason": enquiry.reason}))

    if matched:
        logger.info(json.dumps({"event": "sop_matched", "enquiry_id": enquiry_id, "sop": enquiry.sop_matched}))

    db.commit()