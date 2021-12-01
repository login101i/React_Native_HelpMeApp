import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

import { AuthenticationContext } from "../authentication/AuthenticationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const { user } = useContext(AuthenticationContext);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return <CartContext.Provider
   value={{
    cart,
    restaurant,
    addToCart:add,
    clearCart:clear

  }}>{children}</CartContext.Provider>;
};
