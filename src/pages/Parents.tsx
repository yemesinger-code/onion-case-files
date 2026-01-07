import { useLanguage } from '@/i18n/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Beaker, Monitor, Brain, ShieldCheck } from 'lucide-react';

const Parents = () => {
  const { t } = useLanguage();

  const benefitIcons = [Beaker, Monitor, Brain, ShieldCheck];

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
            {t.parents.title}
          </h1>
          <p className="font-heebo text-xl text-muted-foreground">
            {t.parents.subtitle}
          </p>
        </header>

        {/* Benefits Section */}
        <section className="mb-16" aria-labelledby="benefits-heading">
          <h2 
            id="benefits-heading"
            className="font-heebo font-bold text-2xl md:text-3xl text-foreground mb-8 text-center"
          >
            {t.parents.benefits.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.parents.benefits.items.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <article 
                  key={index}
                  className="bg-card border-2 border-border rounded-xl p-6 shadow-folder paper-texture hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heebo font-bold text-lg text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading">
          <h2 
            id="faq-heading"
            className="font-heebo font-bold text-2xl md:text-3xl text-foreground mb-8 text-center"
          >
            {t.parents.faq.title}
          </h2>

          <div className="bg-card border-2 border-border rounded-xl shadow-folder paper-texture overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {t.parents.faq.items.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="px-6 py-4 font-heebo font-medium text-foreground hover:no-underline hover:bg-muted/50">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Parents;
