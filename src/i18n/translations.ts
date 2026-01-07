export type Language = 'en' | 'he';

export interface TranslationSchema {
  nav: {
    home: string;
    cases: string;
    shop: string;
    parents: string;
    contact: string;
  };
  home: {
    welcome: string;
    subtitle: string;
    latestCases: string;
    viewAllCases: string;
    deskItems: {
      coffee: string;
      magnifier: string;
      caseFile: string;
    };
  };
  cases: {
    title: string;
    subtitle: string;
    suspect: string;
    scene: string;
    readReport: string;
    caseNumber: string;
  };
  shop: {
    title: string;
    subtitle: string;
    productName: string;
    productDesc: string;
    price: string;
    parentalGate: {
      title: string;
      message: string;
    };
    buyButton: string;
    includes: string;
    includesList: string[];
  };
  checkout: {
    title: string;
    subtitle: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    name: string;
    processing: string;
    complete: string;
    success: string;
    successMsg: string;
    close: string;
  };
  parents: {
    title: string;
    subtitle: string;
    benefits: {
      title: string;
      items: Array<{
        title: string;
        desc: string;
      }>;
    };
    faq: {
      title: string;
      items: Array<{
        q: string;
        a: string;
      }>;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    dropzone: string;
    dropzoneAlt: string;
    received: string;
    fileReceived: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    sent: string;
  };
  common: {
    loading: string;
    error: string;
    confidential: string;
    topSecret: string;
    classified: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    // Navigation
    nav: {
      home: 'Agency HQ',
      cases: 'Case Archive',
      shop: 'The Armory',
      parents: 'Parents Zone',
      contact: 'Secure Line',
    },
    // Home page
    home: {
      welcome: 'Welcome, Junior Detective',
      subtitle: 'Kitchen mysteries await your investigation',
      latestCases: 'Latest Cases',
      viewAllCases: 'Open Full Archive',
      deskItems: {
        coffee: 'A detective needs fuel. This cup has seen many late-night cases.',
        magnifier: 'Essential for examining evidence up close.',
        caseFile: 'Your next mission awaits inside...',
      },
    },
    // Cases page
    cases: {
      title: 'Case Archive',
      subtitle: 'Classified Kitchen Experiments',
      suspect: 'Suspect',
      scene: 'Scene',
      readReport: 'Read Report',
      caseNumber: 'CASE #',
    },
    // Shop page
    shop: {
      title: 'The Armory',
      subtitle: 'Equipment for Young Detectives',
      productName: 'Detective Onion Starter Kit',
      productDesc: 'Everything a junior detective needs to begin their investigation. Includes magnifying glass, evidence bags, secret decoder, and official badge.',
      price: '$29.99',
      parentalGate: {
        title: 'Stop! Identification Required',
        message: 'Ask your parents to complete this mission.',
      },
      buyButton: 'Get the Kit',
      includes: 'Kit Includes',
      includesList: [
        'Official Detective Badge',
        'Magnifying Glass',
        'Evidence Collection Bags',
        'Secret Decoder Ring',
        'Case Notebook',
        'Invisible Ink Pen',
      ],
    },
    // Checkout modal
    checkout: {
      title: 'SECURE TRANSACTION TERMINAL',
      subtitle: 'Parent Authorization Required',
      cardNumber: 'Card Number',
      expiry: 'Expiry',
      cvv: 'CVV',
      name: 'Cardholder Name',
      processing: 'PROCESSING...',
      complete: 'COMPLETE PURCHASE',
      success: 'TRANSACTION APPROVED',
      successMsg: 'Your kit is on the way, detective!',
      close: 'Close Terminal',
    },
    // Parents page
    parents: {
      title: 'Parents Zone',
      subtitle: 'The Science Behind the Fun',
      benefits: {
        title: 'Why Kitchen Science?',
        items: [
          {
            title: 'Scientific Literacy',
            desc: 'Each experiment teaches real scientific concepts through hands-on discovery.',
          },
          {
            title: 'Screen-Free Fun',
            desc: 'Get kids away from screens and into real-world exploration.',
          },
          {
            title: 'Critical Thinking',
            desc: 'Our mystery format encourages hypothesis testing and logical reasoning.',
          },
          {
            title: 'Safe Materials',
            desc: 'All experiments use common household items that are safe for children.',
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'What age range is Detective Onion for?',
            a: 'Our experiments are designed for children ages 5-12, with varying difficulty levels.',
          },
          {
            q: 'Do I need special equipment?',
            a: 'Most experiments use common kitchen items. Our Starter Kit includes specialty tools.',
          },
          {
            q: 'Is adult supervision required?',
            a: 'Yes, we recommend adult supervision for all experiments.',
          },
        ],
      },
    },
    // Contact page
    contact: {
      title: 'Secure Line',
      subtitle: 'Submit Your Evidence',
      dropzone: 'Drop evidence files here',
      dropzoneAlt: 'or click to select',
      received: 'RECEIVED',
      fileReceived: 'Evidence logged successfully',
      name: 'Agent Codename',
      email: 'Secure Email',
      message: 'Your Report',
      send: 'Transmit Report',
      sending: 'Encrypting...',
      sent: 'Report Transmitted',
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      confidential: 'CONFIDENTIAL',
      topSecret: 'TOP SECRET',
      classified: 'CLASSIFIED',
    },
  },
  he: {
    // Navigation
    nav: {
      home: 'מטה הסוכנות',
      cases: 'ארכיון התיקים',
      shop: 'חדר הציוד',
      parents: 'פינת ההורים',
      contact: 'קו מאובטח',
    },
    // Home page
    home: {
      welcome: 'ברוכים הבאים, בלש צעיר',
      subtitle: 'תעלומות המטבח מחכות לחקירה שלך',
      latestCases: 'תיקים אחרונים',
      viewAllCases: 'פתח ארכיון מלא',
      deskItems: {
        coffee: 'לבלש צריך דלק. הכוס הזו ראתה הרבה לילות חקירה.',
        magnifier: 'חיוני לבדיקת ראיות מקרוב.',
        caseFile: 'המשימה הבאה שלך מחכה בפנים...',
      },
    },
    // Cases page
    cases: {
      title: 'ארכיון התיקים',
      subtitle: 'ניסויי מטבח מסווגים',
      suspect: 'חשוד',
      scene: 'זירה',
      readReport: 'קרא דו״ח',
      caseNumber: 'תיק מס׳ ',
    },
    // Shop page
    shop: {
      title: 'חדר הציוד',
      subtitle: 'ציוד לבלשים צעירים',
      productName: 'ערכת הבלש בצלי למתחילים',
      productDesc: 'כל מה שבלש צעיר צריך כדי להתחיל את החקירה. כולל זכוכית מגדלת, שקיות ראיות, מפענח סודי ותג רשמי.',
      price: '₪99.90',
      parentalGate: {
        title: 'עצור! נדרש זיהוי',
        message: 'בקש מההורים שלך להשלים את המשימה הזו.',
      },
      buyButton: 'לקבל את הערכה',
      includes: 'הערכה כוללת',
      includesList: [
        'תג בלש רשמי',
        'זכוכית מגדלת',
        'שקיות איסוף ראיות',
        'טבעת מפענח סודית',
        'מחברת תיקים',
        'עט דיו בלתי נראה',
      ],
    },
    // Checkout modal
    checkout: {
      title: 'מסוף עסקה מאובטח',
      subtitle: 'נדרש אישור הורים',
      cardNumber: 'מספר כרטיס',
      expiry: 'תוקף',
      cvv: 'CVV',
      name: 'שם בעל הכרטיס',
      processing: 'מעבד...',
      complete: 'השלם רכישה',
      success: 'העסקה אושרה',
      successMsg: 'הערכה שלך בדרך, בלש!',
      close: 'סגור מסוף',
    },
    // Parents page
    parents: {
      title: 'פינת ההורים',
      subtitle: 'המדע שמאחורי הכיף',
      benefits: {
        title: 'למה מדע במטבח?',
        items: [
          {
            title: 'אוריינות מדעית',
            desc: 'כל ניסוי מלמד מושגים מדעיים אמיתיים דרך גילוי מעשי.',
          },
          {
            title: 'כיף בלי מסכים',
            desc: 'להרחיק ילדים מהמסכים ולהכניס אותם לחקירה בעולם האמיתי.',
          },
          {
            title: 'חשיבה ביקורתית',
            desc: 'פורמט התעלומה שלנו מעודד בדיקת השערות וחשיבה לוגית.',
          },
          {
            title: 'חומרים בטוחים',
            desc: 'כל הניסויים משתמשים בחומרי בית נפוצים שבטוחים לילדים.',
          },
        ],
      },
      faq: {
        title: 'שאלות נפוצות',
        items: [
          {
            q: 'לאיזה טווח גילאים מתאים הבלש בצלי?',
            a: 'הניסויים שלנו מיועדים לילדים בגילאי 5-12, עם רמות קושי משתנות.',
          },
          {
            q: 'האם אני צריך ציוד מיוחד?',
            a: 'רוב הניסויים משתמשים בחפצי מטבח נפוצים. ערכת המתחילים שלנו כוללת כלים מיוחדים.',
          },
          {
            q: 'האם נדרש פיקוח מבוגר?',
            a: 'כן, אנחנו ממליצים על פיקוח מבוגר בכל הניסויים.',
          },
        ],
      },
    },
    // Contact page
    contact: {
      title: 'קו מאובטח',
      subtitle: 'הגש את הראיות שלך',
      dropzone: 'שחרר קבצי ראיות כאן',
      dropzoneAlt: 'או לחץ לבחירה',
      received: 'התקבל',
      fileReceived: 'הראיה נרשמה בהצלחה',
      name: 'שם קוד סוכן',
      email: 'אימייל מאובטח',
      message: 'הדו״ח שלך',
      send: 'שדר דו״ח',
      sending: 'מצפין...',
      sent: 'הדו״ח שודר',
    },
    // Common
    common: {
      loading: 'טוען...',
      error: 'משהו השתבש',
      confidential: 'סודי',
      topSecret: 'סודי ביותר',
      classified: 'מסווג',
    },
  },
};
