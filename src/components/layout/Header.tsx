import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/cases', label: t.nav.cases },
    { path: '/shop', label: t.nav.shop },
    { path: '/parents', label: t.nav.parents },
    { path: '/contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 focus-ring rounded-md"
          aria-label={language === 'en' ? 'Detective Onion Home' : 'הבלש בצלי - דף הבית'}
        >
          <div className="relative">
            <span className="text-2xl" role="img" aria-label="Onion">🧅</span>
            <span className="absolute -top-1 -right-1 text-xs" role="img" aria-label="Magnifying glass">🔍</span>
          </div>
          <span className="font-heebo font-bold text-xl text-primary hidden sm:inline">
            {language === 'en' ? 'Detective Onion' : 'הבלש בצלי'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-md font-medium transition-colors focus-ring",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Hebrew' : 'החלף לאנגלית'}
            className="focus-ring"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">{language === 'en' ? 'עברית' : 'English'}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden focus-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background animate-fade-in"
          aria-label="Mobile navigation"
        >
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md font-medium transition-colors focus-ring",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
