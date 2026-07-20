import shutil
import os
import shutil

def cleanup_job(directory: str):
    try:
        if os.path.exists(directory):
            shutil.rmtree(directory)
    except Exception as e:
        print (f"Cleanup error ({directory}): {e}")