import { UTG_OOP, UTG_VS_SB, UTG_VS_BB, UTG_RFI } from "@/constants/utgRanges";
  
const rangeMap: Record<string, Record<string, any>> = {
    UTG: {
      "vs 3B OOP": UTG_OOP,
      "vs 3B SB": UTG_VS_SB,
      "vs 3B BB": UTG_VS_BB,
      "RFI": UTG_RFI,
    },
};

export function handleSelection(selectedPosition: string) {
    switch (selectedPosition) {
        case "UTG":
            return ["RFI", "vs 3B OOP", "vs 3B SB", "vs 3B BB"];
        case "HJ":
            return ["RFI", "vs RFI UTG","vs 3B OOP", "vs 3B SB", "vs 3B BB"];
        case "CO":
            return ["RFI", "vs RFI UTG", "vs RFI HJ", "vs 3B OOP", "vs 3B SB", "vs 3B BB"];
        case "BTN":
            return ["RFI", "vs RFI UTG", "vs RFI HJ", "vs RFI CO", "vs 3B SB", "vs 3B BB"];
        case "SB":
            return ["RFI", "vs RFI UTG", "vs RFI HJ", "vs RFI CO", "vs RFI BTN", "vs 3B BB"];
        case "BB":
            return ["vs RFI UTG", "vs RFI HJ", "vs RFI CO", "vs RFI BTN", "vs RFI SB"];
        default:
            return [];
    }
}

export function handleSelectRange(selectedPosition: string, selectedAction: string) {
    const positionRanges = rangeMap[selectedPosition];
    return positionRanges[selectedAction] || positionRanges.default;
}