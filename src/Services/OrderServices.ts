import axios from "axios";
import { OrderDto } from "./../Types/OrderTypes";

export function createOrder(
  userId: string,
  deliveryAddressId: string,
  billAddressId: string
): Promise<any> {
  return axios.post("/order", {
    userId,
    deliveryAddressId,
    billAddressId,
  });
}

export function getOrdersByUserId(userId: string): Promise<any> {
  return axios.get("/order/user/" + userId);
}
