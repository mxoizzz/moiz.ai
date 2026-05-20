export const businessAnalysisPrompt = (rawData: string) => `
You are an AI business intelligence engine.

Analyze the following raw business data and return ONLY valid JSON.

Do not include markdown.
Do not include explanations.
Do not include code blocks.

Return data in this exact structure:

{
  "businessName": "",
  "category": "",
  "rating": 0,
  "reviewCount": 0,
  "priceRange": "",

  "services": [],

  "topKeywords": [],

  "audience": [],

  "emotionalTone": "",

  "strengths": []
}

Raw Business Data:
${rawData}
`;