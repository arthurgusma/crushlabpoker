'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import SignIn from '../SignUp'
import { ButtonSubmit } from '@/components/UI/Buttons'
import { Input } from '@/components/UI/Input'
import { useTranslation } from 'react-i18next'
import SwitchForm from '../SwitchForm'
import i18n from '@/i18n'
import { signIn } from 'next-auth/react'
import LoadingSpinner from '@/components/UI/LoadingSpinner'
import ForgotPassword from '../ForgotPassword'
import ErrorMessage from '@/components/UI/ErrorMessage'

export enum FormType {
  'SIGNIN',
  'SIGNUP',
  'FORGOT_PASSWORD',
}

export default function LoginPage() {
  const [formType, setFormType] = useState<FormType>(FormType.SIGNIN)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    setError(null)
    try {
      setIsLoading(true)
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/home',
      })

      if (!result?.ok) {
        const errorMessage = t('login-form.invalid-credentials')
        localStorage.setItem('loginError', errorMessage)
        throw new Error('Sign in failed')
      }
    } catch (error) {
      console.log(error)
      setError(t('login-form.invalid-credentials'))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const storedError = localStorage.getItem('loginError')
    if (storedError) {
      setError(storedError)
    }

    const storedLanguage = localStorage.getItem('languague')
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage)
    }
  }, [])

  switch (formType) {
    case FormType.SIGNIN:
      return (
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
            {error && <ErrorMessage message={error} />}
            <div className="flex justify-center py-4">
              <ButtonSubmit width="160" disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : t('login-form.login')}
              </ButtonSubmit>
            </div>
          </form>
          <SwitchForm
            setFormType={setFormType}
            formType={formType}
            buttonLabel={t('login-form.signup')}
            description={t('login-form.description-login')}
          />
        </>
      )
    case FormType.FORGOT_PASSWORD:
      return <ForgotPassword setFormType={setFormType} />
    case FormType.SIGNUP:
      return <SignIn setFormType={setFormType} formType={formType} />
  }
}
