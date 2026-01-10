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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"}`} dir="rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* לוגו - הבלש בצלי */}
          <button 
            onClick={() => scrollToSection('top')} 
            className="flex items-center gap-2 group"
          >
            <span className="text-3xl filter drop-shadow-md transition-transform group-hover:scale-110">🧅</span>
            <div className="flex flex-col items-start">
              <span className={`font-black font-heebo text-xl leading-none ${isScrolled ? "text-gray-800" : "text-gray-900"}`}>
                הבלש בצלי
              </span>
              <span className="text-[10px] font-cousine text-secondary uppercase tracking-wider">
                Detective Onion
              </span>
            </div>
          </button>

          {/* תפריט דסקטופ - מוסתר במובייל */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('top')} className="nav-link font-medium hover:text-secondary transition-colors">
              מטה הסוכנות
            </button>
            <button onClick={() => scrollToSection('products')} className="nav-link font-medium hover:text-secondary transition-colors">
              ארכיון התיקים
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link font-medium hover:text-secondary transition-colors">
              חדר הציוד
            </button>
            <button onClick={() => scrollToSection('reviews')} className="nav-link font-medium hover:text-secondary transition-colors">
              פינת ההורים
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link font-medium hover:text-secondary transition-colors">
              קו מאובטח
            </button>
            
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-secondary/30 transition-all transform hover:scale-105"
            >
              התחילו לחקור
            </button>
          </div>

          {/* כפתור תפריט למובייל */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* תפריט מובייל נפתח */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-fade-in">
          <button onClick={() => scrollToSection('top')} className="text-right font-medium p-2 hover:bg-gray-50 rounded min-h-[44px]">מטה הסוכנות</button>
          <button onClick={() => scrollToSection('products')} className="text-right font-medium p-2 hover:bg-gray-50 rounded min-h-[44px]">ארכיון התיקים</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-right font-medium p-2 hover:bg-gray-50 rounded min-h-[44px]">חדר הציוד</button>
          <button onClick={() => scrollToSection('reviews')} className="text-right font-medium p-2 hover:bg-gray-50 rounded min-h-[44px]">פינת ההורים</button>
          <button onClick={() => scrollToSection('products')} className="bg-secondary text-white p-3 rounded-lg font-bold text-center mt-2 min-h-[44px]">
            התחילו לחקור
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
