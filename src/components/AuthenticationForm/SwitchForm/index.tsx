import { ButtonText } from "@/components/UI/Buttons";
import { Dispatch, SetStateAction } from "react";

interface SwitchFormProps {
    setisSignUp: Dispatch<SetStateAction<boolean>>;
    isSignUp: boolean;
    buttonLabel: string;
    description: string;
}

export default function SwitchForm({ setisSignUp, isSignUp, buttonLabel, description }: SwitchFormProps) {
    return (
        <div className='flex justify-center text-main-light-green'>
            <p className="mr-1 p-0">{description}</p>
            <ButtonText onClick={() => setisSignUp(!isSignUp)}>{buttonLabel}</ButtonText>
        </div>
    );
}