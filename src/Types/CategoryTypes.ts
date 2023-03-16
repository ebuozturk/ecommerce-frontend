export type CategoryType = {
  id: string;
  name: string;
  parentCategoryId?: string;
};
export type CategoryWithChildType = {
  id: string;
  name: string;
  childCategories?: Array<CategoryWithChildType>;
  position?: number;
};
export type CategoryResponseType = {
  id: string;
  name: string;
  position: number;
};
