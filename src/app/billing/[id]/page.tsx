'use client'
import React, { useCallback } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import i18n from '@/i18n'
import { useParams, useSearchParams } from 'next/navigation'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
)

export default function BillingPageStripe() {
  const params = useParams()
  const searchParams = useSearchParams()

  const priceId = params?.id
  const planType = searchParams?.get('type')
  const type = planType === 'one_time' ? 'payment' : 'subscription'

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch('/api/stripe/checkout_sessions', {
      method: 'POST',
      body: JSON.stringify({
        language: i18n.language === 'en-US' ? 'en' : 'pt',
        price: priceId,
        type,
      }),
    }).then((res) => res.json())
    return response.clientSecret
  }, [priceId, type])

  const options = { fetchClientSecret }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
