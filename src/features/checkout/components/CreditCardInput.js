import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import createStripe from 'stripe-client'

const stripe=createStripe("pk_test_51GmO1MCfVm83guzrbVCdP5zvM8tCtXSzEKTdhWwc70PEjKTKzYqaKrDIyKouQ1j4eTavmWVE2GWAyx586n5euxcv00Tu0MacLm")

export const  CreditCardInput = async() => {
  const onChange = (formData) => {
    console.log(formData);

    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
   const info=await stripe.createToken({card})
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
