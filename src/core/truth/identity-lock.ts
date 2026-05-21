import { BusinessTruthDocument } from "../../schemas/business.schema";

export interface IdentityConstraints {
  approvedThemes: string[];

  forbiddenNarratives: string[];

  approvedVisualDirections: string[];

  unknownSensitiveAreas: string[];
}

export function createIdentityLock(
  business: BusinessTruthDocument
): IdentityConstraints {
  return {
    approvedThemes: [
      ...(business.inferredData.atmosphere || []),
      ...(business.inferredData.brandSignals || []),
      ...(business.creativeDirectionSeed.cinematicTone || [])
    ],

    forbiddenNarratives: [
      ...(business.unknownData.blockedAssumptions || [])
    ],

    approvedVisualDirections: [
      ...(business.creativeDirectionSeed.photographyDirection || []),

      ...(business.creativeDirectionSeed.motionStyle || [])
    ],

    unknownSensitiveAreas: [
      ...(business.unknownData.missingInformation || [])
    ]
  };
}