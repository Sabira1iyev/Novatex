import subprocess
import shutil
import os
import shutil

def cleanup_job(directory: str):
    try:
        if os.path.exists(directory):
            shutil.rmtree(directory)
    except Exception as e:
        print (f"Cleanup error ({directory}): {e}")


def run_synctex(job_dir:str, page:int, x:float, y:float):
    pdf_path = os.path.join(job_dir, "input.pdf")
    result = subprocess.run(
        ["synctex", "edit", "-o", f"{page}:{x}:{y}:{pdf_path}"],
        capture_output=True,
        text=True
    )
    line = None
    for line_text in result.stdout.splitlines():
        if line_text.startswith("Line:"):
            line = int(line_text.split(":")[1])
            break
    return line