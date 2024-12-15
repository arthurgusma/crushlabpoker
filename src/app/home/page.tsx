'use client'

import Aside from '@/components/Aside'
import ChartOptions from '@/components/ChartOptions'
import { SessionProvider } from 'next-auth/react'

export default function HomePage() {
  return (
    <main className="flex px-20 py-16">
      <SessionProvider>
        <Aside />
        <div className="flex place-items-center justify-around w-full">
          <ChartOptions />
        </div>
      </SessionProvider>
    </main>
  )
}
