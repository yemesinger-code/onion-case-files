import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <main className="flex-1 flex items-center justify-center py-16">
      <div className="container max-w-lg text-center">
        <div 
          className="inline-block stamp text-lg mb-6 px-8 py-4"
          style={{ '--stamp-rotation': '-5deg' } as React.CSSProperties}
        >
          {language === 'en' ? 'CASE NOT FOUND' : 'התיק לא נמצא'}
        </div>

        <div className="text-8xl mb-6">🔍</div>

        <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
          404
        </h1>
        
        <p className="font-heebo text-xl text-muted-foreground mb-8">
          {language === 'en' 
            ? "This case file seems to have vanished from our archives..."
            : "נראה שתיק זה נעלם מהארכיון שלנו..."
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="detective" size="lg">
            <Link to="/">
              <Home className="w-5 h-5" />
              {language === 'en' ? 'Return to HQ' : 'חזור למטה'}
            </Link>
          </Button>
          <Button asChild variant="folder" size="lg">
            <Link to="/cases">
              <Search className="w-5 h-5" />
              {language === 'en' ? 'Search Archives' : 'חפש בארכיון'}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
