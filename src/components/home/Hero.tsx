import { ArrowLeft, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-orange-50" dir="rtl">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
      
      <div className="container relative z-10 max-w-6xl text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-1.5 shadow-sm mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-bold text-orange-800 tracking-wide">
            סוכנות הבילוש פתוחה להרשמה
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-heebo font-black text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-6 tracking-tight leading-[1.1]">
          הפכו את המטבח<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
            לזירת פשע מדעי
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          הצטרפו לבלש בצלי בפתרון תעלומות אמיתיות באמצעות ניסויים בבישול.
          <br className="hidden md:block" />
          פעילות משפחתית שמשלבת סיפור, מדע ואוכל טעים.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all shadow-xl shadow-gray-900/20 flex items-center justify-center gap-2"
          >
            התחילו את החקירה הראשונה
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-orange-200 hover:bg-orange-50 transition-all"
          >
            איך זה עובד?
          </button>
        </div>

        {/* Social Proof Mini */}
        <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-500">
          <div className="flex -space-x-3 space-x-reverse">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                <span className="text-xs">🕵️</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-gray-900 font-bold">4.9/5</span>
            <span>מתוך 240+ הורים מרוצים</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
