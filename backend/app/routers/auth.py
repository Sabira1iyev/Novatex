from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import bcrypt
from app import models, schema, database
from app import oauth2

router = APIRouter(prefix="/auth", tags=['Authentication'])

@router.post("/signup")
def sign_up(user: schema.UserCreate, db: Session=Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code = 400, detail="Email already registered")
    
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(user.password.encode('utf-8'),salt).decode('utf-8')

    new_user= models.User(
        first_name = user.first_name,
        last_name = user.last_name,
        email = user.email,
        password_hash = hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return{
        "message": "User registered successfully",
        "user": {"email": new_user.email}}


@router.post("/signin")
def sigIn(user: schema.UserSignIn, db: Session=Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if not db_user:
        raise HTTPException(status_code = 404, detail= "User not found!")

    
    is_password_correct = bcrypt.checkpw(user.password.encode('utf-8'), db_user.password_hash.encode('utf-8'))
    access_token = oauth2.create_access_token(data={"user_id": db_user.id})
    
    if not is_password_correct:
        raise HTTPException(status_code=400, detail="Invalid Password!")
    
    return {
        "message": "Successfully signed In",
        "token" : access_token,
        "user_id": db_user.id
    }


@router.get("/users/{user_id}")
def get_user(user_id: int, db: Session=Depends(database.get_db), current_user: int= Depends(oauth2.get_current_user)):
    if current_user != user_id:
        raise HTTPException(status_code = 403, detail="Not authorized!")
    user= db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return{
        "id": user.id,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
    }

@router.delete("/users/{user_id}")
def delete_user(user_id: int, db:Session=Depends(database.get_db), current_user: int=Depends(oauth2.get_current_user)):
    if current_user != user_id:
        raise HTTPException(status_code=403, detail="Not authorized!")
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code= 404, detail="User not found")
    
    db.delete(user)
    db.commit()
    return{"message": "user deleted successfully"}