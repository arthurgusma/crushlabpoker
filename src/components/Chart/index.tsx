import React from "react";

import { HAND_RANGES } from "@/constants";
import { ChartProps } from "./types";

export const Chart: React.FC<ChartProps> = ({ range, isRFI }) => {

  const getHandColor = (hand: string) => {
    if (isRFI && range.raiseFirstIn.includes(hand)) return "bg-chart-green";
    if (range.foldTo3Bet.includes(hand)) return "bg-chart-red text-main-champagne";
    if (range.call3Bet.includes(hand)) return "bg-chart-green";
    if (range.fourBetAndFold.includes(hand)) return "bg-chart-blue text-main-champagne";
    if (range.fourBetAndCall.includes(hand)) return "bg-chart-yellow";
    return "bg-main-champagne"; 
  };

  return (
    <table className="w-full border-collapse max-w-5xl">
      <tbody>
        {HAND_RANGES.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((hand) => (
              <td
                key={hand}
                className={`w-12 h-12 border border-black p-2 text-center text-black ${getHandColor(
                  hand
                )}`}
              >
                {hand}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
