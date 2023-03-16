import axios from "axios";

export function getFeatureTypesByMainProductId(
  mainProductId: string
): Promise<any> {
  return axios.get(`/featureType/mainProduct/${mainProductId}`);
}
