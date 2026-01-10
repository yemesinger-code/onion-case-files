import { ArrowLeft, Package, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedProduct = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50" dir="rtl">
      <div className="container max-w-6xl px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-bold text-amber-800">המוצר שלנו</span>
          </div>
          <h2 className="font-heebo font-black text-4xl md:text-5xl text-gray-900 mb-4">
            ערכת הבלש המתחיל
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            כל מה שצריך כדי להתחיל את המסע הראשון בעולם הבילוש הקולינרי
          </p>
        </div>

        {/* Product Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Product Image */}
            <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 p-8 flex items-center justify-center min-h-[300px]">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold rotate-3">
                מבצע!
              </div>
              {/* Placeholder for product image */}
              <div className="w-64 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-amber-300 flex items-center justify-center">
                <div className="text-center">
                  <Package className="w-16 h-16 text-amber-400 mx-auto mb-2" />
                  <span className="text-amber-600 text-sm">תמונת מוצר</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
                <span className="text-sm text-gray-500 mr-2">(127 ביקורות)</span>
              </div>

              <h3 className="font-heebo font-bold text-2xl text-gray-900 mb-3">
                ערכת "התעלומה הראשונה"
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                ערכה מושלמת לגילאי 6-12 הכוללת 3 תעלומות מדעיות, כרטיסי רמזים, 
                תג בלש אישי, ומדריך הורים מפורט. כל הניסויים עם מרכיבים מהמטבח!
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  '3 תעלומות מדעיות מלאות',
                  'כרטיסי רמזים וראיות',
                  'תג בלש אישי עם שם הילד',
                  'מדריך להורים + הרחבות דיגיטליות'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-black text-gray-900">₪89</span>
                <span className="text-lg text-gray-400 line-through">₪129</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold">
                  חסכו 31%
                </span>
              </div>

              <Button 
                size="lg"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6 text-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
                onClick={() => window.location.href = '/shop'}
              >
                הזמינו עכשיו
                <ArrowLeft className="w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                🚚 משלוח חינם בהזמנה מעל ₪150
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
