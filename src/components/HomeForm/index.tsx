'use client'

import LogIn from '../AuthenticationForm/LogIn/index'
import { ButtonSubmit } from '../UI/Buttons'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from 'react-icons/fc'
import { useEffect } from 'react'
import i18n from '@/i18n'
import { signIn } from 'next-auth/react'

const HomeForm = () => {
  const { t } = useTranslation()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await signIn('google', { callbackUrl: '/home' })
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage)
    }
  }, [])

  return (
    <section className="flex flex-col items-center justify-center">
      <LogIn />
      <form onSubmit={handleSubmit} className="pt-4">
        <ButtonSubmit>
          <span className="flex content-center">
            {t('login-form.google')}
            <FcGoogle className="ml-1" size={25} />
          </span>
        </ButtonSubmit>
      </form>
    </section>
  )
}

export default HomeForm
