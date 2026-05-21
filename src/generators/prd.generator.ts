import { ai } from "../services/gemini.service";

import { buildPRDPrompt } from "../prompts/prd.prompt";

export async function generatePRD(
  creativeIntelligence: any
) {
  const prompt =
    buildPRDPrompt(creativeIntelligence);

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: prompt,
    });

  const text = response.text || "";

const jsonStart = text.indexOf("{");

const jsonEnd = text.lastIndexOf("}");

if (jsonStart === -1 || jsonEnd === -1) {
  throw new Error("No valid JSON found in PRD response");
}

const cleanedText = text
  .slice(jsonStart, jsonEnd + 1)
  .trim();

console.log(cleanedText);

return JSON.parse(cleanedText);
}