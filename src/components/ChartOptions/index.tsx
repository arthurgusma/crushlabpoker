"use client";

import { useEffect, useState } from "react";
import { Chart } from "../Chart";
import { TABLE_POSITIONS } from "@/constants";
import { handleSelection, handleSelectRange } from "./helpers";
import ChartOptionsButton from "./ChartOptionsButton";
import { Range } from "../Chart/types";

export default function ChartOptions() {
    const [selectedPosition, setSelectedPosition] = useState<string>("UTG");
    const [selectedAction, setSelectedAction] = useState<string>("RFI");
    const [range, setRange] = useState<Range>({} as Range);
    
    useEffect(()=>{
        setRange(handleSelectRange(selectedPosition, selectedAction));
    },[selectedPosition, selectedAction])

    return (
        <div>
            <h1 className="mb-2 text-main-gold">Selecione sua posição:</h1>
            <section className="flex justify-between mb-4">
            {TABLE_POSITIONS.map((position) => (
               <ChartOptionsButton  key={position} position={position} selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
            ))}
            </section>
            <h1 className="mb-2 text-main-gold">Selecione a ação:</h1>
            <section className="flex justify-between mb-4">
                {handleSelection(selectedPosition).map((action) => (
                    <ChartOptionsButton key={action} position={action} selectedPosition={selectedAction} setSelectedPosition={setSelectedAction} />
                ))}
            </section >
            <Chart range={range} />
        </div>
    )
}