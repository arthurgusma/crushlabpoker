export const SB_RFI = {
    raiseFirstIn: [
    "AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s",
    "AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s",
    "AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s",
    "AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s",
    "ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s", "T3s", "T2s",
    "A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s",
    "A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s", "84s",
    "A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s", "73s",
    "A6o", "K6o", "Q6o", "86o", "76o", "66", "65s", "64s", "63s",
    "A5o", "K5o", "Q5o", "75o", "65o", "55", "54s", "53s", "52s",
    "A4o", "K4o", "Q4o", "54o", "44", "43s", "42s", "A3o", "33", "32s", "A2o", "22",
],
}

export const SB_VS_UTG_RFI = {
    threeBet: ["AKs", "AQs", "AJs", "ATs", "A5s", "A4s", "AKo", "KQs", "KJs", "KTs", "AQo", "QQ", "QJs", "QTs","JJ", "JTs", "TT", "99", "65s", "54s"],
    shoveVs4Bet: ["AA", "KK"],
}

export const SB_VS_HJ_RFI = {
    threeBet: ["AQs", "AJs", "AKs", "AKo", "QQ", "ATs", "A9s",  "A5s", "A4s", "KQs", "KJs", "KTs", "AQo", "KQo","QJs", "QTs", "JJ", "JTs", "TT", "99", "88", "65s", "54s"],
    shoveVs4Bet: ["AA", "KK",],
}

export const SB_VS_CO_RFI = {
    threeBet: ["AQs", "AJs", "ATs", "A9s",  "A5s", "A4s", "A3s", "KQs", "KJs", "KTs", "K9s", "AQo", "KQo", "QJs", "QTs", "Q9s", "AJo", "KJo", "JJ", "JTs", "J9s", "TT", "T9s", "99", "88", "77", "76s", "66", "65s", "54s"],
    shoveVs4Bet: ["AA", "KK", "QQ", "AKo", "AKs"],
}

export const SB_VS_BTN_RFI = {
    threeBet: ["AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "AQo", "KQo", "QJs", "QTs", "Q9s", "Q8s", "AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "ATo", "KTo", "TT", "T9s", "T8s", "99", "98s", "88", "87s", "77", "76s", "66", "65s", "55", "54s"],
    shoveVs4Bet: ["AA", "KK", "QQ", "AKo", "AKs"],
}

export const SB_VS_BB_3B = {
    foldTo3Bet: ['A7s', 'A6s', 'A3s', 'A2s', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s', 'KQo', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s', 'Q3s', 'Q2s', 'AJo', 'KJo', 'QJo', 'J9s', 'J8s', 'J7s', 'J6s', 'J5s', 'J4s', 'J3s', 'J2s', 'ATo', 'KTo', 'QTo', 'JTo', 'T8s', 'T7s', 'T6s', 'T5s', 'T4s', 'T3s', 'T2s', 'A9o', 'K9o', 'Q9o', 'J9o', 'T9o', '97s', '96s', '95s', '94s', '93s', '92s', 'A8o', 'K8o', 'Q8o', 'J8o', 'T8o', '98o', '86s', '85s', '84s', 'A7o', 'K7o', 'Q7o', 'J7o', 'T7o', '97o', '87o', '75s', '74s', '73s', 'A6o', 'K6o', 'Q6o', '86o', '76o', '64s', '63s', 'A5o', 'K5o', 'Q5o', '75o', '65o', '53s', '52s', 'A4o', 'K4o', 'Q4o', '54o', '43s', '42s', 'A3o', '32s', 'A2o'],
    call3Bet: ["AJs", "ATs", "A9s", "A8s", "A5s", "A4s", "KQs", "KJs", "KTs", "QJs", "QTs", "JTs", "T9s", "99", "98s", "88", "87s", "77", "76s", "66", "65s", "55", "54s", "44", "33", "22"],
    fourBetAndFold: [],
    fourBetAndCall: ["AA", "KK", "AKs", "AKo", "QQ", "AQs", "JJ", "AQo", "TT"],
}