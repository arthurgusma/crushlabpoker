import React from "react";

import { HAND_RANGES } from "@/constants";

interface PokerRangeMatrixProps {
  isFirstToAct: boolean;
}

export const Chart: React.FC<PokerRangeMatrixProps> = ({ isFirstToAct }) => {

  return (
    <table className="w-full border-collapse max-w-5xl">
      <tbody>
        {HAND_RANGES.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((hand) => (
              <td
                key={hand}
                className={`w-12 h-12 border border-black p-2 text-center text-black`}
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
