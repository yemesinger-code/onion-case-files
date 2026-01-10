import { useState } from 'react';
import Navbar from '@/components/Navbar'; 
import { Check, Star, Brain, Shield, Users, Zap, Trophy, Heart, Download, FileText, ChevronLeft, Beaker } from 'lucide-react';

const ParentsLandingPage = () => {
  // פונקציה טכנית לגלילה חלקה לאזור הרכישה
  const scrollToProduct = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white font-heebo" dir="rtl">

      {/* תוספת טכנית: תפריט עליון */}
      <Navbar />

      {/* Hero Section */}
      <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
               ✨ מומלץ על ידי הורים ואנשי חינוך
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
               תנו לילדים שלכם להתאהב בחשיבה 🧅🔍
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
               עלילה בלשית מרתקת + ניסוי מדעי מעשי = חוויית למידה בלתי נשכחת במטבח הביתי שלכם
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-600" />
                בטוח לגמרי לילדים
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                דירוג 4.9/5
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-600" />
                למעלה מ-1,000 משפחות
              </div>
            </div>
            
            {/* כפתור מחובר לפונקציית הגלילה */}
            <div className="flex flex-col items-center gap-4">
                <button onClick={scrollToProduct} className="group bg-gradient-to-l from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-orange-500/40 transition-all transform hover:scale-105 flex items-center gap-2">
                  אני רוצה להוריד את התעלומה
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </button>
            </div>

          </div>
        </div>
      </section>

      {/* The Problem - מחובר ל-id="about" לצורך ניווט */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
             האם זה נשמע מוכר? 🤔
          </h2>
           
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "📱", text: "הילדים דבוקים למסכים ללא תוכן משמעותי" },
              { icon: "😴", text: "משעמם להם במהרה ממשחקים חוזרים" },
              { icon: "🔬", text: "אתם מחפשים דרך מהנה ללמד מדע בבית" },
              { icon: "🧠", text: "רוצים לפתח חשיבה לוגית ויצירתית" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-orange-200 transition-colors">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <p className="font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
               הפתרון: חוויה בלשית-מדעית במטבח שלכם 🎯
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               כל עלילה משלבת תעלומה מרתקת עם ניסוי מדעי מעשי שהילדים יכולים לבצע בבית
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                color: "text-purple-500",
                bgColor: "bg-purple-500/10",
                title: "פיתוח חשיבה ביקורתית",
                description: "ניתוח ראיות, זיהוי דפוסים והסקת מסקנות - מיומנויות לכל החיים",
                benefits: ["חשיבה לוגית", "פתרון בעיות", "קבלת החלטות"]
              },
              {
                icon: Beaker,
                color: "text-blue-500",
                bgColor: "bg-blue-500/10",
                title: "למידה מדעית מעשית",
                description: "ניסויים פשוטים ובטוחים שמלמדים עקרונות מדעיים בצורה מהנה",
                benefits: ["חקר מדעי", "התנסות מעשית", "הבנת תופעות"]
              },
              {
                icon: Heart,
                color: "text-red-500",
                bgColor: "bg-red-500/10",
                title: "זמן איכות משפחתי",
                description: "פעילות משפחתית שמחברת את כל המשפחה סביב למידה והנאה",
                benefits: ["חוויה משותפת", "שיחה ודיון", "זיכרונות משפחתיים"]
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Inside - מחובר ל-id="how-it-works" לצורך ניווט */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
               מה כלול בכל עלילה? 📄
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               מסמך PDF מקיף עם כל מה שצריך
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
              <span className="text-5xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                 העלילה הבלשית
              </h3>
              <ul className="space-y-3">
                {[
                  'תעלומה מרתקת לפתרון',
                  'דמויות מעניינות ומצחיקות',
                  'רמזים וחידות לאורך הדרך',
                  'פתרון מפתיע ומלמד'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <span className="text-5xl mb-4 block">🔬</span>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                 הניסוי המדעי
              </h3>
              <ul className="space-y-3">
                {[
                  'הוראות צעד אחר צעד מפורטות',
                  'רשימת חומרים פשוטים מהמטבח',
                  'הסברים מדעיים מותאמים לילדים',
                  'שאלות לחשיבה ודיון'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
               פורמט נוח ונגיש
            </h3>
            <p className="text-gray-600">
               קובץ PDF איכותי שניתן להדפיס או לקרוא ממסך. 
               כל ההוראות ברורות ומלוות באיורים צבעוניים.
            </p>
          </div>
        </div>
      </section>

      {/* Age Suitability */}
      <section className="py-16 md:py-24 bg-amber-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
             מתאים לכל גיל 👶➡️👦➡️👧
          </h2>
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                age: "6-8",
                emoji: "🌱",
                title: "גילאי הגן - כיתה ב'",
                features: ["תעלומות פשוטות", "ניסויים בסיסיים", "בליווי הורים"],
                color: "border-green-500/40 bg-green-500/5"
              },
              {
                age: "9-12",
                emoji: "🌳",
                title: "כיתות ג'-ו'",
                features: ["אתגרים מורכבים", "ביצוע עצמאי יותר", "הרחבת ידע מדעי"],
                color: "border-blue-500/40 bg-blue-500/5"
              },
              {
                age: "13+",
                emoji: "🎓",
                title: "בני נוער ומבוגרים",
                features: ["תעלומות מתקדמות", "הרחבת ידע מדעי", "ניסויים מורכבים"],
                color: "border-purple-500/40 bg-purple-500/5"
              }
            ].map((level, index) => (
              <div key={index} className={`rounded-2xl p-6 border-2 text-center ${level.color}`}>
                <span className="text-4xl block mb-2">{level.emoji}</span>
                <span className="text-3xl font-black text-gray-800 block mb-1">{level.age}</span>
                <h3 className="font-bold text-gray-700 mb-4">{level.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - מחובר ל-id="reviews" לצורך ניווט */}
      <section id="reviews" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-4">
             מה הורים אומרים 💬
          </h2>
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "רונית כהן",
                role: "אמא לשני ילדים (7 ו-10)",
                text: "הילדים שלי ממש התרגשו מהעלילה והניסוי! עשינו את זה ביחד במטבח ולמדנו המון. זמן איכות משפחתי מושלם.",
                rating: 5
              },
              {
                name: "דני לוי",
                role: "מורה לכיתה ד'",
                text: "משתמש בעלילות בכיתה כפעילות העשרה. התלמידים מתלהבים והניסויים ממש עובדים! מומלץ בחום.",
                rating: 5
              },
              {
                name: "שרה אברהם",
                role: "אמא לבן בן 12",
                text: "הבן שלי התקשה בקריאה ולא אהב מדעים. העלילות הבלשיות שינו את זה לגמרי - עכשיו הוא מבקש עוד!",
                rating: 5
              },
              {
                name: "יוסי מזרחי",
                role: "אבא לשלושה ילדים",
                text: "פעילות משפחתית מושלמת לשישי אחה״צ! הניסויים פשוטים ובטוחים, והעלילות ממש מרתקות. שווה כל שקל!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                     👤
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - מחובר ל-id="products" לצורך ניווט */}
      <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
               השקעה קטנה בעתיד גדול 💎
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
               פחות מעלות של שוקולד, יותר מחוויית למידה שתישאר לכל החיים
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                 🌟 מבצע השקה
              </div>

              <div className="text-center mb-8">
                <p className="text-xl font-bold mb-1">עלילה בלשית אחת</p>
                <p className="text-orange-200">כולל ניסוי מדעי מלא</p>
                 
                <div className="mt-6">
                  <span className="text-5xl md:text-6xl font-black">₪9.90</span>
                  <p className="text-sm text-orange-200 mt-2">
                     תשלום חד-פעמי • הורדה מיידית
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 mb-8">
                <p className="font-bold mb-3 text-center">
                   מה תקבלו:
                </p>
                <ul className="space-y-2">
                  {[
                    'קובץ PDF איכותי ומעוצב',
                    'עלילה בלשית מלאה ומרתקת',
                    'ניסוי מדעי עם הוראות מפורטות',
                    'רשימת חומרים מהמטבח',
                    'הסברים מדעיים מותאמים לגיל',
                    'הורדה מיידית לאחר התשלום'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => alert('כאן יפתח חלון התשלום')}
                className="w-full py-4 px-6 rounded-lg bg-white hover:bg-gray-100 text-primary font-heebo font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2 group"
              >
                <Download className="w-5 h-5" />
                 רכשו עכשיו והורידו מיד
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>

              <p className="text-center text-sm text-orange-200 mt-4">
                 💳 תשלום מאובטח • קבלה מיידית למייל
              </p>
            </div>

            {/* Money Back Guarantee */}
            <div className="mt-8 bg-white/10 rounded-2xl p-6 text-center border border-white/20">
              <span className="text-4xl block mb-3">🛡️</span>
              <h3 className="font-bold text-lg mb-2">
                 ערבות שביעות רצון מלאה
              </h3>
              <p className="text-orange-100 text-sm">
                 לא מרוצים? נחזיר לכם כל אגורה תוך 7 ימים, ללא שאלות. 
                 אנחנו בטוחים שהילדים שלכם יתאהבו!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - מחובר ל-id="contact" לצורך ניווט */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
             שאלות נפוצות ❓
          </h2>
           
          <div className="space-y-4">
            {[
              {
                q: "האם זה באמת מתאים לילד שלי?",
                a: "בהחלט! העלילות מחולקות לרמות קושי שונות, מגיל 6 ועד למבוגרים. כל עלילה מותאמת לגיל הילד עם הוראות ברורות והסברים מתאימים."
              },
              {
                q: "כמה זמן לוקח לבצע את הניסוי?",
                a: "ניסוי ממוצע לוקח בין 20-45 דקות, תלוי ברמת הקושי ובגיל הילד. כל ההוראות ברורות וצעד אחר צעד."
              },
              {
                q: "האם צריך חיבור לאינטרנט?",
                a: "רק להורדת הקובץ בפעם הראשונה. אחרי שהורדתם את ה-PDF, אתם יכולים להשתמש בו בכל מקום וזמן - להדפיס או לקרוא ממסך, ללא צורך באינטרנט."
              },
              {
                q: "איזה חומרים צריך לניסוי?",
                a: "כל הניסויים משתמשים בחומרים פשוטים שיש כמעט בכל מטבח - מים, מלח, סוכר, חומץ, שמן וכו'. רשימה מפורטת מופיעה בכל עלילה."
              },
              {
                q: "האם זה בטוח לילדים?",
                a: "כל הניסויים תוכננו במיוחד לביצוע בטוח במטבח ביתי עם ילדים. אנו ממליצים על ליווי מבוגר, במיוחד בגילאים הצעירים. כל הוראות הבטיחות מפורטות במסמך."
              },
              {
                q: "מה אעשה אם יש בעיה טכנית בהורדה?",
                a: "אנחנו כאן לעזור! צרו איתנו קשר דרך המייל support@detective-onion.com ונפתור כל בעיה תוך 24 שעות."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-bold text-gray-800 hover:bg-gray-100">
                  {faq.q}
                  <ChevronLeft className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-90" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-amber-100 to-orange-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-5xl block mb-6">🧅🔬</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
               תנו לילדים שלכם את המתנה של חשיבה וגילוי
            </h2>
            <p className="text-lg text-gray-600 mb-8">
               הצטרפו למעלה מ-1,000 משפחות שגילו שלמידה יכולה להיות מהנה, משמעותית ומרתקת
            </p>
             
            <div className="flex flex-col items-center gap-4">
              <button onClick={scrollToProduct} className="group bg-gradient-to-l from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-orange-500/40 transition-all transform hover:scale-105">
                 רכשו עכשיו ב-₪9.90
                <ChevronLeft className="inline-block w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
               💾 הורדה מיידית • 🛡️ החזר כספי מלא תוך 7 ימים
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentsLandingPage;
