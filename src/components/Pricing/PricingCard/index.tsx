'use client'

import { ButtonSubscribe } from '@/components/UI/Buttons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface PricingCardProps {
  plan: 'one_time' | 'recurring'
  price: string
  description: string
  features: {
    description: string
    plan: string
  }[]
  id: string
}

export default function PricingCard({
  plan,
  price,
  description,
  features,
  id,
}: PricingCardProps) {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white text-main-green max-w-80">
      <h2 className="text-2xl font-semibold">
        {plan === 'one_time'
          ? t('subscription-page.buy')
          : t('subscription-page.subscribe')}
      </h2>

      <div className="text-4xl font-bold mb-4">
        <span className="text-lg font-medium">
          {plan === 'one_time'
            ? t('subscription-page.buy-recorring')
            : t('subscription-page.subscribe-recorring')}
        </span>
        <p className="text-main-gold">{price}</p>
      </div>

      <p className="text-sm mb-4">{description}</p>

      <ButtonSubscribe
        onClick={() => router.push(`/pt-BR/billing/${id}?type=${plan}`)}
      >
        {plan === 'one_time'
          ? t('subscription-page.buy-button')
          : t('subscription-page.subscribe-button')}
      </ButtonSubscribe>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">
              {feature.plan !== 'all' && feature.plan !== plan ? '🚫' : '✅'}
            </span>
            {feature.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
