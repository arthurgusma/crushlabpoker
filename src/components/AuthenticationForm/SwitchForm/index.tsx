import { ButtonText } from '@/components/UI/Buttons'
import { Dispatch, SetStateAction } from 'react'

interface SwitchFormProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>
  isSignUp: boolean
  buttonLabel: string
  description: string
}

export default function SwitchForm({
  setIsSignUp,
  isSignUp,
  buttonLabel,
  description,
}: SwitchFormProps) {
  return (
    <div className="flex justify-center text-main-light-green">
      <p className="mr-1 p-0">{description}</p>
      <ButtonText onClick={() => setIsSignUp(!isSignUp)}>
        {buttonLabel}
      </ButtonText>
    </div>
  )
}
