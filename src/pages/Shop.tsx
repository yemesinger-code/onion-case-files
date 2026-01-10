import Navbar from '@/components/Navbar';
import { ShoppingBag, Clock, Star, ShieldAlert } from 'lucide-react';
import { getDigitalProducts } from '@/data/products';

const Shop = () => {
  const cases = getDigitalProducts();

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      {/* תיקון: pt-40 מונע חיתוך כותרת */}
      <main className="flex-1 pt-40 pb-12 md:pb-20">
        <div className="container max-w-6xl px-4">

          {/* Hero Section */}
          <header className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <ShoppingBag className="w-12 h-12 text-primary mx-auto" />
            </div>
            <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
              ארכיון התיקים 📂
            </h1>
            <p className="font-heebo text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              כאן תמצאו את כל תיקי החקירה הזמינים להורדה מיידית.
            </p>
          </header>

          {/* Cases Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {cases.map((item) => (
              <article 
                key={item.id}
                className="bg-card border-2 border-border rounded-2xl shadow-folder overflow-hidden flex flex-col transition-transform hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Image Area */}
                <div className={`${item.imageColor || 'bg-muted'} aspect-video flex items-center justify-center relative`}>
                  <span className="text-6xl md:text-7xl">
                    {item.icon}
                  </span>
                  <span className="absolute top-3 right-3 bg-foreground/80 text-background text-xs font-bold px-2 py-1 rounded">
                    תיק #{item.id}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <h2 className="font-heebo font-bold text-xl text-foreground mb-2">
                    {item.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                    {item.metadata?.difficulty && (
                      <span className="bg-muted px-2 py-1 rounded">
                        🎯 {item.metadata.difficulty}
                      </span>
                    )}
                    {item.metadata?.time && (
                      <span className="bg-muted px-2 py-1 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.metadata.time}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-muted-foreground line-through text-sm">₪29.00</span>
                      <span className="font-heebo font-black text-2xl text-primary">₪{item.price.toFixed(2)}</span>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                      רכישה והורדה
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <aside className="bg-muted/50 border border-border rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-muted-foreground shrink-0 mt-1" />
              <div>
                <h3 className="font-heebo font-bold text-foreground text-lg mb-2">מדיניות רכישת מוצר דיגיטלי</h3>
                <p className="text-muted-foreground text-sm">
                  שימו לב: רכישת מוצר דיגיטלי באתר זה הינה סופית. 
                  בהתאם לתקנות הגנת הצרכן, לא ניתן לבטל עסקה בגין רכישת מידע דיגיטלי או טובין הניתנים לשעתוק 
                  לאחר קבלת הגישה אליהם.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>
      {/* Footer הוסר */}
    </div>
  );
};

export default Shop;
