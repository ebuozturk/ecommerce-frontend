import { Button, ThemeProvider } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { useStateContext } from "./StateContext";

import { generateRoutes, Root } from "./Pages/router";
import theme from "./Styles/Styles";
import { getBasketByUserId } from "./Services/BasketServices";

function App() {
  const { isLoggedIn, setIsLoggedIn, setBasket, user } = useStateContext();

  const rootRouter: RouteObject = useMemo(
    () => ({
      path: "/",
      element: <Root />,
      errorElement: <div>it's cold outside.</div>,
      children: generateRoutes(),
    }),
    [isLoggedIn]
  );
  const router = useMemo(() => createBrowserRouter([rootRouter]), [isLoggedIn]);

  useEffect(() => {
    if (user !== null)
      getBasketByUserId(user.id)
        .then((res) => setBasket(res.data))
        .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login/Logout</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
