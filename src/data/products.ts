import { IdCard } from 'lucide-react';

// הגדרת סוגי המוצרים (כדי למנוע טעויות)
export type Product = {
  id: string;
  type: 'digital' | 'physical'; // סוג המוצר: דיגיטלי (תיק) או פיזי (ציוד)
  title: string;
  description: string;
  price: number;
  icon: string | any; // אפשר לשים אימוג'י או אייקון
  imageColor?: string; // צבע רקע (רק לתיקים)
  metadata?: { // מידע נוסף לפי הצורך
    difficulty?: string;
    time?: string;
    badge?: string;
  };
};

// --- כאן מעדכנים את המוצרים ---
export const products: Product[] = [
  // === תיקים דיגיטליים (ארכיון התיקים) ===
  {
    id: "001",
    type: 'digital',
    title: "תעלומת העוגייה הנעלמת",
    description: "מי גנב את העוגייה מהצנצנת הסגורה? חקירה שמשלבת טביעות אצבע וכימיה של אבקות.",
    price: 9.90,
    icon: "🍪",
    imageColor: "bg-orange-100",
    metadata: {
      difficulty: "מתחילים (גילאי 6-9)",
      time: "45 דקות"
    }
  },
  {
    id: "002",
    type: 'digital',
    title: "השמרים שלא תפחו",
    description: "למה הפיצה של ברוך האופה נשארה שטוחה? חקירה ביולוגית מרתקת על יצורים מיקרוסקופיים.",
    price: 9.90,
    icon: "🍕",
    imageColor: "bg-blue-100",
    metadata: {
      difficulty: "מתקדמים (גילאי 8-12)",
      time: "60 דקות"
    }
  },
  {
    id: "003",
    type: 'digital',
    title: "תעלומת הלימונדה הסגולה",
    description: "איך המשקה שינה את צבעו לבד? ניסוי בחומצות ובסיסים שנראה כמו קסם אמיתי.",
    price: 9.90,
    icon: "🍋",
    imageColor: "bg-purple-100",
    metadata: {
      difficulty: "לכל המשפחה",
      time: "30 דקות"
    }
  },
  // === ציוד פיזי (חדר הציוד) ===
  {
    id: "E01",
    type: 'physical',
    title: "חלוק מדען צעיר",
    description: "חלוק לבן מקצועי מבד איכותי, עם לוגו רקום של 'הבלש בצלי'.",
    price: 49.90,
    icon: "🥼",
    metadata: {
      badge: "הכי נמכר"
    }
  },
  {
    id: "E02",
    type: 'physical',
    title: "משקפי מגן תקניים",
    description: "להגנה על העיניים בזמן ניסויים. רצועה מתכווננת.",
    price: 29.90,
    icon: "🥽",
    metadata: {
      badge: "בטיחות"
    }
  },
  {
    id: "E03",
    type: 'physical',
    title: "ערכת מבחנות + מעמד",
    description: "3 מבחנות פלסטיק עמידות עם פקקים ומעמד עץ.",
    price: 39.90,
    icon: "🧪"
  },
  {
    id: "E04",
    type: 'physical',
    title: "כף מדידה רב-תכליתית",
    description: "כף מדידה מדויקת לניסויים כימיים. צד לנוזלים וצד לאבקות.",
    price: 15.90,
    icon: "🥄"
  },
  {
    id: "E05",
    type: 'physical',
    title: "תעודת סוכן אישית",
    description: "כרטיס קשיח עם תמונה ושם הילד, שרוך לצוואר.",
    price: 19.90,
    icon: IdCard, // שימוש ברכיב אייקון במקום אימוג'י
    metadata: {
      badge: "אישי"
    }
  }
];

// פונקציות עזר לשליפת נתונים
export const getDigitalProducts = () => products.filter(p => p.type === 'digital');
export const getPhysicalProducts = () => products.filter(p => p.type === 'physical');
