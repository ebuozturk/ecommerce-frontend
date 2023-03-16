import { StoreType } from "./StoreTypes";
import { FeatureDto } from "./FeatureTypes";
import { MainProductResponseType } from "./MainProducTypes";

export type ProductResponseType = {
  id: string;
  name: string;
  mainProductId: string;
  unitsInStock: number;
  unitPrice: number;
  quantityPerUnit: number;
  featureList: Array<FeatureDto>;
  store: StoreType;
  mainProduct: MainProductResponseType | null;
};

export type ProductEsType = {
  id: string;
  name: string;
  productId: string;
  featureList: Array<string>;
  unitPrice: number;
};

export type GetProductByMainProductAndFeatureIdsRequest = {
  mainProductId: string;
  featureIdList: Array<string>;
};
