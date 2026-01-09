import { useState } from 'react';

const MeetTheCast = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

  const characters = [
    {
      name: "הבלש בצלי",
      role: "המוח שמאחורי החקירה",
      emoji: "🧅",
      personality: "חריף, ציני, ובעל יכולת להריח שקרים מקילומטרים. בוכה רק כשהוא מקלף את עצמו.",
      specialty: "זיהוי פלילי של רכיבי מזון",
      quote: "יש לי תחושת בטן, ואני מקווה שזה לא מהחומוס.",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/40"
    },
    {
      name: "סבתא שולה",
      role: "מנהלת הארכיון והעוגיות",
      emoji: "👵",
      personality: "חמה, אוהבת, אבל זוכרת כל פרט וכל רכילות בשכונה ב-50 שנה האחרונות.",
      specialty: "יודעת איפה כולם היו אתמול בערב",
      quote: "תאכל משהו, אתה נראה חיוור כמו קמח.",
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/40"
    },
    {
      name: "ברוך האופה",
      role: "מומחה לכימיה (ובצק)",
      emoji: "👨‍🍳",
      personality: "קפדן, מדויק, כועס כשפותחים את התנור באמצע. מבין את המדע שמאחורי האוכל.",
      specialty: "ניתוח תהליכים וריאקציות",
      quote: "בלי דיוק אין עוגה, ובלי עובדות אין קייס.",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/40"
    },
    {
      name: "דוד בני",
      role: "איש הלוגיסטיקה והשוק",
      emoji: "🚛",
      personality: "מסדר עניינים, מכיר את כל הספקים, משיג כל רכיב נדיר תוך שעה.",
      specialty: "השגת ראיות וחומרי גלם נדירים",
      quote: "אל תשאל מאיפה השגתי את הפטריות האלו.",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/40"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heebo font-bold text-3xl md:text-4xl text-foreground mb-4">
            הצוות שמאחורי הקלעים
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            בצלי אולי פותר את התעלומה, אבל הוא לא יכול לעשות את זה לבד
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {characters.map((character, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedCharacter(selectedCharacter === index ? null : index)}
              onMouseEnter={() => setSelectedCharacter(index)}
              onMouseLeave={() => setSelectedCharacter(null)}
            >
              <div className={`h-full relative bg-card border-2 ${character.borderColor} rounded-xl p-6 shadow-sm hover:shadow-desk transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 text-center">
                    {character.emoji}
                  </div>

                  <h3 className="font-heebo font-bold text-xl text-foreground text-center mb-1">
                    {character.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium text-center mb-4 font-cousine uppercase tracking-wide">
                    {character.role}
                  </p>

                  {/* Info Expansion */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    selectedCharacter === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 md:max-h-60 md:opacity-100'
                  }`}>
                    <div className="pt-4 border-t border-border/50 space-y-3">
                      <p className="font-heebo text-sm text-foreground/80 text-center">
                        {character.personality}
                      </p>
                      <div className="bg-background/60 rounded-lg p-2 mt-2">
                        <p className="font-heebo text-xs italic text-muted-foreground text-center">
                          "{character.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheCast;
