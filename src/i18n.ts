import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      logo: "Detective Onion",
      // הוספנו את החלק של יצירת קשר באנגלית
      contact: {
        title: "Secure Line",
        subtitle: "Here you can contact HQ and sign up for updates",
        newsletter_title: "Field Updates",
        form_title: "Contact HQ",
        name_placeholder: "Full Name",
        email_placeholder: "Return Email",
        msg_placeholder: "Write your message here...",
        send_btn: "Send Message",
        success_title: "Message Received!",
        success_msg: "Over and out."
      }
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
      logo: "הבלש בצלי",
      // הוספנו את החלק של יצירת קשר בעברית
      contact: {
        title: "קו מאובטח",
        subtitle: "כאן יוצרים קשר עם מטה הסוכנות ונרשמים לקבלת עדכונים",
        newsletter_title: "קבלת עדכונים מהשטח",
        form_title: "פנייה למטה",
        name_placeholder: "שם מלא",
        email_placeholder: "אימייל לחזרה",
        msg_placeholder: "...כתבו את ההודעה שלכם",
        send_btn: "שליחת הודעה",
        success_title: "המסר התקבל!",
        success_msg: "רות סוף."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "he", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;