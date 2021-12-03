import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CreditCardInput } from "../components/CreditCardInput";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  ClearButton,
  PaymentProcessing
} from "./components/CheckoutStyles";
import { SafeArea, Text, Spacer } from "../../../components";
import { CartContext } from "../../../services/cart/cartContext";
import { RestaurantInfoCard } from "../../restaurants/components/RestaurantInfoCard";

import { payRequest } from "../../../services/checkout/CheckoutServise";

const { cart } = useContext(CartContext);

const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");

  const [card, setCard] = useState(null);

  const onPay = () => {
    setIsLoading(false);
    if (!card || !card.id) {
      navigation.navitage("CheckoutError", {
        error: "Please fill in a valid credit card"
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navitage("CheckoutError", {
          error: err
        });
      });
  };

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
      {isLoading && <PaymentProcessing />}

      <ScrollView>
        <Spacer position="top" size="medium">
          <Text>Your order</Text>
          <Text>{cart}</Text>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} : price ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total : {sum / 1000}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput
              neme={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate("CheckoutError", {
                  error: "Something went wrong processing your credit card"
                })
              }
            />
          )}
        </Spacer>

        <PayButton
          disabled={isLoading}
          icon="cash-usd"
          mode="contained"
          onPress={onPay}
        >
          Pay
        </PayButton>

        <Spacer position="top" size="large">
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </>
  );
};

export default CheckoutScreen;
