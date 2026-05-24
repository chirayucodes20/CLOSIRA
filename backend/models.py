from sqlalchemy import Column, Integer, String, DateTime
from database import Base
import datetime

class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(Integer, primary_key=True, index=True)
    channel = Column(String, index=True) # WhatsApp, email, ya call
    customer_name = Column(String)
    message = Column(String)
    status = Column(String, default="new") # status update karne ke liye
    reason = Column(String, nullable=True) # escalation ka reason
    sop_matched = Column(String, nullable=True) # Background task ke baad update hoga
    suggested_response = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)