import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react"; // הוספנו את אייקון הגלובוס
import { useTranslation } from "react-i18next"; // הוספנו את הספרייה שמטפלת בשפות

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation(); // הפעלת מנגנון השפה

  // פונקציה להחלפת שפה
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
    // שינוי כיוון הדף (מימין לשמאל או להיפך)
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const isActive = (path: string) => location.pathname === path;

  const getLinkClass = (path: string) => {
    const baseClass = "nav-link font-medium transition-colors";
    const activeClass = "text-secondary font-bold";
    const inactiveClass = "text-foreground hover:text-secondary";
    
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-background/80 backdrop-blur-sm py-4"}`} dir={i18n.language === 'he' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* לוגו */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl filter drop-shadow-md transition-transform group-hover:scale-110">🧅</span>
            <div className="flex flex-col items-start">
              <span className="font-black font-heebo text-xl leading-none text-foreground">
                הבלש בצלי
              </span>
            </div>
          </Link>

          {/* תפריט דסקטופ */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={getLinkClass('/')}>
              מטה הסוכנות
            </Link>
            <Link to="/shop" className={getLinkClass('/shop')}>
              ארכיון התיקים
            </Link>
            <Link to="/equipment" className={getLinkClass('/equipment')}>
              חדר הציוד
            </Link>
            <Link to="/parents" className={getLinkClass('/parents')}>
              פינת ההורים
            </Link>
            <Link to="/contact" className={getLinkClass('/contact')}>
              קו מאובטח
            </Link>
            
            {/* כפתור החלפת שפה - חדש! */}
            <button 
              onClick={toggleLanguage}
              className="p-2 hover:bg-secondary/10 rounded-full transition-colors"
              title="Change Language / החלף שפה"
            >
              <Globe size={20} className="text-foreground" />
              <span className="sr-only">Switch Language</span>
            </button>

            <Link to="/shop">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-secondary/30 transition-all transform hover:scale-105">
                התחילו לחקור
              </button>
            </Link>
          </div>

          {/* כפתור תפריט למובייל */}
          <div className="md:hidden flex items-center gap-4">
             {/* כפתור שפה גם במובייל */}
            <button 
              onClick={toggleLanguage}
              className="p-2 hover:bg-secondary/10 rounded-full transition-colors"
            >
              <Globe size={20} className="text-foreground" />
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* תפריט מובייל נפתח */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link to="/" onClick={() => setIsOpen(false)} className={`text-right p-2 rounded ${isActive('/') ? 'bg-secondary/10 text-secondary font-bold' : 'text-foreground'}`}>
            מטה הסוכנות
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)} className={`text-right p-2 rounded ${isActive('/shop') ? 'bg-secondary/10 text-secondary font-bold' : 'text-foreground'}`}>
            ארכיון התיקים
          </Link>
          <Link to="/equipment" onClick={() => setIsOpen(false)} className={`text-right p-2 rounded ${isActive('/equipment') ? 'bg-secondary/10 text-secondary font-bold' : 'text-foreground'}`}>
            חדר הציוד
          </Link>
          <Link to="/parents" onClick={() => setIsOpen(false)} className={`text-right p-2 rounded ${isActive('/parents') ? 'bg-secondary/10 text-secondary font-bold' : 'text-foreground'}`}>
            פינת ההורים
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-right p-2 rounded ${isActive('/contact') ? 'bg-secondary/10 text-secondary font-bold' : 'text-foreground'}`}>
            קו מאובטח
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-secondary text-secondary-foreground p-3 rounded-lg font-bold text-center mt-2 shadow-md">
              התחילו לחקור
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;