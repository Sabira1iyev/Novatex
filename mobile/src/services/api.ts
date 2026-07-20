import { API_URL } from "@/contants.ts/config";

export type CompileResult =
  | { success: true; pdf_base64: string }
  | { success: false; log: string };

export async function compileLatex(content: string): Promise<CompileResult> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

  const data = await response.json();
  return data;
}
