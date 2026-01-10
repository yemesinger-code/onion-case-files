import { ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileStickyCTA = () => {
  const { pathname } = useLocation();
  
  // לא מציג את הכפתור בדפים מסוימים
  const hiddenPages = ['/shop', '/contact', '/terms', '/privacy'];
  if (hiddenPages.includes(pathname)) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent pb-safe">
      <Link to="/shop">
        <button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3 text-lg transition-all active:scale-[0.98]"
          aria-label="לחץ לרכישת תיקי חקירה"
        >
          <ShoppingBag className="w-5 h-5" />
          לארכיון התיקים
        </button>
      </Link>
    </div>
  );
};

export default MobileStickyCTA;
