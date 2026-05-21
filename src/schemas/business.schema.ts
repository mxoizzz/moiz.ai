import { z } from "zod";

export const VerifiedDataSchema = z.object({
  businessName: z.string().optional(),
  category: z.string().optional(),

  address: z.string().optional(),
  phone: z.string().optional(),
  website: z.string().optional(),

  rating: z.number().optional(),
  reviewCount: z.number().optional(),

  priceRange: z.string().optional(),

  operatingHours: z.array(z.string()).optional(),

  services: z.array(z.string()).optional(),

  topKeywords: z.array(z.string()).optional(),

  googleVerifiedFacts: z.array(z.string()).optional()
});

export const InferenceConfidenceSchema = z.object({
  field: z.string(),
  confidence: z.number(),
  evidence: z.array(z.string())
});

export const InferredDataSchema = z.object({
  audience: z.array(z.string()).optional(),

  emotionalTone: z.array(z.string()).optional(),

  atmosphere: z.array(z.string()).optional(),

  strengths: z.array(z.string()).optional(),

  visualStyle: z.array(z.string()).optional(),

  brandSignals: z.array(z.string()).optional(),

  inferenceConfidence: z
    .array(InferenceConfidenceSchema)
    .optional()
});

export const UnknownDataSchema = z.object({
  missingInformation: z.array(z.string()).optional(),

  blockedAssumptions: z.array(z.string()).optional()
});

export const CreativeDirectionSeedSchema = z.object({
  cinematicTone: z.array(z.string()).optional(),

  spatialMood: z.array(z.string()).optional(),

  motionStyle: z.array(z.string()).optional(),

  uiAtmosphere: z.array(z.string()).optional(),

  photographyDirection: z.array(z.string()).optional(),

  lightingDirection: z.array(z.string()).optional(),

  confidenceNotes: z.array(z.string()).optional()
});

export const BusinessTruthDocumentSchema = z.object({
  verifiedData: VerifiedDataSchema,

  inferredData: InferredDataSchema,

  unknownData: UnknownDataSchema,

  creativeDirectionSeed: CreativeDirectionSeedSchema
});

export type BusinessTruthDocument = z.infer<
  typeof BusinessTruthDocumentSchema
>;