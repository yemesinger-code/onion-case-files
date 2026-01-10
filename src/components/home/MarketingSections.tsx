import { AlertCircle, Lightbulb, Smartphone, Brain, Clock, Sparkles } from 'lucide-react';

// Pain Points Section - "מכירים את זה?"
export const PainPoints = () => {
  const painPoints = [
    {
      icon: Smartphone,
      title: "הילדים דבוקים למסכים",
      description: "קשה למצוא פעילות שבאמת תופסת את תשומת הלב שלהם בלי טאבלט או טלוויזיה."
    },
    {
      icon: Clock,
      title: "אין זמן לארגן פעילויות",
      description: "בין העבודה לחוגים, מי מספיק לתכנן פעילות איכותית?"
    },
    {
      icon: Brain,
      title: "רוצים שילמדו משהו אמיתי",
      description: "לא סתם בידור - אלא משהו שיפתח להם את הראש ויעורר סקרנות."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" dir="rtl">
      <div className="container max-w-5xl px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-bold mb-4">
            <AlertCircle className="w-5 h-5" />
            מכירים את זה?
          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground">
            האתגרים של הורים בעידן הדיגיטלי
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-border rounded-2xl p-6 text-center shadow-folder"
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-heebo font-bold text-lg text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solution Section - "הפתרון שלנו"
export const Solution = () => {
  const benefits = [
    "פעילות ללא מסכים שהילדים באמת אוהבים",
    "שילוב של סיפור מותח + ניסוי מדעי + אוכל טעים",
    "הכל מוכן - רק צריך להוריד ולהדפיס",
    "מתאים לגילאי 6-12, לבד או עם ההורים"
  ];

  return (
    <section className="py-16 md:py-24 bg-primary/5" dir="rtl">
      <div className="container max-w-5xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-bold mb-4">
              <Lightbulb className="w-5 h-5" />
              הפתרון
            </span>
            <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground mb-6">
              חקירה במטבח שמשלבת<br />
              <span className="text-primary">מדע, סיפור ובישול</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              תיקי החקירה של "הבלש בצלי" הופכים את המטבח למעבדה מדעית. 
              הילדים פותרים תעלומה אמיתית באמצעות ניסוי מדעי - ובסוף גם אוכלים את הראיות!
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-folder">
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
              <span className="text-8xl">🧅🔍</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
