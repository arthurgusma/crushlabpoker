'use client'

import PaymentConfirmation from '@/components/PaymentConfirmation'
import LoadingSpinner from '@/components/UI/LoadingSpinner'
import { SessionProvider } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ConfirmContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return sessionId ? (
    <PaymentConfirmation sessionId={sessionId} />
  ) : (
    <LoadingSpinner />
  )
}

export default function ConfirmPage() {
  return (
    <SessionProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <ConfirmContent />
      </Suspense>
    </SessionProvider>
  )
}
