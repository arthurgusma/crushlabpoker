export const BTN_RFI = {
    raiseFirstIn: [
        "AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s",
        "AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s",
        "AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s",
        "AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s",
        "ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s",
        "A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s",
        "A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s",
        "A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s",
        "A6o", "K6o", "76o", "66", "65s", "64s", "63s", 
        "A5o", "K5o", "65o", "55", "54s", "53s",
        "A4o", "54o", "44", "43s", "42s",
        "A3o", "33", "32s",
        "A2o", "22",
    ],
}

export const BTN_VS_UTG_RFI = {
    threeBet: ["AKs", "AQs", "AJs", "ATs", "A5s", "A4s", "AKo", "KQs", "KJs", "KTs", "AQo", "QQ", "QJs", "QTs","JJ", "JTs", "TT", "99", "88", "76s", "65s", "54s"],
    shoveVs4Bet: ["AA", "KK"],
}

export const BTN_VS_HJ_RFI = {
    threeBet: ["AQs", "AJs", "ATs", "A9s",  "A5s", "A4s", "KQs", "KJs", "KTs", "AQo", "KQo","QJs", "QTs", "AJo", "JJ", "JTs", "TT", "T9s", "99", "88", "77", "76s", "65s", "54s"],
    shoveVs4Bet: ["AA", "KK", "QQ", "AKo", "AKs"],
}

export const BTN_VS_CO_RFI = {
    threeBet: ["AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s", "KQs", "KJs", "KTs", "K9s", "K8s", "AQo", "KQo", "QJs", "QTs", "Q9s", "AJo", "ATo","KJo", "JJ", "JTs", "J9s", "TT", "T9s", "T8s", "99", "98s", "88", "87s", "77", "76s", "66", "65s", "55", "54s"],
    shoveVs4Bet: ["AA", "KK", "QQ", "AKo", "AKs"],
}

export const BTN_VS_SB = {
    foldTo3Bet: ["K5s", "K4s", "K3s", "K2s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s", "QJo", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s", "ATo", "KTo", "QTo", "JTo", "T6s", "T5s", "T4s", "A9o", "K9o", "Q9o", "J9o", "T9o", "96s", "95s", "A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "85s", "A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "74s", "A6o", "K6o", "76o", "63s", "A5o", "K5o", "65o", "A4o", "54o", "42s", "A3o", "32s", "A2o"],
    call3Bet: ["AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s", "AKo", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "AQo", "KQo",  "QJs", "QTs", "Q9s", "AJo", "KJo", "JJ", "JTs", "J9s", "J8s", "TT", "T9s", "T8s", "T7s", "99", "98s", "97s", "88", "87s", "86s", "77", "76s", "75s", "66", "65s", "64s", "55", "54s", "53s", "44", "43s", "33", "22"],
    fourBetAndFold: [],
    fourBetAndCall: ["AA", "AKs", "KK", "QQ"],
}

export const BTN_VS_BB = {
    foldTo3Bet: ["Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s", "J6s", "J5s", "J4s", "J3s", "J2s", "ATo", "KTo", "QTo", "JTo", "T6s", "T5s", "T4s", "A9o", "K9o", "Q9o", "J9o", "T9o", "95s", "A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "A6o", "K6o", "76o", "A5o", "K5o", "65o", "A4o", "54o", "A3o", "A2o"],
    call3Bet: ["AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s","KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s", "AQo", "KQo", "QJs", "QTs", "Q9s", "Q8s", "AJo", "KJo", "QJo", "JTs", "J9s", "J8s", "J7s", "JJ", "TT", "T9s", "T8s", "T7s","99", "98s", "97s", "96s","88", "87s", "86s", "85s","77", "76s", "75s", "74s","66", "65s", "64s", "63s","55", "54s", "53s", "44", "43s", "42s","33",  "32s","22"],
    fourBetAndFold: [],
    fourBetAndCall: ["AA", "KK", "AKs", "AKo", "QQ", "AQs", "JJ"], 
}