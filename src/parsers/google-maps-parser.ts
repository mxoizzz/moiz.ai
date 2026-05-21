import { ai } from "../services/gemini.service";
import { businessAnalysisPrompt } from "../prompts/business-analysis.prompt";
import { BusinessSchema } from "../schemas/business.schema";

export async function parseGoogleMapsData(rawData: string) {
  const prompt = businessAnalysisPrompt(rawData);

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt
  });

  const text = response.text || "";

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const parsedJson = JSON.parse(cleanedText);

  const validatedData = BusinessSchema.parse(parsedJson);

  return validatedData;
}