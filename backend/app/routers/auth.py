from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import bcrypt
from app import models, schema, database

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

    if not is_password_correct:
        raise HTTPException(status_code=400, detail="Invalid Password!")
    
    return {
        "message": "Successfully signed In",
        "token" : "token",
        "user_id": db_user.id
    }


@router.get("/users/{user_id}")
def get_user(user_id: int, db: Session=Depends(database.get_db)):
    user= db.query(models.User).filter(models.User.id == user_id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return{
        "id": user.id,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email
    }