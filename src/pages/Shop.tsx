import Navbar from '@/components/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShoppingBag, Clock, Star, ShieldAlert, Download } from 'lucide-react';
import { getDigitalProducts } from '@/data/products';

const Shop = () => {
  const cases = getDigitalProducts();

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-6xl px-4">
          
          {/* Hero Section */}
          <header className="text-center mb-12 md:mb-16">
            <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
              ארכיון התיקים 📂
            </h1>
            <p className="font-heebo text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              כאן תמצאו את כל תיקי החקירה הזמינים להורדה מיידית.
              <br />
              בחרו תעלומה, הורידו את הקובץ והפכו את המטבח למעבדה.
            </p>
          </header>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {cases.map((item) => (
              <article 
                key={item.id} 
                className="bg-card border-2 border-border rounded-2xl shadow-folder overflow-hidden flex flex-col transition-transform hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Product Image Placeholder */}
                <div className={`${item.imageColor} aspect-[4/3] flex items-center justify-center relative`}>
                  <span className="text-7xl md:text-8xl">
                    {item.icon}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/70 text-white text-xs font-cousine px-2 py-1 rounded">
                    תיק #{item.id}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <header className="mb-2">
                    <h2 className="font-heebo font-bold text-xl md:text-2xl text-foreground">
                      {item.title}
                    </h2>
                  </header>

                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* Meta Data */}
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    {item.metadata?.difficulty && (
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" /> {item.metadata.difficulty}
                      </span>
                    )}
                    {item.metadata?.time && (
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.metadata.time}
                      </span>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-muted-foreground text-sm line-through">₪29.00</span>
                      <span className="font-heebo font-black text-2xl text-primary">₪{item.price.toFixed(2)}</span>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors">
                      <Download className="w-4 h-4" />
                      רכישה והורדה
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Legal Disclaimer Box - כפי שביקשת */}
          <aside className="bg-muted/50 border border-border rounded-xl p-6 flex items-start gap-4 max-w-3xl mx-auto">
            <ShieldAlert className="w-8 h-8 text-muted-foreground flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heebo font-bold text-foreground mb-1">מדיניות רכישת מוצר דיגיטלי</h3>
              <p className="text-muted-foreground text-sm">
                שימו לב: רכישת מוצר דיגיטלי באתר זה הינה סופית. 
                בהתאם לתקנות הגנת הצרכן, לא ניתן לבטל עסקה בגין רכישת מידע דיגיטלי או טובין הניתנים לשעתוק 
                לאחר קבלת הגישה אליהם (שליחת הקובץ למייל).
              </p>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
