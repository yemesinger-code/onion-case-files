import { useLanguage } from '@/i18n/LanguageContext';
import { CaseCard } from '@/components/home/CaseCard';
import { cases } from '@/data/cases';

const Cases = () => {
  const { t, language } = useLanguage();

  // Generate random rotations for each card
  const getRotation = (index: number) => {
    const rotations = [-2, 1.5, -1, 2, -1.5, 0.5];
    return rotations[index % rotations.length];
  };

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <div 
            className="inline-block stamp text-sm mb-4"
            style={{ '--stamp-rotation': '-3deg' } as React.CSSProperties}
          >
            {t.common.classified}
          </div>
          <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
            {t.cases.title}
          </h1>
          <p className="font-heebo text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.cases.subtitle}
          </p>
        </header>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={caseItem.id}
              caseNumber={caseItem.id}
              title={language === 'en' ? caseItem.titleEn : caseItem.titleHe}
              suspect={language === 'en' ? caseItem.suspectEn : caseItem.suspectHe}
              scene={language === 'en' ? caseItem.sceneEn : caseItem.sceneHe}
              rotation={getRotation(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cases;
