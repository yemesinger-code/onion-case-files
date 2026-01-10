import Navbar from '@/components/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Mail, Send, Bell, ShieldCheck, Lock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('success');
    // כאן תהיה הלוגיקה לשליחת הטופס
  };

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          
          {/* Header */}
          <header className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Lock className="w-4 h-4" /> ערוץ מוצפן
            </span>
            <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
              קו מאובטח 🕵️‍♂️
            </h1>
            <p className="font-heebo text-lg text-muted-foreground max-w-xl mx-auto">
              כאן יוצרים קשר עם מטה הסוכנות ונרשמים לקבלת עדכונים סודיים.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* חלק א': רישום לעדכונים (ניוזלטר) */}
            <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-folder">
              <div className="flex items-center justify-center w-14 h-14 bg-secondary/20 rounded-full mb-4">
                <Bell className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-2">קבלת עדכונים מהשטח</h2>
              <p className="text-muted-foreground text-sm mb-6">
                היו הראשונים לדעת על תעלומות חדשות, מבצעים מיוחדים וטיפים לניסויים.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="newsletter-name" className="block text-sm font-medium text-foreground mb-1">שם מלא</label>
                  <input 
                    type="text" 
                    id="newsletter-name"
                    name="name"
                    className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-foreground mb-1">כתובת מייל</label>
                  <input 
                    type="email" 
                    id="newsletter-email"
                    name="email"
                    placeholder="your@email.com" 
                    className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                    required
                    maxLength={255}
                  />
                </div>
                
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1 rounded border-border" required />
                  <label htmlFor="consent" className="text-xs text-muted-foreground">
                    אני מאשר/ת קבלת עדכונים שיווקיים למייל.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  צרפו אותי לרשימה
                </button>
              </form>
            </section>

            {/* חלק ב': יצירת קשר עם המוכר */}
            <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-folder">
              <div className="flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-2">פנייה למטה (שירות לקוחות)</h2>
              <p className="text-muted-foreground text-sm mb-6">
                נתקלתם בבעיה בהורדה? יש לכם שאלה על אחד הניסויים? אנחנו כאן לעזור.
              </p>

              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heebo font-bold text-xl text-foreground">המסר התקבל!</h3>
                  <p className="text-muted-foreground">נחזור אליכם בהקדם האפשרי.</p>
                  <button 
                    onClick={() => setFormStatus('idle')} 
                    className="text-sm text-primary underline mt-4 hover:text-primary/80 transition-colors"
                  >
                    שלח הודעה נוספת
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-1">נושא הפנייה</label>
                    <select 
                      id="contact-subject"
                      name="subject"
                      className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      required
                    >
                      <option value="download">בעיה בהורדת קובץ</option>
                      <option value="product">שאלה על מוצר</option>
                      <option value="business">שיתוף פעולה עסקי</option>
                      <option value="other">אחר</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1">הודעה</label>
                    <textarea 
                      id="contact-message"
                      name="message"
                      rows={4} 
                      className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background resize-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      required
                      maxLength={1000}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    שליחת הודעה
                  </button>
                </form>
              )}
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
