"use client";

import { BACKGROUND_RANGE_COLORS } from "@/constants/gloabal";
import { Range } from "../Chart/types";

import { useTranslation } from 'react-i18next'

interface ColorDescriptionProps {
    range: Range;
}

export default function ColorDescription ({ range }: ColorDescriptionProps) {
    const { t } = useTranslation();

    function handleGetColorDescription(range: Range): JSX.Element[] {
        return Object.keys(range).map((action) => {
            return (
                <li key={action} className={`${BACKGROUND_RANGE_COLORS[action as keyof Range]} p-2 m-2 min-w-32 text-black`}>
                    <span>{t(`actions.${action}`)}</span>
                </li>
            )
        })
    }

    return (
        <section className="p-4 mt-40 text-center">
            <h2 className="text-lg text-main-gold">{t("actions.label")}</h2>
            <ul className="text-sm">
                {handleGetColorDescription(range)}
            </ul>
        </section>
    )
}