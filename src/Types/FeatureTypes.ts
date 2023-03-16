import { FeatureTypeDto } from "./FeatureTypeTypes";

export type FeatureDto = {
  id: string;
  name: string;
  featureType?: FeatureTypeDto;
};
