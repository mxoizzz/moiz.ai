export const designSystemPrompt = (
  masterContext: string
) => `
You are a world-class UI/UX design director and award-winning visual strategist.

Using the following master creative context, generate a complete visual design system.

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.
Do not include code blocks.

Return data in this exact structure:

{
  "primaryColors": [],
  "secondaryColors": [],
  "gradients": [],
  "fontPairings": [],
  "spacingStyle": "",
  "borderRadius": "",
  "shadowStyle": "",
  "uiStyle": "",
  "glassmorphismLevel": "",
  "animationIntensity": "",
  "sectionMood": [],
  "componentStyle": ""
}

Master Context:
${masterContext}
`;