from datetime import datetime
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str

class TextRequest(BaseModel):
    content:str

class SyncRequest(BaseModel):
    job_id:str
    page:int
    x:float
    y:float

class UserSignIn(BaseModel):
    email: EmailStr
    password: str

class FileCreate(BaseModel):
    title:str
    content:str

class FileResponse(BaseModel):
    id:int
    title:str
    content:str
    user_id:int
    created_at:datetime
    updated_at:datetime
    
    class Config:
        from_attributes=True