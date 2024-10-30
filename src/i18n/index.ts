"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEnglish from './locales/en/translation.json';
import translationsInPortuguese from './locales/pt/translation.json';

const resources = {
  en: {
    translation: translationsInEnglish
  },
  pt: {
    translation: translationsInPortuguese
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;