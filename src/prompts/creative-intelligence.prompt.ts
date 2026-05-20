export const creativeIntelligencePrompt = (
  businessData: string
) => `
You are a world-class:
- creative strategist
- brand architect
- cinematic experience designer
- Awwwards-winning UI/UX director
- motion storyteller

Using the following business intelligence data, generate a deeply immersive creative intelligence system for a premium cinematic website experience.

The website should feel:
- immersive
- cinematic
- emotional
- modern
- premium
- story-driven
- Awwwards-level

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.
Do not include code blocks.

Return data in this EXACT structure:

{
  "masterContext": {
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
  },

  "designSystem": {
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
  },

  "experienceStrategy": {
    "heroConcept": "",
    "scrollNarrative": "",
    "motionPhilosophy": "",
    "transitionStyle": "",
    "interactionStyle": "",
    "emotionalPacing": [],
    "immersiveMoments": [],
    "sectionFlow": [],
    "parallaxDepthStrategy": "",
    "cinematicElements": [],
    "cursorBehavior": "",
    "visualRhythm": ""
  }
}

Business Intelligence:
${businessData}
`;