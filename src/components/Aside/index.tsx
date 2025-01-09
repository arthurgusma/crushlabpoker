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
    <aside className="max-md:flex max-md:flex-row-reverse max-md:justify-end max-md:items-center max-md:mb-4">
      <Image
        src={photoSrc}
        alt="Profile Image"
        width={60}
        height={60}
        className="rounded-full w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
      />
      <ul className="md:mt-8 mt-2 max-md:mr-4 max-md:space-x-4 max-md:flex justify-end ml-auto">
        <li className="mb-2 cursor-pointer hover:text-main-gold">
          <Link href="/billing">{t('aside.subscription')}</Link>
        </li>
        <li className="mb-2 cursor-pointer hover:text-main-gold">
          <Link href="/about">{t('aside.about')}</Link>
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
