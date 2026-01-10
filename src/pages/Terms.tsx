import { ShieldAlert, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />

      <main className="flex-1 pt-40 pb-12 md:pb-20">
        <div className="container max-w-4xl px-4">

          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <FileText className="w-10 h-10 text-primary" />
              <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground">תקנון ותנאי שימוש</h1>
            </div>
          </header>

          {/* Content */}
          <article className="bg-card border-2 border-border rounded-2xl p-6 md:p-10 shadow-folder space-y-8">
            
            <section>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-3">1. כללי</h2>
              <p className="text-muted-foreground leading-relaxed">
                ברוכים הבאים לאתר "הבלש בצלי". האתר משמש כחנות אינטרנטית למכירת ערכות פעילות דיגיטליות וציוד נלווה לילדים.
                השימוש באתר ורכישת מוצרים בו כפופים לתנאים המפורטים בתקנון זה.
              </p>
            </section>

            <section>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-3">2. רכישת מוצרים דיגיטליים</h2>
              <p className="text-muted-foreground leading-relaxed">
                האתר מציע למכירה קבצים דיגיטליים (PDF) להורדה מיידית. הקבצים מיועדים לשימוש אישי ופרטי בלבד.
                אין להעתיק, לשכפל, להפיץ, למכור או לעשות כל שימוש מסחרי בקבצים ללא אישור בכתב.
              </p>
            </section>

            {/* הסעיף המודגש */}
            <section className="bg-destructive/5 border-2 border-destructive/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h2 className="font-heebo font-bold text-xl text-foreground mb-3">3. מדיניות ביטולים והחזרים (מוצרים דיגיטליים)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    רכישת מוצר דיגיטלי באתר זה הינה סופית. בהתאם לתקנות הגנת הצרכן (ביטול עסקה), תשע"א-2010, 
                    לא ניתן לבטל עסקה בגין רכישת "מידע" כהגדרתו בחוק המחשבים, וכן טובין הניתנים להקלטה, לשעתוק או לשכפול, 
                    שהצרכן פתח את אריזתם המקורית או קיבל גישה אליהם.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    מאחר והמוצרים באתר נשלחים אליכם דיגיטלית באופן מיידי, לא תתאפשר קבלת החזר כספי לאחר ביצוע הרכישה וקבלת הקישור להורדה.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-3">4. אספקה ומשלוח</h2>
              <p className="text-muted-foreground leading-relaxed">
                מוצרים דיגיטליים יישלחו לכתובת המייל שהוזנה בעת ההזמנה מיד לאחר אישור התשלום.
                באחריות הלקוח לוודא שכתובת המייל תקינה. במידה ולא התקבל המייל, יש לבדוק בתיקיית הספאם או ליצור קשר דרך עמוד "קו מאובטח".
              </p>
            </section>

            <section>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-3">5. קניין רוחני</h2>
              <p className="text-muted-foreground leading-relaxed">
                כל זכויות הקניין הרוחני באתר, לרבות התכנים, העיצובים, הדמויות ("הבלש בצלי"), הלוגו והקבצים, הינם רכושם הבלעדי של בעלי האתר.
              </p>
            </section>

            <section>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-3">6. נגישות</h2>
              <p className="text-muted-foreground leading-relaxed">
                אנו עושים את מירב המאמצים להנגיש את האתר לבעלי מוגבלויות בהתאם לתקן ת"י 5568 ברמה AA. 
                אם נתקלתם בבעיית נגישות, אנא דווחו לנו ונתקן זאת בהקדם.
              </p>
            </section>

          </article>
        </div>
      </main>
    </div>
  );
};

export default Terms;
