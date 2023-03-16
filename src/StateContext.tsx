import React, { createContext, Dispatch, useContext, useState } from "react";
import { BasketType } from "./Types/BasketTypes";
type GeneralContextType = {
  showBasket: boolean;
  setShowBasket: Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<React.SetStateAction<boolean>>;
  basket: BasketType | null;
  setBasket: Dispatch<React.SetStateAction<BasketType | null>>;
  user: UserType | null;
  setUser: Dispatch<React.SetStateAction<UserType | null>>;
};
const Context = createContext<GeneralContextType>({
  showBasket: false,
  setShowBasket: () => false,
  isLoggedIn: false,
  setIsLoggedIn: () => false,
  basket: null,
  setBasket: () => null,
  user: null,
  setUser: () => null,
});
type UserType = {
  id: string;
};
export const StateContext = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [showBasket, setShowBasket] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [basket, setBasket] = useState<BasketType | null>(null);
  const [user, setUser] = useState<UserType | null>({
    id: "e32f0824-a034-4c94-9517-9c169a4df6b1",
  });
  return (
    <Context.Provider
      value={{
        showBasket,
        setShowBasket,
        isLoggedIn,
        setIsLoggedIn,
        basket,
        setBasket,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
