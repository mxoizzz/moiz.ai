import { ai } from "../services/gemini.service";
import { creativeIntelligencePrompt } from "../prompts/creative-intelligence.prompt";
import { retry } from "../utils/retry";
import { BusinessTruthDocument } from "../schemas/business.schema";
import { createIdentityLock } from "../core/truth/identity-lock";

export async function generateCreativeIntelligence(
  businessData: BusinessTruthDocument
){
  const identityLock =
    createIdentityLock(businessData);
  const prompt =
    creativeIntelligencePrompt(
    businessData,
    identityLock
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
    console.log(text);
  return JSON.parse(cleanedText);
}