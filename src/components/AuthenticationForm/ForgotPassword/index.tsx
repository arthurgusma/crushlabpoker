'use client'

import { ButtonSubmit, ButtonText } from '@/components/UI/Buttons'
import Input from '@/components/UI/Input'
import LoadingSpinner from '@/components/UI/LoadingSpinner'
import { auth } from '@/firebaseConfig'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { FormType } from '../LogIn'

type Props = {
  setFormType: Dispatch<SetStateAction<FormType>>
}

export default function ForgotPassword({
  setFormType,
}: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const { t } = useTranslation()

  const schema = z.object({
    email: z.string().email({ message: t('login-form.email-error') }),
  })

  type ForgotPasswordFormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
  })

  async function handleForgotPassword(data: ForgotPasswordFormData) {
    setIsLoading(true)
    try {
      await sendPasswordResetEmail(auth, data.email)
      setSuccessMessage(t('login-form.recover-password-success'))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <p className="text-main-brown">{t("login-form.recover-password")}</p>
      <form onSubmit={handleSubmit(handleForgotPassword)}>
        <Input
          type="email"
          label="Email"
          {...register('email')}
          error={errors.email?.message}
        />
        {successMessage && (
          <div className='flex justify-center items-center text-main-light-green'>
            <p className="text-center mt-2 max-w-44 text-sm">{successMessage}</p>
          </div>
        )}
        <div className="mt-2 flex justify-center items-center h-full">
          <ButtonSubmit width="170" disabled={isLoading}>
            {isLoading ? <LoadingSpinner /> : t('login-form.recover')}
          </ButtonSubmit>
        </div>
      </form>
      <div className="flex justify-center items-center mt-2">
        <ButtonText onClick={() => setFormType(FormType.SIGNIN)}>
          {t('login-form.login')}
        </ButtonText>
      </div>
    </div>
  )
}
