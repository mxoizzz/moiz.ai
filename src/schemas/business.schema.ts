import { z } from "zod";

export const BusinessSchema = z.object({
  businessName: z.string(),
  category: z.string(),
  rating: z.number(),
  reviewCount: z.number(),
  priceRange: z.string(),

  services: z.array(z.string()),

  topKeywords: z.array(z.string()),

  audience: z.array(z.string()),

  emotionalTone: z.string(),

  strengths: z.array(z.string())
});

export type Business = z.infer<typeof BusinessSchema>;