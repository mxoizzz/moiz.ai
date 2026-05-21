import { ai } from "../services/gemini.service";
import { masterContextPrompt } from "../prompts/master-context.prompt";
import { retry } from "../utils/retry";

export async function generateMasterContext(businessData: unknown) {
  const prompt = masterContextPrompt(JSON.stringify(businessData, null, 2));

  const response = await retry(() =>
    ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    }),
  );

  const text = response.text || "";

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedText);
}
