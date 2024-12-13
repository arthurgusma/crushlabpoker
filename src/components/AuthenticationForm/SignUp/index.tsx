'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ButtonSubmit } from '@/components/UI/Buttons'
import { Dispatch, SetStateAction } from 'react'
import Input from '@/components/UI/Input'
import { useTranslation } from 'react-i18next'
import SwitchForm from '../SwitchForm'
import { signIn } from 'next-auth/react'

interface SignInProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>
  isSignUp: boolean
}

export default function SignIn({ setIsSignUp, isSignUp }: SignInProps) {
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
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        if (response.status === 201) {
          signIn('credentials', {
            email: data.email,
            password: data.password,
            callbackUrl: '/home',
          })
        }
      } else {
        console.error('Error submitting form:', response.statusText)
      }
    } catch (error) {
      console.error('Error hashing password:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid text-main-brown">
      <Input
        {...register('fullName')}
        type="text"
        label={t('login-form.full-name')}
        error={errors.fullName?.message}
      />
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
      <Input
        {...register('confirmPassword')}
        type="password"
        label={t('login-form.confirm-password')}
        error={errors.confirmPassword?.message}
      />

      <div className="flex justify-center py-4">
        <ButtonSubmit width="160">{t('login-form.signup')}</ButtonSubmit>
      </div>
      <SwitchForm
        setIsSignUp={setIsSignUp}
        isSignUp={isSignUp}
        buttonLabel={t('login-form.login')}
        description={t('login-form.description-signup')}
      />
    </form>
  )
}
