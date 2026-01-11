import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// המילון של האתר
const resources = {
  en: {
    translation: {
      nav: {
        home: "Headquarters",
        archive: "Case Archives",
        equipment: "Equipment Room",
        parents: "Parents Corner",
        contact: "Secure Line",
        cta: "Start Investigating"
      },
      logo: "Detective Onion"
    }
  },
  he: {
    translation: {
      nav: {
        home: "מטה הסוכנות",
        archive: "ארכיון התיקים",
        equipment: "חדר הציוד",
        parents: "פינת ההורים",
        contact: "קו מאובטח",
        cta: "התחילו לחקור"
      },
      logo: "הבלש בצלי"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "he", // שפת ברירת מחדל: עברית
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;