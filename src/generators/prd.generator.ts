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

  const text = response.text!;

  return JSON.parse(text);
}