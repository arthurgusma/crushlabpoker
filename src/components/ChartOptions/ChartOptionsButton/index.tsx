import { Dispatch, SetStateAction } from 'react'

interface ChartOptionsButtonProps {
  position: string
  selectedPosition: string
  setSelectedPosition: Dispatch<SetStateAction<string>>
  handleBB?: Dispatch<SetStateAction<string>>
}

export default function ChartOptionsButton({
  position,
  selectedPosition,
  setSelectedPosition,
  handleBB,
}: ChartOptionsButtonProps) {
  function handleSelection(selected: string) {
    selected === 'BB' && handleBB
      ? handleBB('vs RFI UTG')
      : handleBB && handleBB('RFI')

    setSelectedPosition(selected)
  }

  return (
    <button
      key={position}
      className={`font-bold p-1 rounded w-24 text-main-light-green hover:opacity-75 ${
        selectedPosition === position ? 'bg-chart-green' : 'bg-main-gold'
      } max-h-8`}
      onClick={() => handleSelection(position)}
    >
      {position}
    </button>
  )
}
