import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner'

type Props = {
  sessionId: string
}

export default function PaymentConfirmation({ sessionId }: Props) {
  const { data } = useSession()
  const user = data?.user
  const router = useRouter()

  async function getPaymentStatus() {
    try {
      await fetch(`/api/stripe/payment_status?session_id=${sessionId}`)
      router.push('/home')
    } catch (error) {
      console.error('Error processing request:', error)
    }
  }

  useEffect(() => {
    if (user?.id) getPaymentStatus()
  }, [user?.id])

  return <LoadingSpinner />
}
