type Props = {
  message: string
}

export default function ErrorMessage({ message }: Props) {
  return <div className="text-red-500 text-sm">{message}</div>
}
