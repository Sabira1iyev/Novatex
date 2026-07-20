import { File, Paths, EncodingType } from "expo-file-system";
import * as Sharing from "expo-sharing";

export async function saveAndSharePdf(base64: string) {
  const outputFile = new File(Paths.document, "output.pdf");
  outputFile.write(base64, { encoding: EncodingType.Base64 });
  await Sharing.shareAsync(outputFile.uri);
}
