import { z } from "zod";

export const PRDSchema = z.object({
  productVision: z.string(),

  experienceGoals: z.array(z.string()),

  uxArchitecture: z.object({
    sectionHierarchy: z.array(z.string()),
    storytellingFlow: z.string(),
    conversionJourney: z.string(),
    ctaStrategy: z.string(),
  }),

  motionSystem: z.object({
    motionPhilosophy: z.string(),
    transitionStyle: z.string(),
    scrollBehavior: z.string(),
    interactionFeedback: z.string(),
    animationIntensity: z.string(),
  }),

  visualSystem: z.object({
    layoutPhilosophy: z.string(),
    spacingDirection: z.string(),
    componentStyle: z.string(),
    immersiveElements: z.array(z.string()),
  }),

  technicalDirection: z.object({
    frontendFramework: z.string(),

    animationLibraries: z.array(z.string()),

    stylingApproach: z.string(),

    performanceStrategy: z.string(),

    responsiveStrategy: z.string(),
  }),

  implementationPriorities: z.array(z.string()),
});

export type PRD = z.infer<typeof PRDSchema>;