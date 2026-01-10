import Navbar from '@/components/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShoppingCart, Ruler, Shield, BadgeCheck } from 'lucide-react';

const Equipment = () => {
  const items = [
    {
      id: "E01",
      title: "חלוק מדען צעיר",
      desc: "חלוק לבן מקצועי מבד איכותי, עם לוגו רקום של 'הבלש בצלי'. כולל כיסים לראיות.",
      price: 49.90,
      icon: "🥼",
      badge: "הכי נמכר"
    },
    {
      id: "E02",
      title: "משקפי מגן תקניים",
      desc: "להגנה על העיניים בזמן ניסויים. רצועה מתכווננת, מתאים לכל הגדלים.",
      price: 29.90,
      icon: "🥽",
      badge: "בטיחות"
    },
    {
      id: "E03",
      title: "ערכת מבחנות + מעמד",
      desc: "3 מבחנות פלסטיק עמידות (לא שבירות) עם פקקים ומעמד עץ ייעודי.",
      price: 39.90,
      icon: "🧪",
      badge: null
    },
    {
      id: "E04",
      title: "כף מדידה רב-תכליתית",
      desc: "כף מדידה מדויקת לניסויים כימיים במטבח. צד אחד לנוזלים, צד אחד לאבקות.",
      price: 15.90,
      icon: "🥄",
      badge: null
    },
    {
      id: "E05",
      title: "תעודת סוכן אישית",
      desc: "כרטיס קשיח עם תמונה ושם הילד/ה, שרוך לצוואר ומקום לחתימת טביעת אצבע.",
      price: 19.90,
      icon: "🪪",
      badge: "אישי"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-6xl px-4">
          
          {/* Hero Section */}
          <header className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <Ruler className="w-12 h-12 text-primary mx-auto" />
            </div>
            <div>
              <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
                חדר הציוד והאספקה 🛠️
              </h1>
              <p className="font-heebo text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                כל הציוד שבלש מקצועי צריך.
                <br />
                שידרגו את החוויה עם ציוד אמיתי שהופך את המטבח למעבדה.
              </p>
            </div>
          </header>

          {/* Equipment Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {items.map((item) => (
              <article 
                key={item.id} 
                className="bg-card border-2 border-border rounded-2xl shadow-folder overflow-hidden flex flex-col transition-transform hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Image Area */}
                <div className="bg-muted aspect-square flex items-center justify-center relative">
                  <span className="text-7xl md:text-8xl">
                    {item.icon}
                  </span>
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h2 className="font-heebo font-bold text-xl text-foreground mb-2">{item.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-heebo font-black text-2xl text-primary">₪{item.price.toFixed(2)}</span>
                    <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      הוסף לסל
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Shipping Info */}
          <aside className="bg-muted/50 border border-border rounded-xl p-6 max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h3 className="font-heebo font-bold text-foreground text-lg mb-2">מידע על משלוחים (ציוד פיזי)</h3>
              <p className="text-muted-foreground text-sm">
                משלוח עד הבית (3-5 ימי עסקים): 35 ₪ | איסוף עצמי מנקודות חלוקה: 15 ₪
                <br />
                חינם בקנייה מעל 299 ₪.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <Shield className="w-6 h-6" />
              <BadgeCheck className="w-6 h-6" />
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Equipment;
