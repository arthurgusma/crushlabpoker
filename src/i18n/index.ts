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
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "en", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "pt", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;