export const masterContextPrompt = (businessData: string) => `
You are a world-class creative strategist, brand architect, and digital experience designer.

Analyze the following business intelligence data and generate a deeply structured creative direction.

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.
Do not include code blocks.

Return data in this exact structure:

{
  "brandPersonality": "",
  "brandPositioning": "",
  "visualStyle": "",
  "colorPsychology": [],
  "typographyDirection": "",
  "motionStyle": "",
  "uxPhilosophy": "",
  "emotionalExperience": "",
  "storytellingStyle": "",
  "ctaStrategy": "",
  "designKeywords": []
}

Business Intelligence Data:
${businessData}
`;