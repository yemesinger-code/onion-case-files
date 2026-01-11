import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation(); // t = פונקציית התרגום

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
    // שינוי כיוון הדף
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

  // תיקון סדר הפריטים: שומרים על סדר לוגי קבוע
  // המערכת תהפוך אותם ויזואלית ב-RTL, אבל הסדר בזיכרון נשאר נכון
  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/shop', label: t('nav.archive') },
    { path: '/equipment', label: t('nav.equipment') },
    { path: '/parents', label: t('nav.parents') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-background/80 backdrop-blur-sm py-4"}`} dir={i18n.language === 'he' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* לוגו */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl filter drop-shadow-md transition-transform group-hover:scale-110">🧅</span>
            <div className="flex flex-col items-start">
              <span className="font-black font-heebo text-xl leading-none text-foreground">
                {t('logo')}
              </span>
            </div>
          </Link>

          {/* תפריט דסקטופ */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className={getLinkClass(item.path)}>
                {item.label}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="p-2 hover:bg-secondary/10 rounded-full transition-colors flex items-center gap-2"
              title="Switch Language"
            >
              <Globe size={20} className="text-foreground" />
              <span className="text-xs font-bold">{i18n.language === 'en' ? 'HE' : 'EN'}</span>
            </button>

            <Link to="/shop">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-secondary/30 transition-all transform hover:scale-105">
                {t('nav.cta')}
              </button>
            </Link>
          </div>

          {/* מובייל */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLanguage} className="p-2">
               <Globe size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* תפריט נפתח מובייל */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`text-start p-2 rounded ${isActive(item.path) ? 'bg-secondary/10 text-secondary font-bold' : 'text-foreground'}`}>
              {item.label}
            </Link>
          ))}
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-secondary text-secondary-foreground p-3 rounded-lg font-bold text-center mt-2 shadow-md">
              {t('nav.cta')}
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;