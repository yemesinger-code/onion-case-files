const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-orange-50" dir="rtl">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
      
      <div className="container relative z-10 max-w-6xl text-center px-4">
        
        <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-1.5 shadow-sm mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-bold text-orange-800 tracking-wide">
            סוכנות הבילוש פתוחה להרשמה
          </span>
        </div>

        <h1 className="font-heebo font-black text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-6 tracking-tight leading-[1.1]">
          הפכו את המטבח<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
            לזירת פשע מדעי
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          הצטרפו לבלש בצלי בפתרון תעלומות אמיתיות באמצעות ניסויים בבישול.
        </p>

        {/* הכפתור הוסר מכאן כפי שביקשת */}
      </div>
    </section>
  );
};

export default Hero;
