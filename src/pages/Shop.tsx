import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckoutModal } from '@/components/shop/CheckoutModal';
import { AlertTriangle, Check, Shield } from 'lucide-react';

const Shop = () => {
  const { t, language } = useLanguage();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <main className="flex-1 py-12 md:py-16 pb-32 md:pb-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
            {t.shop.title}
          </h1>
          <p className="font-heebo text-xl text-muted-foreground">
            {t.shop.subtitle}
          </p>
        </header>

        {/* Product Card */}
        <div className="bg-card border-2 border-border rounded-2xl shadow-folder overflow-hidden paper-texture">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="relative aspect-square bg-muted flex items-center justify-center p-8">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center space-y-4">
                  <div className="text-6xl md:text-8xl">🎒</div>
                  <p className="font-cousine text-xs text-muted-foreground uppercase tracking-wider">
                    {language === 'en' ? 'Detective Kit' : 'ערכת בלש'}
                  </p>
                </div>
              </div>
              {/* TOP SECRET stamp */}
              <div 
                className="absolute top-6 right-6 stamp text-xs shadow-stamp"
                style={{ '--stamp-rotation': '-15deg' } as React.CSSProperties}
              >
                {t.common.topSecret}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 flex flex-col">
              <h2 className="font-heebo font-bold text-2xl md:text-3xl text-foreground mb-3">
                {t.shop.productName}
              </h2>
              
              <p className="text-muted-foreground mb-6">
                {t.shop.productDesc}
              </p>

              <p className="font-heebo font-black text-3xl text-secondary mb-6">
                {t.shop.price}
              </p>

              {/* What's included */}
              <div className="mb-6">
                <h3 className="font-cousine text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  {t.shop.includes}
                </h3>
                <ul className="space-y-2">
                  {t.shop.includesList.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parental Gate Warning */}
              <div 
                className="bg-destructive/10 border-2 border-destructive/30 rounded-lg p-4 mb-6"
                role="alert"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heebo font-bold text-foreground">
                      {t.shop.parentalGate.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t.shop.parentalGate.message}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button 
                  variant="detective" 
                  size="xl" 
                  className="w-full"
                  onClick={() => setCheckoutOpen(true)}
                >
                  <Shield className="w-5 h-5" />
                  {t.shop.buyButton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t-2 border-border md:hidden z-40">
        <Button 
          variant="detective" 
          size="xl" 
          className="w-full"
          onClick={() => setCheckoutOpen(true)}
        >
          <Shield className="w-5 h-5" />
          {t.shop.buyButton} - {t.shop.price}
        </Button>
      </div>

      <CheckoutModal open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </main>
  );
};

export default Shop;
