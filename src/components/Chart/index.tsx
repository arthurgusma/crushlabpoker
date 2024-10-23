import React from "react";

import { HAND_RANGES } from "@/constants";
import { ChartProps } from "./types";

export const Chart: React.FC<ChartProps> = ({ range }) => {

  const handleGetHandColor = (hand: string) => {
    if (range.raiseFirstIn?.includes(hand)) return "bg-chart-green";
    if (range.foldTo3Bet?.includes(hand)) return "bg-chart-red text-main-champagne";
    if (range.call3Bet?.includes(hand)) return "bg-chart-green";
    if (range.fourBetAndFold?.includes(hand)) return "bg-chart-blue text-main-champagne";
    if (range.fourBetAndCall?.includes(hand)) return "bg-chart-yellow";
    if (range.threeBet?.includes(hand)) return "bg-chart-orange";
    if (range.shoveVs4Bet?.includes(hand)) return "bg-chart-purple";
    if (range.call?.includes(hand)) return "bg-chart-pink";
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
                className={`w-12 h-12 border border-black p-2 text-center text-black ${handleGetHandColor(
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
