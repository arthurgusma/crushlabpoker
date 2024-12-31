'use client'
import PaymentConfirmation from '@/components/PaymentConfirmation'
import LoadingSpinner from '@/components/UI/LoadingSpinner'
import { SessionProvider } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function ConfirmPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <SessionProvider>
      {sessionId ? (
        <PaymentConfirmation sessionId={sessionId} />
      ) : (
        <LoadingSpinner />
      )}
    </SessionProvider>
  )
}
