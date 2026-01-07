import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="border-t-2 border-border bg-card/50 mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="Onion">🧅</span>
            <span className="font-heebo font-bold text-lg text-primary">
              {language === 'en' ? 'Detective Onion' : 'הבלש בצלי'}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            {language === 'en' 
              ? '© 2024 Detective Onion Agency. All mysteries reserved.'
              : '© 2024 סוכנות הבלש בצלי. כל התעלומות שמורות.'
            }
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-cousine uppercase tracking-wider text-stamp opacity-70">
              {language === 'en' ? 'CASE FILE #2024' : 'תיק מס׳ 2024'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
