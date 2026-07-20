from genericpath import exists
import subprocess
import subprocess
import os
import uuid
import base64

def compile_latex(content: str):
    job_id = str(uuid.uuid4())
    job_dir = f"jobs/{job_id}"
    os.makedirs(job_dir, exist_ok=True)

    text_path = os.path.join(job_dir, "input.tex")
    with open(text_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    result = subprocess.run(
        ["pdflatex", "-interaction=nonstopmode", "input.tex"],
        cwd=job_dir,
        capture_output=True,
        text=True
    )

    pdf_path = os.path.join(job_dir, "input.pdf")

    if result.returncode != 0 or not os.path.exists(pdf_path):
        return{
            "success": False,
            "log": result.stdout[-1500:]
        }, job_dir

    with open(pdf_path, "rb")as f:
        pdf_bytes = f.read()
    pdf_base64 = base64.b64encode(pdf_bytes).decode("utf-8")

    return{
        "success":True, "pdf_base64":pdf_base64
    }, job_dir