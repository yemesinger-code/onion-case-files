import { Bell, Send, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // הוספנו את זה

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const { t } = useTranslation(); // הפעלת התרגום

  // פונקציה שמטפלת בהצגת הודעת ההצלחה (מבלי למנוע את השליחה ל-Netlify)
  const handleSubmit = (e: React.FormEvent) => {
    // אנחנו נותנים לטופס להישלח רגיל, ורק מציגים ויזואלית שהצליח
    // הערה: בשיטת Netlify הרגילה הדף יתרענן, אבל זה בסדר לשלב הזה
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <header className="text-center mb-12 animate-fade-up">
          <div className="inline-block p-3 bg-secondary/20 rounded-full mb-4">
            <span className="text-4xl">🕵️‍♀️</span>
          </div>
          <h1 className="font-heebo font-black text-4xl md:text-5xl text-foreground mb-4">
            {t('contact.title')}
          </h1>
          <p className="font-heebo text-lg text-muted-foreground max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Newsletter Section */}
          <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-folder">
            <div className="flex items-center justify-center w-14 h-14 bg-secondary/20 rounded-full mb-4">
              <Bell className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="font-heebo font-bold text-xl text-foreground mb-4">{t('contact.newsletter_title')}</h2>
            
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
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded-lg transition-colors"
              >
                {t('contact.send_btn')}
              </button>
            </form>
          </section>

          {/* Contact Form Section */}
          <section className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-folder">
            <div className="flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full mb-4">
              <Send className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-heebo font-bold text-xl text-foreground mb-4">{t('contact.form_title')}</h2>
            
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-heebo font-bold text-xl text-foreground">{t('contact.success_title')}</h3>
                <p>{t('contact.success_msg')}</p>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name_placeholder')}
                    className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email_placeholder')}
                    className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <textarea
                  name="message" 
                  rows={4}
                  placeholder={t('contact.msg_placeholder')}
                  className="w-full px-4 py-2 border-2 border-border rounded-lg bg-background resize-none focus:ring-2 focus:ring-primary"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t('contact.send_btn')}
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;