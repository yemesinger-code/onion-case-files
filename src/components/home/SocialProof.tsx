import { useState, useEffect } from 'react';
import { Users, FileCheck, Star, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    {
      icon: Users,
      value: "5,247",
      label: "בלשים פעילים",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: FileCheck,
      value: "247",
      label: "תיקים נפתרו",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Star,
      value: "4.9",
      label: "דירוג ממוצע",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: TrendingUp,
      value: "94%",
      label: "שיעור הצלחה",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const testimonials = [
    {
      name: "שרה כרוב",
      role: "בלשית מתחילה",
      text: "התיקים של בלש בצלי הם התעלומות הכי מעניינות ומאתגרות שפתרתי! כל תיק הוא הרפתקה חדשה.",
      rating: 5,
      avatar: "🥬"
    },
    {
      name: "דני עגבנייה",
      role: "בלש ותיק",
      text: "12 שנות ניסיון בחקירות, ועדיין בלש בצלי מצליח להפתיע אותי עם תעלומות מקוריות ומורכבות.",
      rating: 5,
      avatar: "🍅"
    },
    {
      name: "לילי חסה",
      role: "חוקרת מומחית",
      text: "הקהילה פה מדהימה! תמיד יש למי לפנות לעזרה, והתחרויות השבועיות ממכרות.",
      rating: 5,
      avatar: "🥬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background" dir="rtl">
      <div className="container max-w-6xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-desk"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${stat.bgColor} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className="font-heebo font-black text-3xl md:text-4xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-heebo text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2 className="font-heebo font-bold text-3xl md:text-4xl text-foreground mb-4">
              מה הבלשים אומרים
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-card border-2 border-secondary/20 rounded-xl p-8 md:p-12 shadow-desk relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-secondary/10 font-serif">❝</div>
              
              <div className="relative z-10">
                {/* Avatar & Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonials[activeTestimonial].avatar}</div>
                  <div className="text-right">
                    <h4 className="font-heebo font-bold text-lg text-foreground">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-end">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-heebo text-lg text-foreground leading-relaxed italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-secondary w-8' 
                      : 'bg-secondary/30 hover:bg-secondary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="text-2xl">🏆</div>
            <span className="font-heebo text-sm">פרס הבלש המצטיין 2024</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="text-2xl">✅</div>
            <span className="font-heebo text-sm">מאומת ע״י גילד הבלשים</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="text-2xl">🎯</div>
            <span className="font-heebo text-sm">100% תעלומות אמיתיות</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
