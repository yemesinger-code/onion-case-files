import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // בדיקה האם הגולש גלל למטה כדי לשנות את עיצוב התפריט
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // סגור תפריט במובייל
    const element = document.getElementById(id);
    if (element) {
      // גלילה חלקה לאזור הרצוי
      const offset = 80; // פיצוי על הגובה של התפריט הקבוע
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"}`} dir="rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* לוגו - לחיצה עליו תחזיר תמיד לראש הדף (Hero) */}
          <button 
            onClick={() => scrollToSection('top')} 
            className="flex items-center gap-2 group"
          >
            <span className="text-3xl filter drop-shadow-md transition-transform group-hover:scale-110">🧅</span>
            <div className="flex flex-col items-start">
              <span className={`font-black font-heebo text-xl leading-none ${isScrolled ? "text-gray-800" : "text-gray-900"}`}>
                הבלש בצלי
              </span>
              {/* השורה באנגלית הוסרה מכאן */}
            </div>
          </button>

          {/* תפריט דסקטופ */}
          <div className="hidden md:flex items-center gap-8">
            {/* תיקון: מטה הסוכנות מוביל כעת ל-about ולא ל-top */}
            <button onClick={() => scrollToSection('about')} className="nav-link font-medium text-gray-700 hover:text-orange-600 transition-colors">
              מטה הסוכנות
            </button>
            <button onClick={() => scrollToSection('products')} className="nav-link font-medium text-gray-700 hover:text-orange-600 transition-colors">
              ארכיון התיקים
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link font-medium text-gray-700 hover:text-orange-600 transition-colors">
              חדר הציוד
            </button>
            <button onClick={() => scrollToSection('reviews')} className="nav-link font-medium text-gray-700 hover:text-orange-600 transition-colors">
              פינת ההורים
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link font-medium text-gray-700 hover:text-orange-600 transition-colors">
              קו מאובטח
            </button>
            
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105"
            >
              התחילו לחקור
            </button>
          </div>

          {/* כפתור תפריט למובייל */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* תפריט מובייל נפתח */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection('about')} className="text-right font-medium p-2 hover:bg-gray-50 rounded text-gray-700">מטה הסוכנות</button>
          <button onClick={() => scrollToSection('products')} className="text-right font-medium p-2 hover:bg-gray-50 rounded text-gray-700">ארכיון התיקים</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-right font-medium p-2 hover:bg-gray-50 rounded text-gray-700">חדר הציוד</button>
          <button onClick={() => scrollToSection('reviews')} className="text-right font-medium p-2 hover:bg-gray-50 rounded text-gray-700">פינת ההורים</button>
          <button onClick={() => scrollToSection('products')} className="bg-orange-600 text-white p-3 rounded-lg font-bold text-center mt-2 shadow-md">
            התחילו לחקור
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
