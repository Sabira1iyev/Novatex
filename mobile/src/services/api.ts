import { API_URL } from "@/contants.ts/config";

export type CompileResult =
  | { success: true; pdf_base64: string, job_id: string }
  | { success: false; log: string, job_dir?: string };

export async function compileLatex(content: string): Promise<CompileResult> {
  const response = await fetch(`${API_URL}/compile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

  const data = await response.json();
  return data;
}

export const syncTex = async (
  jobId: string,
  page: number,
  x: number,
  y: number,
) => {
  try {
    const response = await fetch(`${API_URL}/synctex`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job_id: jobId,
        page: page,
        x: x,
        y: y,
      }),
    });
    return await response.json();
  } catch (error) {
    console.error("Synctex error:", error);
    return {
      success: false,
      error: "Connection error",
    };
  }
};
