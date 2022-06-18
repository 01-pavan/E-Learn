import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const PUBLIC_KEY =
  "pk_test_51L9hYCSFHVQAiff6Mc4AT1Ecg939Vbjr4nPnwLMTL2RhYUm5RYhLQEm2xP9VG5Y0t93ALcC4WQW4zHoAMFRPJP8I00GKE4bbfP";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
