import { ai } from "../services/gemini.service";

import { buildPromptOrchestrationPrompt } from "../prompts/prompt-orchestration.prompt";

import { MODEL_NAME } from "../config/model.config";

export async function generatePromptPack(
  creativeIntelligence: any,
  prd: any
) {
  const prompt =
    buildPromptOrchestrationPrompt(
      creativeIntelligence,
      prd
    );

  const response =
    await ai.models.generateContent({
      model: MODEL_NAME,

      contents: prompt,
    });

  return JSON.parse(response.text!);
}