import axios from "axios";
import { AddressDto, AddressResponseDto } from "./../Types/AddressTypes";

export function createAddress(addressRequest: AddressDto) {
  return axios.post("/address", addressRequest);
}

export function getAddressesByUserId(
  id: string
): Promise<Array<AddressResponseDto>> {
  return axios.get("/address/user/" + id).then((res) => res.data);
}

export function deleteAddress(id: string): Promise<any> {
  return axios.delete("/address/" + id);
}
