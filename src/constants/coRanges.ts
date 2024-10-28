export const CO_RFI = {
    raiseFirstIn: ["AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s", "AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s","AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "A9o", "A8o", "99", "98s", "88", "87s", "77", "76s", "66", "65s", "55", "44", "33"],
}

export const CO_VS_UTG_RFI = {
    threeBet: ["AKs", "AQs", "AJs", "ATs", "A5s", "A4s", "AKo", "KQs", "KJs", "KTs", "AQo", "QQ", "QJs", "QTs", "JJ", "JTs", "TT", "99", "88", "76s", "65s", "54s"],
    shoveVs4Bet: ["AA", "KK"],
}

export const CO_VS_HJ_RFI = {
    threeBet: ["AQs", "AJs", "ATs", "A9s",  "A5s", "A4s", "KQs", "KJs", "KTs", "AQo", "KQo","QJs", "QTs", "AJo", "JJ", "JTs", "TT", "T9s", "99", "88", "77", "76s", "65s", "54s"],
    shoveVs4Bet: ["AA", "KK", "QQ", "AKo", "AKs"],
}

export const CO_OOP = {
    foldTo3Bet: ["A9s", "A8s", "A7s", "A6s", "A4s", "A3s", "A2s", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "KQo", "Q9s", "Q8s", "Q7s", "Q6s", "AJo", "KJo", "QJo", "J9s", "J8s", "J7s", "ATo", "KTo", "QTo", "JTo", "T9s", "T8s", "A9o", "A8o", "98s", "87s", "33"],
    call3Bet: ["AQs", "AJs", "A5s", "KQs", "KJs", "QJs", "QTs", "JTs", "TT", "99", "88", "77", "76s", "66", "65s", "55", "44"],
    fourBetAndFold: ["ATs", "KTs", "AKo", "AQo", "JJ"],
    fourBetAndCall: ["AA", "AKs", "KK", "QQ"],
}

export const CO_VS_SB = {
    foldTo3Bet: ["K5s", "K4s", "K3s","Q8s", "Q7s", "Q6s", "QJo", "J8s", "J7s","ATo", "KTo", "QTo", "JTo", "A9o", "A8o", "J8s", "J7s",],
    call3Bet: ["AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A4s", "A3s", "A2s", "AKo", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "AQo", "KQo", "QJs", "QTs", "Q9s", "AJo", "KJo", "JJ", "JTs", "J9s", "TT", "T9s", "T8s", "99", "98s", "88", "87s", "77", "76s", "66", "65s", "55", "44", "33"],
    fourBetAndFold: ["A5s"],
    fourBetAndCall: ["AA", "KK", "AKs", "QQ"],
}

export const CO_VS_BB = {
    foldTo3Bet: ["A8s", "A7s", "A6s", "A2s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "KQo", "Q8s", "Q7s", "Q6s", "AJo", "KJo", "QJo", "J8s", "J7s", "ATo", "KTo", "QTo", "JTo", "A9o", "A8o"],
    call3Bet: ["AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s", "AKo", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "AQo", "KQo", "QJs", "QTs", "Q9s", "AJo", "KJo", "JJ", "JTs", "J9s", "TT", "T9s", "T8s", "99", "98s", "88", "87s", "77", "76s", "66", "65s", "55", "44", "33"],
    fourBetAndFold: [],
    fourBetAndCall: ["AA", "KK", "AKs", "AKo","QQ"],
}
