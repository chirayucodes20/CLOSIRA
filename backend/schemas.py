from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class EnquiryCreate(BaseModel):
    channel: str
    customer_name: str
    message: str

class EnquiryResponse(BaseModel):
    id: int
    channel: str
    customer_name: str
    message: str
    status: str
    created_at: datetime
    reason: Optional[str] = None
    sop_matched: Optional[str] = None
    suggested_response: Optional[str] = None

    class Config:
        from_attributes = True

class FollowUpCreate(BaseModel):
    delay_minutes: int
    message_template: Optional[str] = None

class EscalateCreate(BaseModel):
    reason: str