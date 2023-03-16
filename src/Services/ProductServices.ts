import { GetProductByMainProductAndFeatureIdsRequest } from "./../Types/ProductTypes";
import { ProductResponseType } from "../Types/ProductTypes";
import axios from "axios";
import { Dispatch } from "react";

export function getAllProducts(): Promise<Array<ProductResponseType>> {
  return axios.get("/product").then((response) => response.data);
}

export function getProductById(id: string): Promise<ProductResponseType> {
  return axios.get("/product/" + id).then((response) => response.data);
}

export function getProductsByCategoryId(categoryId: string): Promise<any> {
  return axios.get("/product/category/" + categoryId);
}

export function searchProduct(query: string): Promise<any> {
  return axios.get("/product/search/" + query);
}

export function getProductByMainProductAndFeature(
  request: GetProductByMainProductAndFeatureIdsRequest
): Promise<any> {
  return axios.post(`/product/getProductByMainProductIdAndFeatureIds`, request);
}
