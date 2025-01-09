import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, ...rest }, ref) => {
    return (
      <div className="grid pt-2 relative w-full">
        <label
          htmlFor={rest.name}
          className="absolute left-3 top-2 text-main-brown text-sm"
        >
          {label}
        </label>
        <input
          ref={ref}
          {...rest}
          className="peer w-full border-2 bg-gray-50 text-gray-900 focus:ring-1 focus:ring-main-brown px-3 pt-4 pb-2 rounded-md"
        />
        {error && <span>{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, label, ...rest }, ref) => {
    return (
      <div className="grid pt-2 relative w-full">
        <label
          htmlFor={rest.name}
          className="absolute left-3 top-2 text-main-brown text-sm"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          {...rest}
          className="peer w-full border-2 bg-gray-50 text-gray-900 focus:ring-1 focus:ring-main-brown px-3 pt-4 pb-2 rounded-md"
        />
        {error && <span>{error}</span>}
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'

export { Input, TextArea }
