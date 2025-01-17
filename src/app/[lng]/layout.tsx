import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'
import ContactUs from '@/components/ContactUs'
import { dir } from 'i18next'
import { languages } from '@/lib/i18nSettings'

export async function generateStaticParams() {
  return languages.map((locale) => ({ lng: locale }))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crush Lab Poker',
  description: 'Seja lucrativo no poker com Crush Lab Poker',
  keywords:
    'poker, poker online, poker ao vivo, charts, pre flop, pré flop, pre-flop, ranges, range, gráficos, gráfico, lucrativo no poker, lucratividade no poker, poker lucrativo, poker lucratividade, poker rentável, poker rentabilidade',
}

export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode
  params: { lng: 'en-US' | 'pt-BR' }
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Header />
        {children}
        <ToastContainer />
        <ContactUs />
      </body>
    </html>
  )
}
