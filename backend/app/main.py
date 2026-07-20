from fastapi import FastAPI, BackgroundTasks
from app.models import TextRequest
from app.compiler import compile_latex
from app.utils import cleanup_job

app = FastAPI()

@app.post("/.compile")
async def compile_tex(request: TextRequest, background_tasks: BackgroundTasks):
    result, job_dir = compile_latex(request.content)
    background_tasks.add_task(cleanup_job, job_dir)
    return result