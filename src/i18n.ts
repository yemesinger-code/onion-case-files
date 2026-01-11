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
      },
      parents: {
        hero: {
          badge: "✨ Recommended by parents & educators",
          title: "Let your kids fall in love with thinking 🧅🔍",
          subtitle: `Fascinating detective plot + hands-on science experiment = Unforgettable learning experience in your kitchen`,
          safe: "100% Child Safe",
          rating: "4.9/5 Rating",
          users: "Over 1,000 Families",
          cta: "Download the Mystery"
        },
        problems: {
          title: "Does this sound familiar? 🤔",
          items: {
            screens: "Kids glued to screens without meaningful content",
            boredom: "Bored quickly with repetitive games",
            science: "Looking for a fun way to teach science at home",
            logic: "Want to develop creative and logical thinking"
          }
        },
        solution: {
          title: "The Solution: A Detective-Science Experience at Home 🎯",
          subtitle: `Every plot combines a fascinating mystery with a hands-on experiment kids can do at home`,
          brain: {
            title: "Critical Thinking",
            desc: `Evidence analysis, pattern recognition, and deduction - skills for life`,
            list: ["Logical Thinking", "Problem Solving", "Decision Making"]
          },
          science: {
            title: "Hands-on Science",
            desc: `Simple, safe experiments that teach scientific principles in a fun way`,
            list: ["Scientific Inquiry", "Hands-on Practice", "Understanding Phenomena"]
          },
          family: {
            title: "Quality Family Time",
            desc: `A family activity that connects everyone around learning and fun`,
            list: ["Shared Experience", "Discussion", "Family Memories"]
          }
        },
        inside: {
          title: "What's included in every case? 📄",
          subtitle: "A comprehensive PDF with everything you need",
          detective: {
            title: "The Detective Plot",
            list: ["Fascinating mystery to solve", "Funny & interesting characters", "Clues & riddles along the way", "Surprising educational solution"]
          },
          experiment: {
            title: "The Science Experiment",
            list: ["Step-by-step detailed instructions", "Simple kitchen ingredients list", "Age-appropriate scientific explanations", "Questions for thought & discussion"]
          },
          format: {
            title: "Convenient & Accessible Format",
            desc: `High-quality PDF you can print or read from a screen. All instructions are clear and accompanied by colorful illustrations.`
          }
        },
        ages: {
          title: "Suitable for every age 👶➡️👦➡️👧",
          group1: { title: "Ages 6-8", subtitle: "Kindergarten - 2nd Grade", features: ["Simple mysteries", "Basic experiments", "Parental guidance"] },
          group2: { title: "Ages 9-12", subtitle: "3rd - 6th Grade", features: ["Complex challenges", "More independent", "Expanding knowledge"] },
          group3: { title: "Ages 13+", subtitle: "Teens & Adults", features: ["Advanced mysteries", "Scientific depth", "Complex experiments"] }
        },
        testimonials: {
          title: "What parents are saying 💬",
          review1: { name: "Ronit Cohen", role: "Mom of two (7 & 10)", text: `My kids were so excited about the plot and experiment! We did it together in the kitchen and learned so much.` },
          review2: { name: "Danny Levi", role: "4th Grade Teacher", text: `I use these plots in class as enrichment. The students love it and the experiments actually work! Highly recommended.` },
          review3: { name: "Sarah Avraham", role: "Mom to a 12yo", text: `My son struggled with reading and didn't like science. These detective plots changed that completely - he asks for more!` },
          review4: { name: "Yossi Mizrahi", role: "Dad of three", text: `Perfect family activity for Friday afternoon! Simple, safe experiments and fascinating stories. Worth every penny!` }
        },
        pricing: {
          title: "Small investment, Big future 💎",
          subtitle: `Less than the cost of a chocolate bar, more than a learning experience that lasts a lifetime`,
          badge: "🌟 Launch Offer",
          product_name: "One Detective Plot",
          product_sub: "Includes full science experiment",
          price: "₪9.90",
          payment_type: "One-time payment • Instant download",
          what_you_get: "What you get:",
          features: [
            "High-quality designed PDF",
            "Full fascinating detective plot",
            "Science experiment with detailed steps",
            "Kitchen ingredients list",
            "Age-appropriate explanations",
            "Instant download after payment"
          ],
          cta: "Buy Now & Download",
          secure: "💳 Secure payment • Instant email receipt",
          guarantee: {
            title: "Full Satisfaction Guarantee 🛡️",
            text: `Not satisfied? We'll refund every cent within 7 days, no questions asked. We're sure your kids will love it!`
          }
        },
        faq: {
          title: "Common Questions ❓",
          q1: { q: "Is it really suitable for my child?", a: `Absolutely! The plots are divided into difficulty levels, from age 6 to adults. Each plot is adapted with clear instructions.` },
          q2: { q: "How long does the experiment take?", a: `An average experiment takes 20-45 minutes, depending on the level and age. Instructions are step-by-step.` },
          q3: { q: "Do I need internet connection?", a: `Only for the initial download. Once you have the PDF, you can use it anywhere, anytime - print or screen, offline.` },
          q4: { q: "What materials do I need?", a: `All experiments use simple household items found in any kitchen - water, salt, sugar, vinegar, oil, etc.` },
          q5: { q: "Is it safe for kids?", a: `All experiments are designed for safe home execution. We recommend adult supervision, especially for younger ages.` },
          q6: { q: "What if I have technical issues?", a: `We're here to help! Contact us at support@detective-onion.com and we'll solve any issue within 24 hours.` }
        },
        cta_final: {
          title: "Give your kids the gift of thinking and discovery",
          subtitle: "Join over 1,000 families who discovered that learning can be fun, meaningful, and fascinating",
          btn: "Buy Now for ₪9.90",
          footer: "💾 Instant Download • 🛡️ 7-Day Money Back Guarantee"
        }
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
      },
      parents: {
        hero: {
          badge: "✨ מומלץ על ידי הורים ואנשי חינוך",
          title: "תנו לילדים שלכם להתאהב בחשיבה 🧅🔍",
          subtitle: `עלילה בלשית מרתקת + ניסוי מדעי מעשי = חוויית למידה בלתי נשכחת במטבח הביתי שלכם`,
          safe: "בטוח לגמרי לילדים",
          rating: "דירוג 4.9/5",
          users: "למעלה מ-1,000 משפחות",
          cta: "אני רוצה להוריד את התעלומה"
        },
        problems: {
          title: "האם זה נשמע מוכר? 🤔",
          items: {
            screens: "הילדים דבוקים למסכים ללא תוכן משמעותי",
            boredom: "משעמם להם במהרה ממשחקים חוזרים",
            science: "אתם מחפשים דרך מהנה ללמד מדע בבית",
            logic: "רוצים לפתח חשיבה לוגית ויצירתית"
          }
        },
        solution: {
          title: "הפתרון: חוויה בלשית-מדעית במטבח שלכם 🎯",
          subtitle: `כל עלילה משלבת תעלומה מרתקת עם ניסוי מדעי מעשי שהילדים יכולים לבצע בבית`,
          brain: {
            title: "פיתוח חשיבה ביקורתית",
            desc: `ניתוח ראיות, זיהוי דפוסים והסקת מסקנות - מיומנויות לכל החיים`,
            list: ["חשיבה לוגית", "פתרון בעיות", "קבלת החלטות"]
          },
          science: {
            title: "למידה מדעית מעשית",
            desc: `ניסויים פשוטים ובטוחים שמלמדים עקרונות מדעיים בצורה מהנה`,
            list: ["חקר מדעי", "התנסות מעשית", "הבנת תופעות"]
          },
          family: {
            title: "זמן איכות משפחתי",
            desc: `פעילות משפחתית שמחברת את כל המשפחה סביב למידה והנאה`,
            list: ["חוויה משותפת", "שיחה ודיון", "זיכרונות משפחתיים"]
          }
        },
        inside: {
          title: "מה כלול בכל עלילה? 📄",
          subtitle: "מסמך PDF מקיף עם כל מה שצריך",
          detective: {
            title: "העלילה הבלשית",
            list: ["תעלומה מרתקת לפתרון", "דמויות מעניינות ומצחיקות", "רמזים וחידות לאורך הדרך", "פתרון מפתיע ומלמד"]
          },
          experiment: {
            title: "הניסוי המדעי",
            list: ["הוראות צעד אחר צעד מפורטות", "רשימת חומרים פשוטים מהמטבח", "הסברים מדעיים מותאמים לילדים", "שאלות לחשיבה ודיון"]
          },
          format: {
            title: "פורמט נוח ונגיש",
            desc: `קובץ PDF איכותי שניתן להדפיס או לקרוא ממסך. כל ההוראות ברורות ומלוות באיורים צבעוניים.`
          }
        },
        ages: {
          title: "מתאים לכל גיל 👶➡️👦➡️👧",
          group1: { title: "גילאי 6-8", subtitle: "גן עד כיתה ב'", features: ["תעלומות פשוטות", "ניסויים בסיסיים", "בליווי הורים"] },
          group2: { title: "גילאי 9-12", subtitle: "כיתות ג' עד ו'", features: ["אתגרים מורכבים", "ביצוע עצמאי יותר", "הרחבת ידע מדעי"] },
          group3: { title: "גילאי 13+", subtitle: "בני נוער ומבוגרים", features: ["תעלומות מתקדמות", "הרחבת ידע מדעי", "ניסויים מורכבים"] }
        },
        testimonials: {
          title: "מה הורים אומרים 💬",
          review1: { name: "רונית כהן", role: "אמא לשני ילדים (7 ו-10)", text: `הילדים שלי ממש התרגשו מהעלילה והניסוי! עשינו את זה ביחד במטבח ולמדנו המון. זמן איכות משפחתי מושלם.` },
          review2: { name: "דני לוי", role: "מורה לכיתה ד'", text: `משתמש בעלילות בכיתה כפעילות העשרה. התלמידים מתלהבים והניסויים ממש עובדים! מומלץ בחום.` },
          review3: { name: "שרה אברהם", role: "אמא לבן בן 12", text: `הבן שלי התקשה בקריאה ולא אהב מדעים. העלילות הבלשיות שינו את זה לגמרי - עכשיו הוא מבקש עוד!` },
          review4: { name: "יוסי מזרחי", role: "אבא לשלושה ילדים", text: `פעילות משפחתית מושלמת לשישי אחה״צ! הניסויים פשוטים ובטוחים, והעלילות ממש מרתקות. שווה כל שקל!` }
        },
        pricing: {
          title: "השקעה קטנה בעתיד גדול 💎",
          subtitle: `פחות מעלות של שוקולד, יותר מחוויית למידה שתישאר לכל החיים`,
          badge: "🌟 מבצע השקה",
          product_name: "עלילה בלשית אחת",
          product_sub: "כולל ניסוי מדעי מלא",
          price: "₪9.90",
          payment_type: "תשלום חד-פעמי • הורדה מיידית",
          what_you_get: "מה תקבלו:",
          features: [
            "קובץ PDF איכותי ומעוצב",
            "עלילה בלשית מלאה ומרתקת",
            "ניסוי מדעי עם הוראות מפורטות",
            "רשימת חומרים מהמטבח",
            "הסברים מדעיים מותאמים לגיל",
            "הורדה מיידית לאחר התשלום"
          ],
          cta: "רכשו עכשיו והורידו מיד",
          secure: "💳 תשלום מאובטח • קבלה מיידית למייל",
          guarantee: {
            title: "ערבות שביעות רצון מלאה 🛡️",
            text: `אנחנו בטוחים שהילדים שלכם יתאהבו!`
          }
        },
        faq: {
          title: "שאלות נפוצות ❓",
          q1: { q: "האם זה באמת מתאים לילד שלי?", a: `בהחלט! העלילות מחולקות לרמות קושי שונות, מגיל 6 ועד למבוגרים. כל עלילה מותאמת לגיל הילד עם הוראות ברורות והסברים מתאימים.` },
          q2: { q: "כמה זמן לוקח לבצע את הניסוי?", a: `ניסוי ממוצע לוקח בין 20-45 דקות, תלוי ברמת הקושי ובגיל הילד. כל ההוראות ברורות וצעד אחר צעד.` },
          q3: { q: "האם צריך חיבור לאינטרנט?", a: `רק להורדת הקובץ בפעם הראשונה. אחרי שהורדתם את ה-PDF, אתם יכולים להשתמש בו בכל מקום וזמן - להדפיס או לקרוא ממסך, ללא צורך באינטרנט.` },
          q4: { q: "איזה חומרים צריך לניסוי?", a: `כל הניסויים משתמשים בחומרים פשוטים שיש כמעט בכל מטבח - מים, מלח, סוכר, חומץ, שמן וכו'. רשימה מפורטת מופיעה בכל עלילה.` },
          q5: { q: "האם זה בטוח לילדים?", a: `כל הניסויים תוכננו במיוחד לביצוע בטוח במטבח ביתי עם ילדים. אנו ממליצים על ליווי מבוגר, במיוחד בגילאים הצעירים. כל הוראות הבטיחות מפורטות במסמך.` },
          q6: { q: "מה אעשה אם יש בעיה טכנית בהורדה?", a: `אנחנו כאן לעזור! צרו איתנו קשר דרך המייל support@detective-onion.com ונפתור כל בעיה תוך 24 שעות.` }
        },
        cta_final: {
          title: "תנו לילדים שלכם את המתנה של חשיבה וגילוי",
          subtitle: "הצטרפו למעלה מ-1,000 משפחות שגילו שלמידה יכולה להיות מהנה, משמעותית ומרתקת",
          btn: "רכשו עכשיו ב-₪9.90",
          footer: "💾 הורדה מיידית 🛡️"
        }
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