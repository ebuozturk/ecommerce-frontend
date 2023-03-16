import { CategoryResponseType } from "./CategoryTypes";

export type MainProductResponseType = {
  id: string;
  name: string;
  description: string;
  brandId: string;
  category: CategoryResponseType;
  warrantyType: string;
};
