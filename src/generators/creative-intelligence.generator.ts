import { ai } from "../services/gemini.service";
import { creativeIntelligencePrompt } from "../prompts/creative-intelligence.prompt";
import { retry } from "../utils/retry";

export async function generateCreativeIntelligence(
  businessData: unknown
) {
  const prompt = creativeIntelligencePrompt(
    JSON.stringify(businessData, null, 2)
  );

  const response = await retry(() =>
    ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt
    })
  );

  const text = response.text || "";

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedText);
}