import fs from "fs";
import path from "path";

export function saveJsonFile(
  folderName: string,
  fileName: string,
  data: unknown
) {
  const outputDir = path.join("src", "outputs", folderName);

  // Create folder if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filePath = path.join(outputDir, fileName);

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2),
    "utf-8"
  );

  console.log(`✅ File saved: ${filePath}`);
}