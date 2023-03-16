import { FeatureDto } from "./FeatureTypes";

export type FeatureTypeDto = {
  id: string;
  name: string;
  featureDtos?: Array<FeatureDto>;
};
