'use client';
import { useEffect } from 'react';
import i18n from '.';

export default function I18nInitializer() {
  useEffect(() => {
    i18n.init();
  }, []);

  return null;
}
