import { FileSearch, Zap, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: FileSearch,
      title: "בוחרים תעלומה",
      description: "היכנסו לחנות התיקים שלנו ובחרו את הסיפור שמתאים לגיל ולטעם של הבלשים הצעירים שלכם.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      number: 2,
      icon: Zap,
      title: "מורידים ומדפיסים",
      description: "מיד לאחר התשלום (רק 9.90₪!) תקבלו למייל את תיק החקירה המלא + מתכון סודי לביצוע.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      number: 3,
      icon: Trophy,
      title: "מבשלים ופותרים",
      description: "נכנסים למטבח, מכינים את המתכון ותוך כדי - מגלים את הרמזים ופותרים את התיק!",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card" dir="rtl">
      <div className="container max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heebo font-bold text-3xl md:text-4xl text-foreground mb-4">
            איך מתחילים לחקור?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            שלושה צעדים פשוטים בדרך לתעלומה הראשונה שלכם
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div 
            className="hidden lg:block absolute top-24 right-0 left-0 h-1 bg-gradient-to-l from-amber-500/20 via-purple-500/20 to-blue-500/20" 
            style={{ width: '80%', margin: '0 auto' }} 
          />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative bg-card border-2 border-border rounded-xl p-8 shadow-sm hover:shadow-desk transition-all duration-300 transform hover:-translate-y-2 h-full">
                    {/* Number Badge */}
                    <div className={`absolute -top-6 right-8 w-12 h-12 ${step.bgColor} ${step.borderColor} border-2 rounded-full flex items-center justify-center shadow-lg`}>
                      <span className={`font-heebo font-bold text-xl ${step.color}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`${step.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-heebo font-bold text-xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-heebo text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
