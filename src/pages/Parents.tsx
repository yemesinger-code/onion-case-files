import Navbar from '@/components/Navbar';
import { Brain, ChevronLeft, FlaskConical, Microscope } from 'lucide-react';

const Parents = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      {/* תיקון: pt-40 מונע חיתוך כותרת */}
      <main className="flex-1 pt-40 pb-12 md:pb-20">
        <div className="container max-w-4xl px-4">

          {/* Hero Section */}
          <header className="text-center mb-12 md:mb-16">
            <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
              פינת ההורים 🎓
            </h1>
            <p className="font-heebo text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              כל המידע על הצד המדעי והחינוכי של "הבלש בצלי".
            </p>
          </header>

          {/* Scientific Explanation */}
          <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 mb-10 shadow-folder">
            <h2 className="font-heebo font-bold text-2xl text-foreground mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              איך זה עובד מבחינה מדעית?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                השיטה שלנו מבוססת על עקרון ה-STEM. כל תעלומה בנויה כך שהילד לא יכול לפתור אותה ללא ביצוע הניסוי.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-muted rounded-xl p-4 text-center">
                  <Microscope className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-bold text-foreground">חשיבה ביקורתית</p>
                </div>
                <div className="bg-muted rounded-xl p-4 text-center">
                  <FlaskConical className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-bold text-foreground">כימיה מעשית</p>
                </div>
                <div className="bg-muted rounded-xl p-4 text-center">
                  <span className="text-3xl block mb-2">👩‍🍳</span>
                  <p className="font-bold text-foreground">עצמאות</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-4">
            <h2 className="font-heebo font-bold text-2xl text-foreground text-center mb-6">שאלות נפוצות</h2>
            <div className="space-y-3">
              {[
                {
                  q: "האם הניסויים מלכלכים את המטבח?",
                  a: "אנחנו משתדלים מאוד שלא. הניסויים תוכננו להיות 'נקיים' יחסית."
                },
                {
                  q: "האם החומרים מסוכנים?",
                  a: "חד משמעית לא. כל החומרים הם חומרי מטבח רגילים (חומץ, סודה, שמן)."
                },
                {
                  q: "האם הילד יכול לעשות את זה לבד?",
                  a: "גילאי 9 ומעלה לרוב כן. גילאי 6-8 מומלצת השגחה."
                },
                {
                  q: "מה קורה אם הניסוי לא מצליח?",
                  a: "בכל תיק יש סעיף 'מה השתבש?' שעוזר להבין וללמוד."
                },
                {
                  q: "האם אפשר להדפיס את הקובץ מספר פעמים?",
                  a: "כן, הקובץ הוא שלכם לתמיד."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-card border border-border rounded-xl p-4 group">
                  <summary className="font-heebo font-bold text-foreground cursor-pointer flex items-center justify-between list-none">
                    {faq.q}
                    <ChevronLeft className="w-5 h-5 text-muted-foreground transition-transform group-open:-rotate-90" />
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
      {/* Footer הוסר */}
    </div>
  );
};

export default Parents;
