import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { DeskItem } from '@/components/home/DeskItem';
import { CaseCard } from '@/components/home/CaseCard';
import { Button } from '@/components/ui/button';
import { cases } from '@/data/cases';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Index = () => {
  const { t, language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  const latestCases = cases.slice(0, 3);
  const rotations = [-1.5, 1, -0.5];

  return (
    <main className="flex-1">
      {/* Hero Section - Detective's Desk */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--gradient-desk)' }}
        aria-labelledby="hero-heading"
      >
        {/* Warm spotlight effect */}
        <div className="absolute inset-0 spotlight pointer-events-none" />
        
        {/* Desk surface */}
        <div className="relative z-10 container py-16 text-center">
          <h1 
            id="hero-heading"
            className="font-heebo font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 drop-shadow-lg"
          >
            {t.home.welcome}
          </h1>
          <p className="font-heebo text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            {t.home.subtitle}
          </p>

          {/* Interactive desk items */}
          <div className="flex flex-wrap items-end justify-center gap-8 md:gap-12 mt-8">
            <DeskItem 
              emoji="☕" 
              label="Coffee Cup"
              tooltip={t.home.deskItems.coffee}
              className="animate-float"
              delay={0}
            />
            <DeskItem 
              emoji="🔍" 
              label="Magnifying Glass"
              tooltip={t.home.deskItems.magnifier}
              className="animate-float"
              delay={200}
            />
            <DeskItem 
              emoji="📁" 
              label="Case File"
              tooltip={t.home.deskItems.caseFile}
              className="animate-float"
              delay={400}
            />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Latest Cases Section */}
      <section 
        className="py-16 md:py-24"
        aria-labelledby="cases-heading"
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 
              id="cases-heading"
              className="font-heebo font-bold text-3xl md:text-4xl text-foreground mb-4"
            >
              {t.home.latestCases}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestCases.map((caseItem, index) => (
              <CaseCard
                key={caseItem.id}
                caseNumber={caseItem.id}
                title={language === 'en' ? caseItem.titleEn : caseItem.titleHe}
                suspect={language === 'en' ? caseItem.suspectEn : caseItem.suspectHe}
                scene={language === 'en' ? caseItem.sceneEn : caseItem.sceneHe}
                rotation={rotations[index]}
                delay={index * 150}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              variant="folder" 
              size="lg"
              className="group"
            >
              <Link to="/cases">
                {t.home.viewAllCases}
                <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
