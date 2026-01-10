import { useState } from 'react';
import { Check, Star, Brain, Shield, Users, Zap, Trophy, Heart, Download, FileText, ChevronLeft, Beaker, Lightbulb, Puzzle } from 'lucide-react';

const Index = () => {
  // פונקציה לגלילה חלקה לאזור הרכישה
  const scrollToProduct = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 font-heebo" dir="rtl">

      {/* 1. Hero Section - id="top" */}
      <section id="top" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy size={16} />
              <span> הפעילות שכבשה מעל 1,000 מטבחים בישראל</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              להפוך את המטבח
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-amber-500">
                למעבדת חשיבה לילדים
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              במקום עוד שעה מול המסך: תנו לילדים שלכם תעלומה בלשית שפותרים באמצעות ניסוי מדעי אמיתי (וטעים!) במטבח.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={scrollToProduct}
                className="group bg-gradient-to-l from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transform transition hover:scale-105 flex items-center gap-2"
              >
                אני רוצה להוריד את התעלומה
                <ChevronLeft className="transition-transform group-hover:-translate-x-1" />
              </button>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Shield size={14} />
                רכישה מאובטחת • הורדה מיידית
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain Points - "האם זה מוכר לכם?" */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            האתגר של ההורים היום 🤔
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: "📱", text: "הילדים 'זומבים' מול המסכים ללא תוכן מעשיר" },
              { icon: "😴", text: "משעמם להם מהר ממשחקים רגילים וצעצועים" },
              { icon: "🤯", text: "אתם מחפשים פעילות שתפעיל להם את הראש" },
              { icon: "🧪", text: "רוצים להכניס מדע וסקרנות הביתה בדרך כיפית" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW MARKETING SECTION - Educational Value - id="about" */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">השיטה הייחודית</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 text-gray-900">
              למה דווקא "בילוש במטבח"?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              זה לא רק משחק. זו שיטת לימוד שמשלבת שלושה אלמנטים קריטיים להתפתחות הילד, 
              שעובדים יחד כדי ליצור חוויה בלתי נשכחת.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                <Brain className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">מפסיביות לאקטיביות</h3>
              <p className="text-gray-600">
                במקום לצפות ביוטיוב, הילד הופך לגיבור הסיפור. הוא חייב לקרוא, לחשוב, למדוד ולערבב כדי להתקדם. זה בונה תחושת מסוגלות אדירה ("אני פתרתי את זה!").
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-500">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <Beaker className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">מדע שמרגיש כמו קסם</h3>
              <p className="text-gray-600">
                אנחנו לא מלמדים נוסחאות משעממות. אנחנו מראים איך כרוב משנה צבע ואיך שמרים מתנפחים. הילדים לומדים כימיה ופיזיקה דרך הידיים והעיניים.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-pink-500">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-5">
                <Heart className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">זמן איכות אמיתי</h3>
              <p className="text-gray-600">
                בלי מסכים שמפרידים ביניכם. אתם והילדים עובדים כצוות חקירה משותף. הצחוקים, הלכלוך (הבריא) וההצלחה המשותפת בונים זיכרונות לכל החיים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What's Inside - id="how-it-works" */}
      <section id="how-it-works" className="py-16 bg-gradient-to-l from-orange-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                מה מחכה לכם בתוך הקובץ? 📁
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                מיד לאחר הרכישה תקבלו למייל קובץ PDF מעוצב וצבעוני, מוכן להדפסה (או לקריאה בטאבלט), הכולל:
              </p>
              
              <ul className="space-y-4">
                {[
                  "סיפור מתח בלשי מלא (מותאם גיל)",
                  "דפי משימות ורמזים לגזירה",
                  "מתכון מדעי עם הסברים פשוטים",
                  "הסבר 'איך זה עובד?' להורים סקרנים",
                  "תעודת 'בלש מצטיין' בסיום"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual representation of the product */}
            <div className="relative flex justify-center">
              <div className="w-64 h-80 bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg shadow-2xl transform rotate-3 absolute"></div>
              <div className="w-64 h-80 bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg shadow-2xl transform -rotate-3 absolute"></div>
              <div className="relative w-64 h-80 bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 border-2 border-orange-200">
                <FileText size={48} className="text-orange-500 mb-4" />
                <p className="font-bold text-gray-800 text-center">תיק חקירה #001</p>
                <p className="text-sm text-gray-500 text-center mt-1">תעלומת העוגייה הנעלמת</p>
                <div className="mt-4 w-full border-t border-dashed border-gray-300 pt-4">
                  <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                </div>
                <span className="mt-4 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                  PDF להורדה
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Age Suitability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
            מותאם בדיוק לגיל הילד שלכם
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { age: "6-8", title: "בלשים צעירים", desc: "דגש על חוויה, צבעים וניסויים ויזואליים פשוטים.", color: "border-green-400 bg-green-50" },
              { age: "9-12", title: "חוקרים מתקדמים", desc: "עלילות מורכבות יותר, חשיבה לוגית והרחבת ידע.", color: "border-blue-400 bg-blue-50" },
              { age: "13+", title: "נוער ומבוגרים", desc: "אתגר מחשבתי אמיתי וניסויים ברמת 'מאסטר-שף'.", color: "border-purple-400 bg-purple-50" }
            ].map((level, i) => (
              <div key={i} className={`rounded-2xl p-6 border-2 ${level.color} text-center`}>
                <p className="text-3xl font-black text-gray-800">{level.age}</p>
                <p className="font-bold text-lg mt-2 text-gray-700">{level.title}</p>
                <p className="text-gray-600 mt-2 text-sm">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials - id="reviews" */}
      <section id="reviews" className="py-16 bg-white/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
            מה הורים מספרים בקבוצות הוואטסאפ 💬
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "מיכל א.", text: "הבן שלי (ששונא לקרוא) ישב וקרא את כל התיק בשקיקה! הניסוי עם הכרוב היה להיט.", stars: 5 },
              { name: "רועי ג.", text: "חיפשתי פעילות ליום גשום וזה הציל אותנו. שעתיים של שקט ותעסוקה איכותית.", stars: 5 },
              { name: "דנית ס.", text: "הערך המוסף הוא אדיר. הם גם נהנים וגם לומדים מדע בלי לשים לב.", stars: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.stars)].map((_, idx) => (
                    <Star key={idx} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-bold text-gray-800">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Product & Pricing - id="products" */}
      <section id="products" className="py-20 bg-gradient-to-b from-orange-500 to-amber-600">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-gray-800">
            
            <span className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              מבצע השקה
            </span>

            <h2 className="text-3xl md:text-4xl font-black mb-2">
              התעלומה הראשונה מחכה לכם!
            </h2>
            <p className="text-gray-500 mb-6">
              פחות ממחיר של ארטיק, הרבה יותר ערך מחוג שלם.
            </p>

            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl text-gray-400 line-through">₪29.00</span>
              <span className="text-5xl md:text-6xl font-black text-orange-600">₪9.90</span>
            </div>

            <button 
              onClick={() => alert('כאן יפתח חלון התשלום')} 
              className="w-full md:w-2/3 py-5 bg-gradient-to-l from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white text-xl font-bold rounded-xl shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-3"
            >
              <Download size={24} />
              אני רוצה להוריד את הקובץ
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              המחיר לזמן מוגבל • קבלה מיידית למייל • 100% אחריות להחזר כספי
            </p>

            {/* Guarantee Box */}
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-3">
              <Shield className="text-green-600" size={24} />
              <span className="text-green-800 font-medium">
                לא אהבתם? כספכם יוחזר במלואו, בלי שאלות.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ & Footer - id="contact" */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">שאלות נפוצות</h2>
          <div className="space-y-4">
            <details className="bg-gray-800 p-4 rounded-lg cursor-pointer group">
              <summary className="font-bold flex justify-between items-center">
                האם צריך ציוד מיוחד לניסויים?
                <ChevronLeft className="transition-transform group-open:-rotate-90" />
              </summary>
              <p className="text-gray-300 mt-3">ממש לא! כל הניסויים משתמשים בחומרים שיש בכל בית (חומץ, סודה לשתייה, שמן, צבעי מאכל וכו').</p>
            </details>
            <details className="bg-gray-800 p-4 rounded-lg cursor-pointer group">
              <summary className="font-bold flex justify-between items-center">
                לאיזה גילאים זה מתאים?
                <ChevronLeft className="transition-transform group-open:-rotate-90" />
              </summary>
              <p className="text-gray-300 mt-3">יש לנו רמות שונות. התעלומה הנוכחית מתאימה במיוחד לגילאי 6-10 (עם עזרת הורים) או 10-12 באופן עצמאי.</p>
            </details>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-700 text-gray-400 text-sm">
            © 2024 הבלש בצלי. כל הזכויות שמורות. <br />
            נבנה באהבה למען דור העתיד.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
