interface ChartOptionsButtonProps {
    position: string;
    selectedPosition: string;
    setSelectedPosition: (position: string) => void;
}

export default function ChartOptionsButton({ position, selectedPosition, setSelectedPosition }: ChartOptionsButtonProps) {
    return (
        <button
            key={position} 
            className={`font-bold p-1 rounded w-24 text-main-light-green hover:opacity-75 ${selectedPosition === position ? "bg-chart-green" : 
            "bg-main-gold"
            }`}
            onClick={() => setSelectedPosition(position)}
        >
           {position}
       </button>
    )
}