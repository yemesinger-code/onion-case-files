import { Zap, ChevronLeft, Mail, Download } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-secondary/10 to-background" dir="rtl">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container max-w-4xl relative z-10">
        <div className="bg-card border-2 border-secondary/40 rounded-2xl shadow-2xl overflow-hidden text-center">
          
          <div className="p-8 md:p-16 space-y-8">
            
            <div className="inline-block p-4 bg-secondary/20 rounded-full mb-4">
               <span className="text-4xl">🕵️‍♂️</span>
            </div>

            <div>
              <h2 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
                למה לחכות למשלוח?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                הורידו את תיק החקירה הראשון עכשיו, הדפיסו בבית, ותוך 5 דקות הילדים כבר בלשים.
              </p>
            </div>

            {/* Price Anchor */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 max-w-lg mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg text-muted-foreground line-through">₪19.90</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">50% הנחה</span>
              </div>
              <div className="text-5xl font-black text-secondary mb-2">
                ₪9.90 <span className="text-xl font-normal text-muted-foreground">בלבד</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                מחיר של קפה, חוויה של אחר צהריים שלם
              </p>
            </div>

            {/* Action Button */}
            <div className="max-w-md mx-auto space-y-4">
              <button 
                className="w-full h-16 text-xl rounded-xl bg-gradient-to-l from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 shadow-xl shadow-secondary/20 text-primary-foreground font-bold transition-all flex items-center justify-center gap-3 group transform hover:scale-105"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-6 h-6" />
                אני רוצה להוריד את התיק!
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Mail className="w-4 h-4"/> נשלח למייל</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4"/> קובץ להורדה מיידית</span>
              </div>
            </div>

          </div>
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center mt-8">
          <p className="font-heebo text-lg text-muted-foreground italic">
            "כל תעלומה מתחילה בצעד אחד..." 
            <span className="text-secondary font-bold mr-2">- בלש בצלי</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
