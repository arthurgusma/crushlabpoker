'use client'

import LanguageSelector from '@/components/LanguageSelector'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="flex justify-between items-center py-4 px-16">
      <nav className="ml-auto">
        <ul className="flex">
          <li className="mx-2 cursor-pointer hover:text-main-gold">
            <Link href="/home">{t('header.home')}</Link>
          </li>
          <li className="mx-2 cursor-pointer hover:text-main-gold">
            <Link href="/about">{t('header.about')}</Link>
          </li>
          <li className="mx-2">
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </header>
  )
}
