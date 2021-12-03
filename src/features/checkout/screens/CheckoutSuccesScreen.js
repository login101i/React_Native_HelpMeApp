import React from "react";

import { Text, SafeArea} from "../../../components/Text";
import { CartIconContainer, CartIcon } from "../components/CheckoutStyles";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
