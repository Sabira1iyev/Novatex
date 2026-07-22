import subprocess
import os
import uuid
import base64


def detect_engine(content:str)-> str:
    lualatex_signals = ["fontspec", "luacode", "polyglossia", "luatexja"]
    for signal in lualatex_signals:
        if f"\\usepackage{{{signal}}}" in content:
            return "lualatex"
    return "pdflatex"

def compile_latex(content: str):
    try:
        job_id = str(uuid.uuid4())
        job_dir = f"jobs/{job_id}"
        os.makedirs(job_dir, exist_ok=True)

        text_path = os.path.join(job_dir, "input.tex")
        with open(text_path, "w", encoding="utf-8") as f:
            f.write(content)
        
        engine = detect_engine(content)
        
        result = subprocess.run(
            ["latexmk", f"-{engine}", "-interaction=nonstopmode","-halt-on-error", "-synctex=1", "input.tex"],
            cwd=job_dir,
            capture_output=True,
            encoding= "utf-8",
            errors="replace"
        )

        pdf_path = os.path.join(job_dir, "input.pdf")

        if result.returncode != 0 or not os.path.exists(pdf_path):
            lines = result.stdout.splitlines()
            error_lines = []
            for i, line in enumerate(lines):
                if line.startswith("!"):
                    start = max(0, i - 1)
                    end = min(len(lines), i + 4)
                    error_lines.extend(lines[start:end])
                    error_lines.append("---")
            
            log = "\n".join(error_lines) if error_lines else result.stdout[-1500:]

            return{
                "success": False,
                "log": log
            }, job_dir


        with open(pdf_path, "rb")as f:
            pdf_bytes = f.read()
        pdf_base64 = base64.b64encode(pdf_bytes).decode("utf-8")

        return{
            "success":True, "pdf_base64":pdf_base64
        }, job_dir
    
    except Exception as e:
        return {
            "success": False,
            "log": str(e)
        },None