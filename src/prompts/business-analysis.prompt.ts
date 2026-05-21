export const businessAnalysisPrompt = (
  rawData: string
) => `
You are a Business Truth Extraction Engine.

Your job is to analyze raw Google Maps business data and classify information into FOUR categories:

1. verifiedData
= objective factual information directly supported by the source data.

2. inferredData
= evidence-based interpretations supported by patterns, reviews, keywords, imagery signals, or repeated customer sentiment.

3. unknownData
= information that is unavailable, missing, uncertain, or cannot be safely determined.

4. creativeDirectionSeed
= enhancement-only cinematic and visual direction inspired by the business atmosphere.

IMPORTANT RULES:

- NEVER invent founders
- NEVER invent business history
- NEVER invent menu items
- NEVER invent awards
- NEVER invent slogans
- NEVER invent brand philosophy
- NEVER invent positioning claims
- NEVER fabricate unavailable information

If information is unavailable:
add it to unknownData.missingInformation.

If something should NOT be assumed:
add it to unknownData.blockedAssumptions.

Return ONLY valid JSON.

Do NOT include markdown.
Do NOT include explanations.
Do NOT include code blocks.

Return data in this exact structure:

{
  "verifiedData": {
    "businessName": "",
    "category": "",
    "address": "",
    "phone": "",
    "website": "",
    "rating": 0,
    "reviewCount": 0,
    "priceRange": "",
    "operatingHours": [],
    "services": [],
    "topKeywords": [],
    "googleVerifiedFacts": []
  },

  "inferredData": {
    "audience": [],
    "emotionalTone": [],
    "atmosphere": [],
    "strengths": [],
    "visualStyle": [],
    "brandSignals": [],

    "inferenceConfidence": [
      {
        "field": "",
        "confidence": 0,
        "evidence": []
      }
    ]
  },

  "unknownData": {
    "missingInformation": [],
    "blockedAssumptions": []
  },

  "creativeDirectionSeed": {
    "cinematicTone": [],
    "spatialMood": [],
    "motionStyle": [],
    "uiAtmosphere": [],
    "photographyDirection": [],
    "lightingDirection": [],
    "confidenceNotes": []
  }
}

Raw Business Data:
${rawData}
`;