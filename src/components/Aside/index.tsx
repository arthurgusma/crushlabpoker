"use client";

import { UserContext } from "@/context/UserContext";
import Image from "next/image"
import { useContext } from "react";

export default function Aside() {
    const { user } = useContext(UserContext);

    const photoSrc = user.photoURL || "";

    return (
        <aside>
            <Image src={photoSrc} alt="Profile Image" width={60} height={60} className="rounded-full"/>
            <p></p>
            <ul>
                <li>Assinatura</li>
                <li>Sobre</li>
                <li>Ajuda</li>
            </ul>
        </aside>
    )
}