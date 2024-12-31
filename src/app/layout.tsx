import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crush Lab Poker',
  description: 'Seja lucrativo no poker com Crush Lab Poker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
