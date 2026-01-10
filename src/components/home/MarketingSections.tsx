import { Brain, Beaker, Heart, Check } from 'lucide-react';

export const PainPoints = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30" dir="rtl">
      <div className="container max-w-4xl px-4">
        <h2 className="font-heebo font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
           האם זה נשמע מוכר? 🤔
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "📱", text: "הילדים דבוקים למסכים ללא תוכן משמעותי" },
            { icon: "😴", text: "משעמם להם במהרה ממשחקים חוזרים" },
            { icon: "🔬", text: "אתם מחפשים דרך מהנה ללמד מדע בבית" },
            { icon: "🧠", text: "רוצים לפתח חשיבה לוגית ויצירתית" }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 bg-card border border-border rounded-lg p-6 shadow-sm">
              <span className="text-4xl">{item.icon}</span>
              <p className="font-heebo text-lg text-foreground pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Solution = () => {
  return (
    <section className="py-16 md:py-20" dir="rtl">
      <div className="container max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-heebo font-bold text-3xl md:text-4xl text-foreground mb-4">
             הפתרון: חוויה בלשית-מדעית במטבח שלכם 🎯
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             כל עלילה משלבת תעלומה מרתקת עם ניסוי מדעי מעשי.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              color: "text-purple-500",
              bgColor: "bg-purple-500/10",
              title: "פיתוח חשיבה ביקורתית",
              description: "ניתוח ראיות, זיהוי דפוסים והסקת מסקנות.",
              benefits: ["חשיבה לוגית", "פתרון בעיות", "קבלת החלטות"]
            },
            {
              icon: Beaker,
              color: "text-blue-500",
              bgColor: "bg-blue-500/10",
              title: "למידה מדעית מעשית",
              description: "ניסויים פשוטים ובטוחים שמלמדים עקרונות מדעיים.",
              benefits: ["חקר מדעי", "התנסות מעשית", "הבנת תופעות"]
            },
            {
              icon: Heart,
              color: "text-red-500",
              bgColor: "bg-red-500/10",
              title: "זמן איכות משפחתי",
              description: "פעילות משפחתית שמחברת את כל המשפחה.",
              benefits: ["חוויה משותפת", "שיחה ודיון", "זיכרונות משפחתיים"]
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all">
                <div className={`${benefit.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="font-heebo font-bold text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-heebo text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
