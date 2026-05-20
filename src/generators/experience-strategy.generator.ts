import { ai } from "../services/gemini.service";
import { experienceStrategyPrompt } from "../prompts/experience-strategy.prompt";
import { retry } from "../utils/retry";

export async function generateExperienceStrategy(
  masterContext: unknown,
  designSystem: unknown,
) {
  const prompt = experienceStrategyPrompt(
    JSON.stringify(masterContext, null, 2),
    JSON.stringify(designSystem, null, 2),
  );

  const response = await retry(() =>
    ai.models.generateContent({
      model: "gemini-2.0-flash",
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
