'use client'

import Aside from '@/components/Aside'
import ChartOptions from '@/components/ChartOptions'
import { SessionProvider } from 'next-auth/react'

export default function HomePage() {
  return (
    <main className="md:flex md:px-20 px-5 max-sm:px-3 py-16 max-sm:py-4">
      <SessionProvider>
        <Aside />
        <div className="flex place-items-center justify-around w-full">
          <ChartOptions />
        </div>
      </SessionProvider>
    </main>
  )
}
