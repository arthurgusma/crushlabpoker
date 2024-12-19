'use client'

import { useTranslation } from 'react-i18next'
import PricingCard from './PricingCard/'

import Stripe from 'stripe'

type Props = {
  prices: Stripe.Price[]
}

export default function Pricing({ prices }: Props) {
  const { t } = useTranslation()
  const features = [
    { description: t('subscription-page.features.0'), plan: 'all' },
    { description: t('subscription-page.features.1'), plan: 'all' },
    { description: t('subscription-page.features.2'), plan: 'all' },
    { description: t('subscription-page.features.3'), plan: 'one_time' },
  ]

  const { format: formartCurrencyToReal } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 h-screen -mt-16">
      {prices.map((price) => (
        <PricingCard
          key={price.id}
          plan={price.type || 'one_time'}
          price={formartCurrencyToReal((price.unit_amount || 0) / 100)}
          description={t('subscription-page.description')}
          features={features}
          id={price.id}
        />
      ))}
    </div>
  )
}
