"use client";
import React, { useState } from "react";

const positions = ["BTN", "SM", "BB", "UTG", "HJ", "CO"];

export const PokerTable: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const handleSeatClick = (position: string) => {
    setSelectedPosition(position);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl">Poker Table</h1>
      <div className="relative w-[600px] h-[300px] bg-red-800 rounded-full border-8 border-yellow-500 flex items-center justify-center">
        {positions.map((position, index) => {
          const angle = (index / positions.length) * (2 * Math.PI);
          const x = 230 * Math.cos(angle); 
          const y = 90 * Math.sin(angle);  
        
          return (
            <div
              key={position}
              onClick={() => handleSeatClick(position)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border-2 border-black rounded-full cursor-pointer flex items-center justify-center
                ${selectedPosition === position ? "bg-blue-300" : "bg-white"}`}
              style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}
            >
              <span className="font-bold">{position}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
