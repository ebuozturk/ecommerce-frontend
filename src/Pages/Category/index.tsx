import { Box } from "@mui/material";
import { RouteObject } from "react-router-dom";
import Category from "./Category";

export const CATEGORY_BASE_ROUTES = {
  index: "/category/:categoryId",
};

export const categoryRoutes: RouteObject[] = [
  {
    path: CATEGORY_BASE_ROUTES.index,
    element: <Category />,
  },
];
