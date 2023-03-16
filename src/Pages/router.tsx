import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { accountRoutes } from "./Account";
import { authRoutes } from "./Auth";
import { categoryRoutes } from "./Category";
import { landingRoutes } from "./Landing";
import { orderRoutes } from "./Order";
import { paymentRoutes } from "./Payment";
import { productRoutes } from "./Product";

export const generateRoutes = () => {
  const generatedRoutes = [
    ...landingRoutes,
    ...paymentRoutes,
    ...productRoutes,
    ...accountRoutes,
    ...orderRoutes,
    ...authRoutes,
    ...categoryRoutes,
  ];
  return generatedRoutes;
};

export const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
