import { API_URL } from "@/contants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type CompileResult =
  | { success: true; pdf_base64: string; job_id: string }
  | { success: false; log: string; job_dir?: string };

export async function compileLatex(content: string): Promise<CompileResult> {
  const token = await AsyncStorage.getItem("userToken");
  const response = await fetch(`${API_URL}/compile`, {
    method: "POST",
    headers: { "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
     },
    body: JSON.stringify({ content }),
  });

  const data = await response.json();
  console.log("Compile status:", response.status);
  console.log("Compile response:", data)
  return data;
}

export const syncTex = async (
  jobId: string,
  page: number,
  x: number,
  y: number,
) => {
  try {
    const token =  await AsyncStorage.getItem("userToken");
    const response = await fetch(`${API_URL}/synctex`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        job_id: jobId,
        page: page,
        x: x,
        y: y,
      }),
    });

    console.log("synctex status:", response.status);
    console.log("synctex response:", await response.clone().json())
    return await response.json();
  } catch (error) {
    console.error("Synctex error:", error);
    return {
      success: false,
      error: "Connection error",
    };
  }
};
