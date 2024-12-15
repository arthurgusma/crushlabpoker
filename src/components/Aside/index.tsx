'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import defaultLogo from '@/assets/profile-img/default.jpg'
import { signOut, useSession } from 'next-auth/react'

export default function Aside() {
  const { data } = useSession()
  const user = data?.user

  const { t } = useTranslation()
  const photoSrc = user?.image || defaultLogo

  return (
    <aside>
      <Image
        src={photoSrc}
        alt="Profile Image"
        width={60}
        height={60}
        className="rounded-full"
      />
      {user?.name && <p>Bem-vindo, {user?.name}!</p>}
      <ul className="mt-8">
        <li className="mb-2 cursor-pointer hover:text-main-gold">
          <Link href="/billing">{t('aside.subscription')}</Link>
        </li>
        <li className="mb-2 cursor-pointer hover:text-main-gold">
          <Link href="/about">{t('aside.about')}</Link>
        </li>
        <li className="mb-2 cursor-pointer hover:text-main-gold">
          <Link href="/help">{t('aside.help')}</Link>
        </li>
        <li className="mb-2 cursor-pointer hover:text-main-gold">
          <button type="button" onClick={() => signOut()}>
            {t('aside.logout')}
          </button>
        </li>
      </ul>
    </aside>
  )
}
