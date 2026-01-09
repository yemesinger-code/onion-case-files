import { useState } from 'react';
import { Quote, Beaker, Search, ArrowLeft, ScrollText } from 'lucide-react';

const AboutDetectiveOnion = () => {
  const [activeTab, setActiveTab] = useState('onion');

  const heroStats = [
    { label: "תיקים פתוחים", value: "3", icon: <ScrollText className="w-4 h-4" /> },
    { label: "ניסויים שבוצעו", value: "142", icon: <Beaker className="w-4 h-4" /> },
    { label: "רמת חריפות", value: "מקסימלית", icon: <Search className="w-4 h-4" /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50/30" dir="rtl">
      <div className="container max-w-6xl px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-3 border border-orange-200">
            🕵️‍♂️ סוכנות הבילוש במטבח
          </span>
          <h2 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
            מי מסתתר מאחורי הזכוכית המגדלת?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            הכירו את הצוות שהופך כל ארוחה לתעלומה וכל מתכון לניסוי מדעי מרתק.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['onion', 'team', 'mission'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-secondary text-secondary-foreground shadow-lg scale-105' 
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {tab === 'onion' && 'הבלש בצלי'}
              {tab === 'team' && 'הצוות האנושי'}
              {tab === 'mission' && 'המשימה שלכם'}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden min-h-[500px] transition-all duration-500">
          
          {/* TAB 1: Detective Onion */}
          {activeTab === 'onion' && (
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-secondary font-cousine font-bold">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"/>
                  תיק אישי #001
                </div>
                <h3 className="text-3xl font-bold text-foreground">הבלש בצלי</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  בניגוד לירקות אחרים שבוכים כשחותכים אותם, בצלי גורם לתעלומות לבכות. 
                  הוא לא סתם בלש – הוא <strong>מדען</strong>. הוא יודע למה השמרים תפחו, לאן נעלם הסוכר בתה, 
                  ואיך להפוך כרוב סגול לנוזל שמשנה צבעים.
                </p>
                
                <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20 relative">
                  <Quote className="absolute top-4 left-4 text-secondary/30 w-8 h-8" />
                  <p className="font-medium text-foreground italic relative z-10">
                    "עבורי, המטבח הוא לא מקום לבישול. הוא זירת פשע מלאה בראיות כימיות."
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  {heroStats.map((stat, idx) => (
                    <div key={idx} className="flex-1 bg-muted p-3 rounded-xl text-center border border-border">
                      <div className="flex justify-center text-secondary mb-1">{stat.icon}</div>
                      <div className="font-bold text-foreground text-lg">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors" />
                <div className="text-center">
                  <span className="text-9xl filter drop-shadow-2xl">🧅</span>
                  <div className="mt-4 bg-card/80 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                    סוכן מיוחד: בצלי
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: The Team */}
          {activeTab === 'team' && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-center mb-10 text-foreground">השותפים (שיודעים לדבר עברית)</h3>
              <div className="grid md:grid-cols-3 gap-6">
                
                <div className="group hover:bg-pink-50 p-6 rounded-2xl border border-dashed border-border hover:border-pink-300 transition-all cursor-default">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👵</div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">סבתא שולה</h4>
                  <p className="text-sm text-muted-foreground">
                    מנהלת הארכיון. זוכרת הכל, אופה את העוגיות הכי טובות (וחשודות), ויודעת סודות של כל השכונה.
                  </p>
                </div>

                <div className="group hover:bg-amber-50 p-6 rounded-2xl border border-dashed border-border hover:border-amber-300 transition-all cursor-default">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👨‍🍳</div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">ברוך האופה</h4>
                  <p className="text-sm text-muted-foreground">
                    הכימאי של המטבח. מדויק, קפדן, ולא מרשה לפתוח את התנור באמצע. מבין את המדע שמאחורי האוכל.
                  </p>
                </div>

                <div className="group hover:bg-blue-50 p-6 rounded-2xl border border-dashed border-border hover:border-blue-300 transition-all cursor-default">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚛</div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">דוד בני</h4>
                  <p className="text-sm text-muted-foreground">
                    לוגיסטיקה ואספקה. תמיד משיג את המרכיבים הכי נדירים ומוזרים מהשוק, אל תשאלו איך.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Mission */}
          {activeTab === 'mission' && (
            <div className="p-8 md:p-12 text-center animate-fade-in flex flex-col items-center justify-center h-full">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-black text-foreground mb-6">
                  האם אתם מוכנים לקבל את התג?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  באתר זה לא רק קוראים סיפורים. כאן מורידים <strong>תיקי חקירה אמיתיים</strong>.
                  בכל שבוע נפרסם תעלומה חדשה שניתן לפתור רק באמצעות ניסוי מדעי במטבח שלכם.
                  <br className="hidden md:block" />
                  הפתרון מסתתר בתוך הכימיה של האוכל!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-secondary/30 transition-all"
                  >
                    הורד את תיק החקירה הראשון
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutDetectiveOnion;
