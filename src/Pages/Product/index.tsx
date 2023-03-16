import { RouteObject } from "react-router-dom";
import Product from "./Product";
import SearchedProducts from "./SearchedProduct";

export const PRODUCT_BASE_ROUTES = {
  index: "/product/:productId",
  search: "/search/:query",
};

export const productRoutes: RouteObject[] = [
  {
    path: PRODUCT_BASE_ROUTES.index,
    element: <Product />,
  },
  {
    path: PRODUCT_BASE_ROUTES.search,
    element: <SearchedProducts />,
  },
];
