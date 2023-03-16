import axios from "axios";

export function getFeaturesByMainProductId(
  mainProductId: string
): Promise<any> {
  return axios.get(`/feature/mainProduct/${mainProductId}`);
}
