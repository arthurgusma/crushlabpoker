"use client";

import LanguageSelector from "@/components/LanguageSelector";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="flex justify-between items-center py-4 px-16 bg-main-green">
            <nav className="ml-auto">
                <ul className="flex">
                    <Link className="mx-2 cursor-pointer hover:text-main-gold" href="/home">{t("header.home")}</Link>
                    <Link className="mx-2 cursor-pointer hover:text-main-gold" href="/about">{t("header.about")}</Link>
                    <li className="mx-2"><LanguageSelector /></li>
                </ul>
            </nav>
        </header>
    )
}