import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CreditCardInput } from "./components/CreditCardInput";
import { CartContext } from "../../../services/cart/cartContext";
import { SafeArea } from "../../../components/SafeArea";
import { Text } from "../../../components/Text";
import { CartIconContainer } from "../components/CheckoutStyles";
import { CartIcon } from "../components/CheckoutStyles";
import { Spacer } from "../../../components/Spacer";

import { RestaurantInfoCard } from "../../restaurants/components/RestaurantInfoCard";

const { cart } = useContext(CartContext);

const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="top" size="medium">
          <Text>Your order</Text>
          <Text>{cart}</Text>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} : price ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total : {sum/1000}</Text>
        </Spacer>
        <CreditCardInput />
      </ScrollView>
    </>
  );
};

export default CheckoutScreen;
