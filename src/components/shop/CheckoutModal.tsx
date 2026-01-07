import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CheckoutModal({ open, onOpenChange }: CheckoutModalProps) {
  const { t, isRTL } = useLanguage();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after close animation
    setTimeout(() => {
      setSuccess(false);
      setProcessing(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-terminal border-terminal-foreground/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-cousine text-terminal-foreground tracking-wider text-center">
            {t.checkout.title}
          </DialogTitle>
          <p className="font-cousine text-terminal-foreground/70 text-sm text-center mt-2">
            {t.checkout.subtitle}
          </p>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <CheckCircle2 className="w-16 h-16 mx-auto text-accent" />
            <p className="font-cousine text-terminal-foreground text-lg">
              {t.checkout.success}
            </p>
            <p className="font-cousine text-terminal-foreground/70 text-sm">
              {t.checkout.successMsg}
            </p>
            <Button 
              variant="terminal" 
              onClick={handleClose}
              className="mt-4"
            >
              {t.checkout.close}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="card-number" className="font-cousine text-terminal-foreground text-xs uppercase tracking-wider">
                {t.checkout.cardNumber}
              </Label>
              <Input
                id="card-number"
                type="text"
                placeholder="•••• •••• •••• ••••"
                className="bg-terminal border-terminal-foreground/30 text-terminal-foreground font-cousine placeholder:text-terminal-foreground/40"
                maxLength={19}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry" className="font-cousine text-terminal-foreground text-xs uppercase tracking-wider">
                  {t.checkout.expiry}
                </Label>
                <Input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  className="bg-terminal border-terminal-foreground/30 text-terminal-foreground font-cousine placeholder:text-terminal-foreground/40"
                  maxLength={5}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="font-cousine text-terminal-foreground text-xs uppercase tracking-wider">
                  {t.checkout.cvv}
                </Label>
                <Input
                  id="cvv"
                  type="text"
                  placeholder="•••"
                  className="bg-terminal border-terminal-foreground/30 text-terminal-foreground font-cousine placeholder:text-terminal-foreground/40"
                  maxLength={4}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="font-cousine text-terminal-foreground text-xs uppercase tracking-wider">
                {t.checkout.name}
              </Label>
              <Input
                id="name"
                type="text"
                className="bg-terminal border-terminal-foreground/30 text-terminal-foreground font-cousine placeholder:text-terminal-foreground/40"
                required
              />
            </div>

            <Button 
              type="submit" 
              variant="terminal" 
              className="w-full mt-6"
              disabled={processing}
            >
              {processing ? (
                <>
                  <span className="animate-pulse">{t.checkout.processing}</span>
                </>
              ) : (
                t.checkout.complete
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
