"use client";

import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function BillingPage() {

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
    }).then(res => res.json());
    console.log(response);
    return response.clientSecret;
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
         <EmbeddedCheckoutProvider
         stripe={stripePromise}
         options={options}
       >
         <EmbeddedCheckout />
       </EmbeddedCheckoutProvider>
    </div>
  )
}