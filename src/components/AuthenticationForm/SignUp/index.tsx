'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ButtonSubmit } from '@/components/UI/Buttons'
import { Dispatch, SetStateAction, useState } from 'react'
import { Input } from '@/components/UI/Input'
import { useTranslation } from 'react-i18next'
import SwitchForm from '../SwitchForm'
import { signIn } from 'next-auth/react'
import LoadingSpinner from '@/components/UI/LoadingSpinner'
import ErrorMessage from '@/components/UI/ErrorMessage'
import { FormType } from '../LogIn'

interface SignInProps {
  setFormType: Dispatch<SetStateAction<FormType>>
  formType: FormType
}

export default function SignIn({ setFormType, formType }: SignInProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { t } = useTranslation()

  const schema = z
    .object({
      fullName: z
        .string()
        .min(5, { message: t('login-form.name-error') })
        .refine((val) => val.split(' ').filter(Boolean).length >= 2, {
          message: t('login-form.name-error'),
        }),
      email: z.string().email({ message: t('login-form.email-error') }),
      password: z.string().min(8, { message: t('login-form.password-error') }),
      confirmPassword: z
        .string()
        .min(8, { message: t('login-form.password-error') }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t('login-form.confirm-password-error'),
      path: ['confirmPassword'],
    })

  type SigUpFormData = z.infer<typeof schema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigUpFormData>({
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
  })

  async function onSubmit(data: SigUpFormData) {
    setIsLoading(true)
    await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 403) {
          throw new Error('Email já cadastrado, entre com email e senha.')
        }
        if (res.status === 201) {
          signIn('credentials', {
            email: data.email,
            password: data.password,
            callbackUrl: '/home',
          })
        }
      })
      .catch((error) => {
        console.error('Error hashing password:', error)
        setError(error?.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid text-main-brown">
      <Input
        {...register('fullName')}
        type="text"
        label={t('login-form.full-name')}
        error={errors.fullName?.message}
        data-testID="full-name"
      />
      <Input
        {...register('email')}
        type="email"
        label={t('login-form.email')}
        error={errors.email?.message}
        data-testID="email"
      />
      <Input
        {...register('password')}
        type="password"
        label={t('login-form.password')}
        error={errors.password?.message}
        data-testID="password"
      />
      <Input
        {...register('confirmPassword')}
        type="password"
        label={t('login-form.confirm-password')}
        error={errors.confirmPassword?.message}
        data-testID="confirm-password"
      />
      {error && <ErrorMessage message={error} />}
      <div className="flex justify-center py-4">
        <ButtonSubmit width="160" disabled={isLoading} data-testID="submit-btn">
          {isLoading ? <LoadingSpinner /> : t('login-form.signup')}
        </ButtonSubmit>
      </div>
      <SwitchForm
        setFormType={setFormType}
        formType={formType}
        buttonLabel={t('login-form.login')}
        description={t('login-form.description-signup')}
      />
    </form>
  )
}
