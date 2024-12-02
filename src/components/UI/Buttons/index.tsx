interface ButtonProps {
  children: React.ReactNode
  width?: string
  onClick?: () => void
}

export function ButtonSubmit({ children, width }: ButtonProps) {
  return (
    <button
      type="submit"
      style={{ width: `${width}px` }}
      className="text-main-light-green p-2 rounded-lg cursor-pointer bg-main-gold opacity-75 hover:opacity-100"
    >
      {children}
    </button>
  )
}

export function ButtonText({ children, width, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      style={{ width: `${width}px` }}
      onClick={onClick}
      className="text-main-brown underline hover:text-main-dark-green"
    >
      {children}
    </button>
  )
}
