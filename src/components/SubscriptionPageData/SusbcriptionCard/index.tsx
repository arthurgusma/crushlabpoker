'use client'
import { CancelSubscriptionButton } from '@/components/UI/Buttons'
import ConfirmationDialog from '@/components/UI/Dialog'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import Stripe from 'stripe'

type Props = {
  subscription: Stripe.Subscription
}

export default function SubscriptionCard({ subscription }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const { t } = useTranslation()

  async function handleCancelSubscription() {
    try {
      const response = await fetch('/api/stripe/cancel_subscription', {
        method: 'POST',
        body: JSON.stringify({ subscriptionId: subscription.id }),
      })

      if (response.ok) {
        toast.success('Subscription canceled successfully')
      }
    } catch (error) {
      toast.error('An error occurred while canceling the subscription')
    } finally {
      setDialogOpen(false)
    }
  }

  return (
    <section className="my-6">
      <h2 className="text-xl font-bold mb-2">
        {t('subscription-page.header-subscription')}:
      </h2>
      <div className="flex justify-between items-center">
        <span className="font-medium">
          {t('subscription-page.status-purchase')}
        </span>
        <span className="font-semibold">
          {subscription?.status === 'active'
            ? t('subscription-page.status-active')
            : subscription?.status === 'canceled'
              ? t('subscription-page.status-canceled')
              : 'N/A'}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-medium">
          {t('subscription-page.purchase-date')}
        </span>
        <span>
          {'created' in subscription
            ? new Date(subscription.created * 1000).toLocaleDateString()
            : 'N/A'}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-medium">
          {t('subscription-page.current-period-start')}
        </span>
        <span>
          {'current_period_start' in subscription
            ? new Date(subscription.current_period_start * 1000).toDateString()
            : 'N/A'}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-medium">
          {t('subscription-page.current-period-end')}
        </span>
        <span>
          {'current_period_end' in subscription
            ? new Date(subscription.current_period_end * 1000).toDateString()
            : 'N/A'}
        </span>
      </div>
      {subscription.status === 'active' && (
        <div className="my-6">
          <CancelSubscriptionButton onClick={() => setDialogOpen(true)}>
            {t('subscription-page.cancel-subscription')}
          </CancelSubscriptionButton>
        </div>
      )}
      <ConfirmationDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleConfirm={() => {
          handleCancelSubscription()
          setDialogOpen(false)
        }}
        title="Cancel Subscription"
        dialogText="Tem certeza que deeja cancelar a assinatura? Você só tera acesso ao charts até o fim do periodo de cobrança atual."
      />
    </section>
  )
}
