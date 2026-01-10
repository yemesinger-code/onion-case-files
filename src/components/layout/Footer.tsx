import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';

export function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="border-t-2 border-border bg-card/50 mt-auto" dir="rtl">
      <div className="container py-8">
        <div className="flex flex-col gap-6">
          
          {/* Top Row - Logo & Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="Onion">🧅</span>
              <span className="font-heebo font-bold text-lg text-primary">
                {language === 'en' ? 'Detective Onion' : 'הבלש בצלי'}
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                דף הבית
              </Link>
              <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                ארכיון התיקים
              </Link>
              <Link to="/equipment" className="text-muted-foreground hover:text-primary transition-colors">
                חדר הציוד
              </Link>
              <Link to="/parents" className="text-muted-foreground hover:text-primary transition-colors">
                פינת ההורים
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                קו מאובטח
              </Link>
            </nav>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Bottom Row - Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              {language === 'en' 
                ? '© 2024 Detective Onion Agency. All mysteries reserved.'
                : '© 2024 סוכנות הבלש בצלי. כל התעלומות שמורות.'
              }
            </p>

            {/* Legal Links */}
            <nav className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link to="/terms" className="hover:text-primary transition-colors">
                תקנון ותנאי שימוש
              </Link>
              <span className="text-border">|</span>
              <Link to="/terms#privacy" className="hover:text-primary transition-colors">
                מדיניות פרטיות
              </Link>
              <span className="text-border">|</span>
              <Link to="/contact" className="hover:text-primary transition-colors">
                נגישות
              </Link>
            </nav>

            {/* Case File Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-cousine uppercase tracking-wider text-stamp opacity-70">
                {language === 'en' ? 'CASE FILE #2024' : 'תיק מס׳ 2024'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
