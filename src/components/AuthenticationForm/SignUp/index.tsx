'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ButtonSubmit } from '@/components/UI/Buttons'
import { Dispatch, SetStateAction } from 'react'
import Input from '@/components/UI/Input'
import { useTranslation } from 'react-i18next'
import SwitchForm from '../SwitchForm'

interface SignInProps {
  setisSignUp: Dispatch<SetStateAction<boolean>>
  isSignUp: boolean
}

export default function SignIn({ setisSignUp, isSignUp }: SignInProps) {
  const { t } = useTranslation()
  const schema = z
    .object({
      name: z.string({ message: t('login-form.name-error') }),
      lastName: z.string({ message: t('login-form.last-name-error') }),
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
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    console.log(response)

    // TODO Handle response

    // if (response.ok) {
    //     // router.push('/home')
    // } else {
    //     // Handle errors
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid text-main-brown">
      <Input
        {...register('name')}
        type="string"
        label={t('login-form.name')}
        error={errors.name?.message}
      />
      <Input
        {...register('lastName')}
        type="string"
        label={t('login-form.last-name')}
        error={errors.lastName?.message}
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
        setisSignUp={setisSignUp}
        isSignUp={isSignUp}
        buttonLabel={t('login-form.login')}
        description={t('login-form.description-signup')}
      />
    </form>
  )
}
