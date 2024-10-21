"use client";

import { useState } from "react";
import { Chart } from "../Chart";
import { TABLE_POSITIONS } from "@/constants";
import { handleSelection } from "./helpers";
import ChartOptionsButton from "./ChartOptionsButton";

export default function ChartOptions() {
    const [selectedPosition, setSelectedPosition] = useState<string>("UTG");
    const [selectedAction, setSelectedAction] = useState<string>("RFI");

    return (
        <div>
            <h1 className="mb-2 text-main-gold">Selecione sua posição:</h1>
            <section className="flex justify-between mb-4">
            {TABLE_POSITIONS.map((position) => (
               <ChartOptionsButton position={position} selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
            ))}
            </section>
            <h1 className="mb-2 text-main-gold">Selecione a ação:</h1>
            <section className="flex justify-between mb-4">
                {handleSelection(selectedPosition).map((action) => (
                    <ChartOptionsButton position={action} selectedPosition={selectedAction} setSelectedPosition={setSelectedAction} />
                ))}
            </section >
            <Chart />
        </div>
    )
}