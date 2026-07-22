from fastapi import FastAPI, BackgroundTasks
from app.models import TextRequest, SyncRequest
from app.compiler import compile_latex
from app.utils import cleanup_job, run_synctex

app = FastAPI()

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