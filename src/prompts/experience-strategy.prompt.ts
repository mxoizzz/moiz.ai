export const experienceStrategyPrompt = (
  masterContext: string,
  designSystem: string
) => `
You are a world-class Awwwards-winning creative director, motion designer, cinematic storyteller, and immersive digital experience architect.

Using the following master creative context and design system, generate a deeply immersive website experience strategy.

This should feel like an elite cinematic digital experience — not a normal business website.

Focus heavily on:
- emotional storytelling
- cinematic pacing
- scroll choreography
- immersive transitions
- motion rhythm
- interaction philosophy
- visual sequencing
- premium web experiences
- Awwwards-level interaction design

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.
Do not include code blocks.

Return data in this EXACT structure:

{
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

Master Context:
${masterContext}

Design System:
${designSystem}
`;