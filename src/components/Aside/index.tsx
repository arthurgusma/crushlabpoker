"use client";

import { UserContext } from "@/context/UserContext";
import Image from "next/image"
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function Aside() {
    const { user } = useContext(UserContext);

    const { t } = useTranslation();
    const photoSrc = user.photoURL || "";

    return (
        <aside>
            <Image src={photoSrc} alt="Profile Image" width={60} height={60} className="rounded-full"/>
            <p></p>
            <ul>
                <li>{t("aside.subscription")}</li>
                <li>{t("aside.about")}</li>
                <li>{t("aside.help")}</li>
                <li>{t("aside.logout")}</li>
            </ul>
        </aside>
    )
}