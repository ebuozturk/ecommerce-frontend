import axios from "axios";
import { BasketType } from "../Types/BasketTypes";

export function addProductToBasket(
  userId: string,
  productId: string,
  amount: number
): Promise<any> {
  return axios
    .post(
      `/basket/addProduct?userId=${userId}&productId=${productId}&amount=${amount}`
    )
    .then((response) => response.data);
}

export function getBasketByUserId(userId: string): Promise<any> {
  return axios.get("/basket/user/" + userId);
}
