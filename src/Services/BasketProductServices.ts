import axios from "axios";

export function increaseBasketProduct(basketProductId: string, amount: number) {
  return axios.put(
    `/basketProduct/increase?id=${basketProductId}&amount=${amount}`
  );
}
export const decreaseBasketProduct = async (
  basketProductId: string,
  amount: number
) => {
  return axios.put(
    `/basketProduct/decrease?id=${basketProductId}&amount=${amount}`
  );
};

export const deleteBasketProduct = (basketProductId: string) => {
  return axios.delete(`/basketProduct/${basketProductId}`);
};
