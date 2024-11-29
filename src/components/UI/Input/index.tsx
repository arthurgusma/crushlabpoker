import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={rest.name}>{rest.placeholder}</label>
        <input ref={ref} {...rest} />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;