import React from "react";

import { Text, SafeArea} from "../../../components/Text";
import { CartIconContainer, CartIcon } from "../components/CheckoutStyles";

export const CheckoutErrorScreen = ({ route }) => {
    const { error = "" } = route.params;
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="close" bg={colors.ui.error} />
          <Text variant="label">{error}</Text>
        </CartIconContainer>
      </SafeArea>
    );
  };
  