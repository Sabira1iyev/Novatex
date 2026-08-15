from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app import models, schema, database, oauth2

router = APIRouter(prefix="/files", tags=["files"])

@router.post("/", response_model=schema.FileResponse)
def created_file(file:schema.FileCreate, db:Session=Depends(database.get_db),
current_user_id: int = Depends(oauth2.get_current_user)):
    new_file = models.File(
        title=file.title,
        content= file.content,
        user_id = current_user_id
    )
    db.add(new_file)
    db.commit()
    db.refresh(new_file)
    return new_file

@router.get("/", response_model = list[schema.FileResponse])
def get_my_files(db:Session = Depends(database.get_db), current_user_id:int = Depends(oauth2.get_current_user)):
    my_files = db.query(models.File).filter(models.File.user_id == current_user_id).all()
    return my_files