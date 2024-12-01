"use client";

import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import i18n from '@/i18n';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function BillingPage() {

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      body: JSON.stringify({
        language: i18n.language === "en-US" ? "en" : "pt",
      }),
    }).then(res => res.json());
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