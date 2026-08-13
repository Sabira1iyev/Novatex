from fastapi import FastAPI, BackgroundTasks, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import bcrypt
from app import models, schema, database
from app.compiler import compile_latex
from app.schema import TextRequest, SyncRequest
from app.utils import cleanup_job, run_synctex
from app.routers import auth
models.Base.metadata.create_all(bind=database.engine)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)

@app.post("/compile")
async def compile_tex(request: TextRequest):
    result, job_dir = compile_latex(request.content)
    result["job_id"] = job_dir.split("/")[-1]
    return result

@app.post("/synctex")
async def synctex(request: SyncRequest):
    job_dir = f"jobs/{request.job_id}"
    line = run_synctex(job_dir, request.page, request.x, request.y)

    if line:
        return {
            "success": True, 
            "line": line
        }
    return{
        "success": False,
        "error": "No line found"
    }