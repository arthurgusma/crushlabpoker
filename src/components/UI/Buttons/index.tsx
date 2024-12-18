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

export function ButtonSubscribe({
  children,
  width,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      className="w-full py-2 rounded-lg text-white font-semibold mb-6 bg-main-green hover:opacity-80"
      style={{ width: `${width}px` }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
