import React from 'react'

import { BACKGROUND_RANGE_COLORS, HAND_RANGES } from '@/constants/gloabal'
import { ChartProps } from './types'

export const Chart: React.FC<ChartProps> = ({ range }) => {
  const handleGetHandColor = (hand: string) => {
    if (range.raiseFirstIn?.includes(hand))
      return BACKGROUND_RANGE_COLORS.raiseFirstIn
    if (range.foldTo3Bet?.includes(hand))
      return BACKGROUND_RANGE_COLORS.foldTo3Bet
    if (range.call3Bet?.includes(hand)) return BACKGROUND_RANGE_COLORS.call3Bet
    if (range.fourBetAndFold?.includes(hand))
      return BACKGROUND_RANGE_COLORS.fourBetAndFold
    if (range.fourBetAndCall?.includes(hand))
      return BACKGROUND_RANGE_COLORS.fourBetAndCall
    if (range.threeBet?.includes(hand)) return BACKGROUND_RANGE_COLORS.threeBet
    if (range.shoveVs4Bet?.includes(hand))
      return BACKGROUND_RANGE_COLORS.shoveVs4Bet
    if (range.call?.includes(hand)) return BACKGROUND_RANGE_COLORS.call
    return 'bg-main-champagne text-black'
  }

  return (
    <div className="w-full overflow-auto max-sm:mb-14">
      <table className="w-full max-w-full border-collapse">
        <tbody>
          {HAND_RANGES.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((hand) => (
                <td
                  key={hand}
                  className={`border border-black sm:p-1 text-center max-sm:text-xs sm:w-10 sm:h-10 md:w-10 md:h-10 ${handleGetHandColor(
                    hand,
                  )}`}
                >
                  {hand}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="hidden bg-chart-red bg-chart-blue bg-chart-green bg-chart-yellow bg-chart-orange bg-chart-purple bg-chart-light-blue" />
    </div>
  )
}
