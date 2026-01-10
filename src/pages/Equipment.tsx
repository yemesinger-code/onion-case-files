import Navbar from '@/components/Navbar';
import { ShoppingCart, Ruler, Shield, BadgeCheck, LucideIcon } from 'lucide-react';
import { getPhysicalProducts } from '@/data/products';

const Equipment = () => {
  const items = getPhysicalProducts();

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      {/* תיקון: pt-40 מונע חיתוך כותרת */}
      <main className="flex-1 pt-40 pb-12 md:pb-20">
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
              </p>
            </div>
          </header>

          {/* Equipment Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {items.map((item) => {
              const IconComponent = item.icon as LucideIcon;
              const IconRender = typeof item.icon === 'string' 
                ? <span className="text-7xl md:text-8xl">{item.icon}</span>
                : <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-primary" />;

              return (
                <article 
                  key={item.id} 
                  className="bg-card border-2 border-border rounded-2xl shadow-folder overflow-hidden flex flex-col transition-transform hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Image Area */}
                  <div className="bg-muted aspect-square flex items-center justify-center relative">
                    <div className="flex items-center justify-center">
                      {IconRender}
                    </div>
                    {item.metadata?.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                        {item.metadata.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h2 className="font-heebo font-bold text-xl text-foreground mb-2">{item.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {item.description}
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
              );
            })}
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

      {/* Footer הוסר */}
    </div>
  );
};

export default Equipment;
