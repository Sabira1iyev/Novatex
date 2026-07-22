from pydantic import BaseModel

class TextRequest(BaseModel):
    content:str

class SyncRequest(BaseModel):
    job_id:str
    page:int
    x:float
    y:float