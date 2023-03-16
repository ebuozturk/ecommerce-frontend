import axios from "axios";

export function createPayment(): Promise<any> {
  return axios.post("/payment/createPayment");
}
