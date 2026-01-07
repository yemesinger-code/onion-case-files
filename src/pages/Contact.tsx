import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { EvidenceDropzone } from '@/components/contact/EvidenceDropzone';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container max-w-2xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div 
            className="inline-block stamp text-sm mb-4"
            style={{ '--stamp-rotation': '3deg' } as React.CSSProperties}
          >
            {t.common.confidential}
          </div>
          <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
            {t.contact.title}
          </h1>
          <p className="font-heebo text-xl text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </header>

        {sent ? (
          <div className="bg-card border-2 border-accent rounded-xl p-12 shadow-folder paper-texture text-center animate-fade-in">
            <CheckCircle2 className="w-20 h-20 mx-auto text-accent mb-6" />
            <h2 className="font-heebo font-bold text-2xl text-foreground mb-2">
              {t.contact.sent}
            </h2>
            <p className="text-muted-foreground">
              {t.contact.fileReceived}
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Evidence Dropzone */}
            <div>
              <Label className="font-cousine text-sm uppercase tracking-wider text-muted-foreground mb-3 block">
                {t.contact.subtitle}
              </Label>
              <EvidenceDropzone />
            </div>

            {/* Contact Form */}
            <form 
              onSubmit={handleSubmit} 
              className="bg-card border-2 border-border rounded-xl p-6 md:p-8 shadow-folder paper-texture space-y-6"
            >
              <div className="space-y-2">
                <Label 
                  htmlFor="name" 
                  className="font-cousine text-sm uppercase tracking-wider text-muted-foreground"
                >
                  {t.contact.name}
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="email"
                  className="font-cousine text-sm uppercase tracking-wider text-muted-foreground"
                >
                  {t.contact.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="message"
                  className="font-cousine text-sm uppercase tracking-wider text-muted-foreground"
                >
                  {t.contact.message}
                </Label>
                <Textarea
                  id="message"
                  className="bg-background border-border min-h-[150px] resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="detective" 
                size="lg" 
                className="w-full"
                disabled={sending}
              >
                {sending ? (
                  <>
                    <span className="animate-pulse">{t.contact.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.send}
                  </>
                )}
              </Button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default Contact;
