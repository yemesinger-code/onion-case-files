import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Mail, Shield, AlertCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('יש לאשר קבלת דיוור שיווקי');
      return;
    }
    // כאן תהיה האינטגרציה למערכת הדיוור
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* עמודה 1: אודות */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧅</span>
              <span className="font-heebo font-black text-white text-xl">הבלש בצלי</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              הופכים את המטבח לזירת פשע מדעי. פעילות העשרה איכותית לילדים.
            </p>
          </div>

          {/* עמודה 2: ניווט */}
          <div>
            <h4 className="font-bold text-white mb-4">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">מטה הסוכנות</Link></li>
              <li><Link to="/shop" className="hover:text-orange-400 transition-colors">ארכיון התיקים</Link></li>
              <li><Link to="/equipment" className="hover:text-orange-400 transition-colors">חדר הציוד</Link></li>
              <li><Link to="/parents" className="hover:text-orange-400 transition-colors">פינת ההורים</Link></li>
            </ul>
          </div>

          {/* עמודה 3: משפטי */}
          <div>
            <h4 className="font-bold text-white mb-4">מידע ומשפטי</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">צור קשר</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">תקנון האתר</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">מדיניות פרטיות</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">מדיניות ביטולים</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">הצהרת נגישות</Link></li>
            </ul>
          </div>

          {/* עמודה 4: הרשמה לניוזלטר */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400" />
              עדכונים מהשטח
            </h4>
            
            {status === 'success' ? (
              <div className="bg-green-500/10 text-green-400 p-3 rounded text-sm flex items-center gap-2">
                <Check className="w-4 h-4" /> נרשמת בהצלחה!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  required
                  placeholder="המייל שלכם..."
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded text-sm focus:outline-none focus:border-orange-500 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                />
                
                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    id="marketing-consent"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 accent-orange-500"
                  />
                  <label htmlFor="marketing-consent" className="text-[11px] text-gray-400 leading-tight cursor-pointer">
                    אני מאשר/ת קבלת עדכונים שיווקיים למייל.
                  </label>
                </div>

                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold py-2 rounded transition-colors">
                  הרשמה
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 הבלש בצלי. כל הזכויות שמורות.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
             <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> רכישה מאובטחת</span>
             <span className="flex items-center gap-1"><AlertCircle className="w-3 h-3" /> נגישות AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
