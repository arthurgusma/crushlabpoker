'use client';

import React, { useState } from "react";

import { COLORS_FIRST_TO_ACT, COLORS_SECOND_TO_ACT, HAND_RANGES } from "@/constants";

interface PokerRangeMatrixProps {
  isFirstToAct: boolean;
}

export const Chart: React.FC<PokerRangeMatrixProps> = ({ isFirstToAct }) => {
  const colors = isFirstToAct ? COLORS_FIRST_TO_ACT : COLORS_SECOND_TO_ACT;

  return (
    <table className="w-full border-collapse max-w-5xl">
      <tbody>
        {HAND_RANGES.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((hand) => (
              <td
                key={hand}
                className={`w-12 h-12 border border-black p-2 text-center text-black`}
                style={{ backgroundColor: colors["fold"] }}
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
