type Props = {
  message: string
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div data-testID="error-msg" className="text-red-500 text-sm">
      {message}
    </div>
  )
}
