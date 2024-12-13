type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  width?: string
  onClick?: () => void
}

export function ButtonSubmit({ children, width, ...rest }: ButtonProps) {
  return (
    <button
      type="submit"
      style={{ width: width ? `${width}px` : 'auto' }}
      className="text-main-light-green p-2 rounded-lg cursor-pointer bg-main-gold opacity-75 hover:opacity-100"
      {...rest}
    >
      {children}
    </button>
  )
}

export function ButtonText({ children, width, onClick, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      style={{ width: `${width}px` }}
      onClick={onClick}
      className="text-main-brown underline hover:text-main-dark-green"
      {...rest}
    >
      {children}
    </button>
  )
}
