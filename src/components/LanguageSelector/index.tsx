"use client";

import React, { useEffect, useState } from "react";
import i18n from '@/i18n';
import BrasilFlag from "@/assets/cuntry-flags/brazil-flag.png";
import EuaFlag from "@/assets/cuntry-flags/usa-flag.png";
import Image from "next/image";

export default function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState("");

    function chooseLanguage(language: string) {
        i18n.changeLanguage(language);   
        setSelectedLanguage(language);
        localStorage.setItem('language', language);
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') || "en-US";
        i18n.changeLanguage(storedLanguage);
        setSelectedLanguage(storedLanguage);
    }, []);

    return (
        <div className="flex flags-container">
           <Image alt="brazilian flag" src={BrasilFlag} className={`mx-1 cursor-pointer ${selectedLanguage !== "pt-BR" ? "grayscale" : "cursor-not-allowed"} hover:grayscale-0`}  height={30} onClick={() => chooseLanguage("pt-BR")} />
           <Image alt="usa flag" src={EuaFlag} className={`mx-1 cursor-pointer ${selectedLanguage !== "en-US" ? "grayscale" : "cursor-not-allowed"}  hover:grayscale-0`}  height={30} onClick={() => chooseLanguage("en-US")} />
        </div>
      )
};
