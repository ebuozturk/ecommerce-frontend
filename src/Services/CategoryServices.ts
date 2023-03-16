import axios from "axios";

export function getCategoriesWithChild(): Promise<any> {
  return axios.get("/category/getAllWithChild");
}
export function getAllMainCategories(): Promise<any> {
  return axios.get("/category/getAllMainCategories");
}
export function getAllMainCategoriesWithChilds(): Promise<any> {
  return axios.get("/category/getAllMainCategoriesWithChilds");
}
export function getCategoryWithChildById(id: string): Promise<any> {
  return axios.get(`/category/${id}/getWithChilds`);
}
