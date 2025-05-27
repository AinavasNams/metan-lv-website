import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import translationRU from '../locales/ru/translation.json';
import translationLV from '../locales/lv/translation.json';
import translationEN from '../locales/en/translation.json';

const resources = {
  ru: {
    translation: translationRU
  },
  lv: {
    translation: translationLV
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'lv', // Default language set to Latvian
    fallbackLng: 'lv',
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
