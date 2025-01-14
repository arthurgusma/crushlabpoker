'use client'

import { SessionProvider } from 'next-auth/react'
import Aside from '../Aside'
import Stripe from 'stripe'
import { useTranslation } from 'react-i18next'
import SubscriptionCard from './SusbcriptionCard'
import PurchaseCard from './PurchaseCard'
import { useEffect, useState } from 'react'

type Props = {
  subscription: (Stripe.Subscription | Stripe.PaymentIntent)[]
}

export default function SubscriptionPageData({ subscription }: Props) {
  const [language, setLanguage] = useState('pt-BR')
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const storadedLanguage = localStorage.getItem('language')
    if (storadedLanguage) {
      setLanguage(storadedLanguage)
    }
  }, [i18n.language])

  return (
    <main className="md:flex px-6 md:px-20 py-16">
      <SessionProvider>
        <Aside />
      </SessionProvider>
      <div className="w-full max-w-2xl mx-auto bg-main-dark-green p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-6">
          {t('subscription-page.info')}
        </h2>
        {subscription.map((sub) =>
          sub.object === 'payment_intent' ? (
            <PurchaseCard key={sub.id} purchase={sub} language={language} />
          ) : (
            <SubscriptionCard
              key={sub.id}
              subscription={sub}
              language={language}
            />
          ),
        )}
      </div>
    </main>
  )
}
