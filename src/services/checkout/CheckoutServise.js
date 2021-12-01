import React from "react";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51GmO1MCfVm83guzrbVCdP5zvM8tCtXSzEKTdhWwc70PEjKTKzYqaKrDIyKouQ1j4eTavmWVE2GWAyx586n5euxcv00Tu0MacLm"
);

export const cardTokenRequest = (card) => (
    stripe.createToken({card})
)