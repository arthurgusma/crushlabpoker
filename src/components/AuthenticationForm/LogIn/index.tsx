'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import SignIn from '../SignUp'
import { ButtonSubmit } from '@/components/UI/Buttons'
import Input from '@/components/UI/Input'
import { useTranslation } from 'react-i18next'
import SwitchForm from '../SwitchForm'
import i18n from '@/i18n'

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  const { t } = useTranslation()
  const schema = z.object({
    email: z.string().email({ message: t('login-form.email-error') }),
    password: z.string(),
  })

  type LogInFormData = z.infer<typeof schema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>({
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
  })

  async function onSubmit(data: LogInFormData) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    console.log(response)
    // TODO: Handle response

    // if (response.ok) {
    //     // router.push('/home')
    // } else {
    //     // Handle errors
    // }
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('languague')
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage)
    }
  }, [])

  return (
    <>
      {!isSignUp ? (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid text-main-brown"
          >
            <Input
              {...register('email')}
              type="email"
              label={t('login-form.email')}
              error={errors.email?.message}
            />
            <Input
              {...register('password')}
              type="password"
              label={t('login-form.password')}
              error={errors.password?.message}
            />

            <div className="flex justify-center py-4">
              <ButtonSubmit width="160">{t('login-form.login')}</ButtonSubmit>
            </div>
          </form>
          <SwitchForm
            setisSignUp={setIsSignUp}
            isSignUp={isSignUp}
            buttonLabel={t('login-form.signup')}
            description={t('login-form.description-login')}
          />
        </>
      ) : (
        <SignIn setisSignUp={setIsSignUp} isSignUp={isSignUp} />
      )}
    </>
  )
}
