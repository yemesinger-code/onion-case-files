import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CaseCardProps {
  caseNumber: number;
  title: string;
  suspect: string;
  scene: string;
  rotation?: number;
  delay?: number;
}

export function CaseCard({ caseNumber, title, suspect, scene, rotation = 0, delay = 0 }: CaseCardProps) {
  const { t } = useLanguage();

  return (
    <article
      className={cn(
        "relative bg-card border-2 border-border rounded-lg p-6 shadow-folder paper-texture",
        "hover:shadow-lifted hover:-translate-y-2 transition-all duration-300",
        "opacity-0 animate-fade-in"
      )}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Folder tab */}
      <div className="absolute -top-3 left-6 bg-card border-2 border-border border-b-0 rounded-t-md px-4 py-1">
        <span className="font-cousine text-xs text-muted-foreground">
          {t.cases.caseNumber}{caseNumber.toString().padStart(3, '0')}
        </span>
      </div>

      {/* Confidential stamp */}
      <div 
        className="absolute top-4 right-4 stamp text-xs shadow-stamp"
        style={{ '--stamp-rotation': `${-8 + Math.random() * 6}deg` } as React.CSSProperties}
        aria-label={t.common.confidential}
      >
        {t.common.confidential}
      </div>

      <div className="mt-4 space-y-4">
        <h3 className="font-heebo font-bold text-xl text-foreground pr-20">
          {title}
        </h3>

        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <span className="font-cousine text-muted-foreground uppercase tracking-wide">
              {t.cases.suspect}:
            </span>
            <span className="font-medium">{suspect}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-cousine text-muted-foreground uppercase tracking-wide">
              {t.cases.scene}:
            </span>
            <span className="font-medium">{scene}</span>
          </p>
        </div>

        <Button variant="detective" size="sm" className="w-full">
          {t.cases.readReport}
        </Button>
      </div>
    </article>
  );
}
