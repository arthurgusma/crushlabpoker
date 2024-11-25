"use client";

import { UserContext } from "@/context/UserContext";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import defaultLogo from "@/assets/profile-img/default.jpg"

export default function Aside() {
    const { user } = useContext(UserContext);
    const router = useRouter();

    const { t } = useTranslation();
    const photoSrc = user.photoURL || defaultLogo;

    async function handleLogOut() {
        try {
          const response = await fetch("/api/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            router.push("/");
          } 
      
        } catch (error) {
          console.error("An error occurred during logout:", error);
        }
      }

    return (
        <aside>
            <Image src={photoSrc} alt="Profile Image" width={60} height={60} className="rounded-full"/>
            <ul className="mt-8">
                <li className="mb-2 cursor-pointer hover:text-main-gold"><Link href="/billing">{t("aside.subscription")}</Link></li>
                <li className="mb-2 cursor-pointer hover:text-main-gold"><Link href="/about">{t("aside.about")}</Link></li>
                <li className="mb-2 cursor-pointer hover:text-main-gold"><Link href="/help">{t("aside.help")}</Link></li>
                <li className="mb-2 cursor-pointer hover:text-main-gold">
                  <button type="button" onClick={handleLogOut}>
                    {t("aside.logout")} 
                  </button>
                </li>
            </ul>
        </aside>
    )
}