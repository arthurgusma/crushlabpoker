export interface Range {
    raiseFirstIn?: string[];
    foldTo3Bet?: string[];
    call3Bet?: string[];
    fourBetAndFold?: string[];
    fourBetAndCall?: string[];
    threeBet?: string[];
    shoveVs4Bet?: string[];
    call?: string[];
  }
  
export interface ChartProps {
    range: Range;
}