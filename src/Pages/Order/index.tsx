import { RouteObject } from "react-router-dom";
import Order from "./Order";

export const ORDER_BASE_ROUTES = {
  index: "/orders",
};

export const orderRoutes: RouteObject[] = [
  {
    path: ORDER_BASE_ROUTES.index,
    element: <Order />,
  },
];
