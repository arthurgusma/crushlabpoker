import { ButtonText } from '@/components/UI/Buttons'
import { Dispatch, SetStateAction } from 'react'
import { t } from 'i18next'
import { FormType } from '../LogIn'

interface SwitchFormProps {
  setFormType: Dispatch<SetStateAction<FormType>>
  formType: FormType
  buttonLabel: string
  description: string
}

export default function SwitchForm({
  setFormType,
  formType,
  buttonLabel,
  description,
}: SwitchFormProps) {
  return (
    <>
      <div className="flex justify-center text-main-light-green">
        <p className="mr-1 p-0">{description}</p>
        <ButtonText
          id="sign"
          onClick={() =>
            setFormType(
              formType === FormType.SIGNIN ? FormType.SIGNUP : FormType.SIGNIN,
            )
          }
        >
          {buttonLabel}
        </ButtonText>
      </div>
      <div className="flex justify-center items-center text-xs">
        <ButtonText onClick={() => setFormType(FormType.FORGOT_PASSWORD)}>
          {t('login-form.forgot-password').toUpperCase()}
        </ButtonText>
      </div>
    </>
  )
}
