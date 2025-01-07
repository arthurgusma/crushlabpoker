'use client'
import { useTranslation } from 'react-i18next'
import Stripe from 'stripe'

type PurchaseProps = {
  purchase: Stripe.PaymentIntent
}

export default function PurchaseCard({ purchase }: PurchaseProps) {
  const { t } = useTranslation()
  return (
    <section className="my-6">
      <h2 className="text-xl font-bold mb-2">
        {t('subscription-page.header-purchase')}:
      </h2>
      <div className="flex justify-between items-center">
        <span className="font-medium ">
          {t('subscription-page.status-purchase')}
        </span>
        <span className="font-semibold">
          {purchase?.status === 'succeeded'
            ? t('subscription-page.status-succeeded')
            : purchase?.status === 'canceled'
              ? t('subscription-page.status-canceled')
              : 'N/A'}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-medium">
          {t('subscription-page.purchase-date')}
        </span>
        <span>
          {'created' in purchase
            ? new Date(purchase.created * 1000).toLocaleDateString()
            : 'N/A'}
        </span>
      </div>
    </section>
  )
}
