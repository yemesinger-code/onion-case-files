import Navbar from '@/components/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Brain, ChevronLeft, FlaskConical, Microscope } from 'lucide-react';

const Parents = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          
          {/* Intro Section */}
          <header className="text-center mb-12 md:mb-16">
            <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
              פינת ההורים 🎓
            </h1>
            <p className="font-heebo text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              אנחנו יודעים שחשוב לכם לתת לילדים ערך מוסף. 
              כאן תמצאו את כל המידע על הצד המדעי והחינוכי של "הבלש בצלי".
            </p>
          </header>

          {/* Scientific Explanation */}
          <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-10 shadow-folder mb-10">
            <h2 className="font-heebo font-bold text-2xl text-foreground mb-4 flex items-center gap-3">
              <Microscope className="w-7 h-7 text-primary" />
              איך זה עובד מבחינה מדעית?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                השיטה שלנו מבוססת על עקרון ה-STEM (Science, Technology, Engineering, Mathematics).
                במקום ללמד תיאוריה יבשה, אנחנו משתמשים ב"למידה מבוססת חקר".
              </p>
              <p>
                כל תעלומה בנויה כך שהילד לא יכול לפתור אותה ללא ביצוע הניסוי. 
                הניסוי הוא לא "סתם כיף", הוא הכלי שנותן את הרמז המרכזי. 
                זה יוצר מוטיבציה פנימית חזקה ללמוד ולהבין את התהליך.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <Brain className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-bold text-foreground">חשיבה ביקורתית</h3>
                  <p className="text-sm">הסקת מסקנות מתוך תצפית</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <FlaskConical className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <h3 className="font-bold text-foreground">כימיה מעשית</h3>
                  <p className="text-sm">הבנת ריאקציות וחומרים</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <span className="text-3xl block mb-2">👩‍🍳</span>
                  <h3 className="font-bold text-foreground">עצמאות</h3>
                  <p className="text-sm">ביצוע הוראות מורכבות</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-4">
            <h2 className="font-heebo font-bold text-2xl text-foreground mb-6">שאלות נפוצות</h2>
            <div className="space-y-3">
              {[
                {
                  q: "האם הניסויים מלכלכים את המטבח?",
                  a: "אנחנו משתדלים מאוד שלא. הניסויים תוכננו להיות 'נקיים' יחסית (בלי התפוצצויות צבע), וכל דף ניסוי כולל הנחיות ברורות לניקיון בסיום."
                },
                {
                  q: "האם החומרים מסוכנים?",
                  a: "חד משמעית לא. כל החומרים הם חומרי מטבח רגילים ומוכרים (חומץ, סודה לשתייה, שמן, מלח, כרוב וכו'). אין שימוש בכימיקלים תעשייתיים."
                },
                {
                  q: "האם הילד יכול לעשות את זה לבד?",
                  a: "גילאי 9 ומעלה יכולים לרוב לבצע את הניסוי לבד. לגילאים צעירים יותר (6-8) מומלצת השגחת מבוגר, וזו הזדמנות מצוינת לזמן איכות משותף."
                },
                {
                  q: "מה קורה אם הניסוי לא מצליח?",
                  a: "זה חלק מהמדע! בכל תיק יש סעיף 'מה השתבש?' שעוזר להבין למה התוצאה שונה, ומעודד לנסות שוב. הכישלון הוא חלק מהלמידה."
                },
                {
                  q: "האם אפשר להדפיס את הקובץ מספר פעמים?",
                  a: "כן, הקובץ הוא שלכם לתמיד. אם יש לכם כמה ילדים, אתם יכולים להדפיס עותק לכל ילד ללא תשלום נוסף."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-card border border-border rounded-xl p-4 group">
                  <summary className="font-heebo font-bold text-foreground cursor-pointer flex justify-between items-center list-none">
                    {faq.q}
                    <ChevronLeft className="w-5 h-5 transition-transform group-open:-rotate-90" />
                  </summary>
                  <p className="text-muted-foreground mt-3 pt-3 border-t border-border">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Parents;
