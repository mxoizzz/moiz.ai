import { ai } from "../services/gemini.service";
import { designSystemPrompt } from "../prompts/design-system.prompt";
import { retry } from "../utils/retry";

export async function generateDesignSystem(masterContext: unknown) {
  const prompt = designSystemPrompt(JSON.stringify(masterContext, null, 2));

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
