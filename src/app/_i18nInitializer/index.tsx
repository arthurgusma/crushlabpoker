'use client';
import { useEffect } from 'react';
import i18n from '../../i18n'; // Adjust the import path if needed

export default function I18nInitializer() {
  useEffect(() => {
    i18n.init();
  }, []);

  return null;
}
