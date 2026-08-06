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