interface Range {
    raiseFirstIn: string[];
    foldTo3Bet: string[];
    call3Bet: string[];
    fourBetAndFold: string[];
    fourBetAndCall: string[];
  }
  
export interface ChartProps {
    range: Range;
    isRFI: boolean;
}