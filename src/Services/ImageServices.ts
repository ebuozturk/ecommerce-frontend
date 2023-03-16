import { ProductImageDto } from "../Types/ImageTypes";
import axios from "axios";

export function getProductCoverImage(
  productId: string
): Promise<ProductImageDto> {
  return axios
    .get("/images/product/coverImage/" + productId)
    .then((response) => response.data);
}

export function getProductImagesById(
  productId: string
): Promise<Array<ProductImageDto>> {
  return axios
    .get("/images/product/" + productId)
    .then((response) => response.data);
}
