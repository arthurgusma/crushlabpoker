"use client";

import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="flex justify-between items-center p-4 bg-main-green">
            <h1 className="text-2xl text-main-gold">Crush Lab Poker</h1>
            <nav>
                <ul className="flex">
                    <li className="mx-2"><a href="#" className="text-main-champagne">{t("header.home")}</a></li>
                    <li className="mx-2"><a href="#" className="text-main-champagne">{t("header.about")}</a></li>
                    <li className="mx-2"><a href="#" className="text-main-champagne">{t("header.profile")}</a></li>
                    <li className="mx-2"><LanguageSelector /></li>
                </ul>
            </nav>
        </header>
    )
}