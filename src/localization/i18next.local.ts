import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

const lazyLoadResource = resourcesToBackend(
  async (language: string, namespace: string) => {
    return import(`./locales/${language}/${namespace || 'translation'}.ts`);
  },
);

// init i18next
i18n
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(lazyLoadResource)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    partialBundledLanguages: true,
    fallbackLng: 'sr',
    debug: false, // Set to `true` when you want detailed logs in console for localization
    load: 'languageOnly',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      bindI18nStore: 'added',
    },
  });

export default i18n;
