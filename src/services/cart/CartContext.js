import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

import { AuthenticationContext } from "../authentication/AuthenticationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0)

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

  const saveCart=async(rst, crt, uid)=>{
    try{
      const jsonValue=JSON.stringify({restaurant:rst, cart:crt})
      await AsyncStorage.setItem(`@cart-${uid}`, jsonValue)
    }catch(e){
      console.log("error storing ", e)
    }
  }

  const loadCart=async( uid)=>{
    try{
      const value= await AsyncStorage(`@cart-${uid}`, jsonValue)
      if(value !== null)
      const {restaurant:rst, cart:crt}=JSON.parse(value)
      setRestaurant(rst)
      setCart(crt)
    }catch(e){
      console.log("error storing ", e)
    }
  }

  useEffect(() => {
    if (user && user.uid) {
      saveCart(restaurant, cart, user.uid);
    }
  }, [restaurant, cart, user]);

  useEffect(() => {
    if (user && user.uid) {
      loadCart( user.uid);
    }
  }, [user]);


  const calculateSum = (cartItems) => {
    // let sum = 0;
    // for (i = 0; i >= cart.length; i++) {
    //   sum += cartItems.cart.price[i];
    // return sum
    const newSum =cartItems.reduce((acc, {price})=>{
      return (acc+=price)
    },0)
    setSum(newSum);
  };

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    calculateSum(cart);
  }, [cart]);

  return <CartContext.Provider
   value={{
    cart,
    restaurant,
    addToCart:add,
    clearCart:clear,
    sum

  }}>{children}</CartContext.Provider>;
};
