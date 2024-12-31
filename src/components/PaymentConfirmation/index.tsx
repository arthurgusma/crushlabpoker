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
    await fetch(`/api/stripe/payment_status?session_id=${sessionId}`)
      .then((res) => {
        if (res.status === 200) {
          toast(t('payments.success'), {
            type: 'success',
            autoClose: 2000,
          })
        }
      })
      .catch((error) => {
        toast(t('payments.error'), {
          type: 'error',
          autoClose: 2000,
        })
        console.error('Error processing request:', error)
      })
      .finally(() => {
        router.push('/home')
      })
  }

  useEffect(() => {
    if (user?.id) getPaymentStatus()
  }, [user?.id])

  return <LoadingSpinner />
}
