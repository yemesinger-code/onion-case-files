import Navbar from '@/components/Navbar';
import { Mail, Send, Bell, ShieldCheck, Lock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      {/* תיקון: pt-40 מונע חיתוך כותרת */}
      <main className="flex-1 pt-40 pb-12 md:pb-20">
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
              כאן יוצרים קשר עם מטה הסוכנות ונרשמים לקבלת עדכונים.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Newsletter Section */}
            <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-folder">
              <div className="flex items-center justify-center w-14 h-14 bg-secondary/20 rounded-full mb-4">
                <Bell className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-4">קבלת עדכונים מהשטח</h2>
             <form 
  name="newsletter" 
  method="POST" 
  data-netlify="true" 
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="newsletter" />
  
  <input
    type="email"
    name="email"
    placeholder="your@email.com"
    className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary"
    required
  />
                <button 
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  צרפו אותי לרשימה
                </button>
              </form>
            </section>

            {/* Contact Form Section */}
            <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-folder">
              <div className="flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heebo font-bold text-xl text-foreground mb-4">פנייה למטה</h2>
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heebo font-bold text-xl text-foreground">המסר התקבל!</h3>
                </div>
              ) : (
                <form 
  name="contact" 
  method="POST" 
  data-netlify="true" 
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />

  {/* הוספתי שדות שם ומייל - בלעדיהם לא תדע למי לחזור */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      name="name"
      placeholder="שם מלא"
      className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="אימייל לחזרה"
      className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary"
      required
    />
  </div>

  <textarea
    name="message" 
    rows={4}
    placeholder="...כתבו את ההודעה שלכם"
    className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background resize-none focus:ring-2 focus:ring-primary"
    required
  />

  <button
    type="submit"
    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
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
      {/* Footer הוסר */}
    </div>
  );
};

export default Contact;
