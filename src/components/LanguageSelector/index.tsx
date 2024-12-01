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
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            chooseLanguage(storedLanguage);
        }
    }, []);

    return (
        <div className="flex flags-container">
            <Image alt="brazilian flag" src={BrasilFlag} height={30} onClick={() => chooseLanguage("pt-BR")}
                className={`mx-1 cursor-pointer border-2 rounded-full ${
                    selectedLanguage === "pt-BR" ? "border-green-500 cursor-not-allowed" : "grayscale border-transparent"
                }`}
            />
            <Image alt="usa flag" src={EuaFlag} height={30} onClick={() => chooseLanguage("en-US")}
                className={`mx-1 cursor-pointer border-2 rounded-full ${
                    selectedLanguage === "en-US" ? "border-green-500 cursor-not-allowed" : "grayscale border-transparent"
                }`}
            />
      </div>
      )
};
