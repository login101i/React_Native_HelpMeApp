import React from "react";
import createStripe from "stripe-client";
import {host} from '../../utils/env'

const stripe = createStripe(
  "pk_test_51GmO1MCfVm83guzrbVCdP5zvM8tCtXSzEKTdhWwc70PEjKTKzYqaKrDIyKouQ1j4eTavmWVE2GWAyx586n5euxcv00Tu0MacLm"
);

export const cardTokenRequest = (card) => (
    stripe.createToken({card})
)


export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
