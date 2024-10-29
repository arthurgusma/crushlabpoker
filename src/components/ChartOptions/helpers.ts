import { BB_VS_BTN_RFI, BB_VS_CO_RFI, BB_VS_HJ_RFI, BB_VS_SB_RFI, BB_VS_UTG_RFI } from "@/constants/bbRanges";
import { BTN_RFI, BTN_VS_BB, BTN_VS_CO_RFI, BTN_VS_HJ_RFI, BTN_VS_SB, BTN_VS_UTG_RFI } from "@/constants/btnRanges";
import { CO_RFI, CO_VS_UTG_RFI, CO_VS_HJ_RFI, CO_OOP, CO_VS_SB, CO_VS_BB } from "@/constants/coRanges";
import { HJ_VS_UTG_RFI, HJ_OOP, HJ_RFI, HJ_VS_SB, HJ_VS_BB } from "@/constants/hjRanges";
import { SB_RFI, SB_VS_BB_3B, SB_VS_BTN_RFI, SB_VS_CO_RFI, SB_VS_HJ_RFI, SB_VS_UTG_RFI } from "@/constants/sbRanges";
import { UTG_OOP, UTG_VS_SB, UTG_VS_BB, UTG_RFI } from "@/constants/utgRanges";
  
const rangeMap: Record<string, Record<string, any>> = {
    UTG: {
      "vs 3B OOP": UTG_OOP,
      "vs 3B SB": UTG_VS_SB,
      "vs 3B BB": UTG_VS_BB,
      "RFI": UTG_RFI,
    },
    HJ: {
        "vs RFI UTG": HJ_VS_UTG_RFI,
        "vs 3B OOP": HJ_OOP,
        "vs 3B SB": HJ_VS_SB,
        "vs 3B BB": HJ_VS_BB,
        "RFI": HJ_RFI,
    },
    CO: {
        "vs RFI UTG": CO_VS_UTG_RFI,
        "vs RFI HJ": CO_VS_HJ_RFI,
        "vs 3B OOP": CO_OOP,
        "vs 3B SB": CO_VS_SB,
        "vs 3B BB": CO_VS_BB,
        "RFI": CO_RFI,
    },
    BTN: {
        "vs RFI UTG": BTN_VS_UTG_RFI,
        "vs RFI HJ": BTN_VS_HJ_RFI,
        "vs RFI CO": BTN_VS_CO_RFI,
        "vs 3B SB": BTN_VS_SB,
        "vs 3B BB": BTN_VS_BB,
        "RFI": BTN_RFI,
    },
    SB: {
        "vs RFI UTG": SB_VS_UTG_RFI ,
        "vs RFI HJ": SB_VS_HJ_RFI,
        "vs RFI CO": SB_VS_CO_RFI,
        "vs RFI BTN": SB_VS_BTN_RFI,
        "vs 3B BB": SB_VS_BB_3B,
        "RFI": SB_RFI,
    },
    BB: {
        "vs RFI UTG": BB_VS_UTG_RFI,
        "vs RFI HJ": BB_VS_HJ_RFI,
        "vs RFI CO": BB_VS_CO_RFI,
        "vs RFI BTN": BB_VS_BTN_RFI,
        "vs RFI SB": BB_VS_SB_RFI,
    }
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