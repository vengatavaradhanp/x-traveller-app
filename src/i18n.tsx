import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('../public/locales/en/translation.json'),
      },
      fr: {
        translation: require('../public/locales/fr/translation.json'),
      },
      ta: {
        translation: require('../public/locales/ta/translation.json'),
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    debug: process.env.NODE_ENV === 'development', // Enable debug output in development
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false, // Disable Suspense
    },
  });

export default i18n;
