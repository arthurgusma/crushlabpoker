import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner'

import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

type Props = {
  sessionId: string
}

export default function PaymentConfirmation({ sessionId }: Props) {
  const { data } = useSession()
  const user = data?.user
  const router = useRouter()
  const { t } = useTranslation()

  async function getPaymentStatus() {
    try {
      await fetch(`/api/stripe/payment_status?session_id=${sessionId}`)
      toast(t('payments.success'), {
        type: 'success',
        autoClose: 2000,
      })
      router.push('/home')
    } catch (error) {
      toast(t('payments.error'), {
        type: 'error',
        autoClose: 2000,
      })
      console.error('Error processing request:', error)
    }
  }

  useEffect(() => {
    if (user?.id) getPaymentStatus()
  }, [user?.id])

  return <LoadingSpinner />
}
