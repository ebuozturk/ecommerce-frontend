import { RouteObject } from "react-router-dom";
import Payment from "./Payment";
import PaymentResult from "./PaymentResult";

export const PAYMENT_BASE_ROUTES = {
  index: "/payment",
  paymentStatusUrl: "/paymentStatus/:status",
  //   unsuccessUrl: "/payment?status=unsuccess",
};

export const paymentRoutes: RouteObject[] = [
  {
    path: PAYMENT_BASE_ROUTES.index,
    element: <Payment />,
  },
  {
    path: PAYMENT_BASE_ROUTES.paymentStatusUrl,
    element: <PaymentResult />,
  },
];
