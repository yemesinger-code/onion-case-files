import { useState } from 'react';
import Navbar from '@/components/Navbar'; 
import { Check, Star, Brain, Shield, Users, Trophy, Heart, Download, FileText, ChevronLeft, Beaker } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();

  // פונקציה טכנית לגלילה חלקה לאזור הרכישה
  const scrollToProduct = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- הגדרת המערכים עם התרגום ---
  const problems = [
    { icon: "📱", text: t('parents.problems.items.screens') },
    { icon: "😴", text: t('parents.problems.items.boredom') },
    { icon: "🔬", text: t('parents.problems.items.science') },
    { icon: "🧠", text: t('parents.problems.items.logic') }
  ];

  const benefits = [
    {
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      title: t('parents.solution.brain.title'),
      description: t('parents.solution.brain.desc'),
      benefits: t('parents.solution.brain.list', { returnObjects: true }) as string[]
    },
    {
      icon: Beaker,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      title: t('parents.solution.science.title'),
      description: t('parents.solution.science.desc'),
      benefits: t('parents.solution.science.list', { returnObjects: true }) as string[]
    },
    {
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      title: t('parents.solution.family.title'),
      description: t('parents.solution.family.desc'),
      benefits: t('parents.solution.family.list', { returnObjects: true }) as string[]
    }
  ];

  const ageGroups = [
    {
      emoji: "🌱",
      title: t('parents.ages.group1.title'),
      subtitle: t('parents.ages.group1.subtitle'),
      features: t('parents.ages.group1.features', { returnObjects: true }) as string[],
      color: "border-green-500/40 bg-green-500/5"
    },
    {
      emoji: "🌳",
      title: t('parents.ages.group2.title'),
      subtitle: t('parents.ages.group2.subtitle'),
      features: t('parents.ages.group2.features', { returnObjects: true }) as string[],
      color: "border-blue-500/40 bg-blue-500/5"
    },
    {
      emoji: "🎓",
      title: t('parents.ages.group3.title'),
      subtitle: t('parents.ages.group3.subtitle'),
      features: t('parents.ages.group3.features', { returnObjects: true }) as string[],
      color: "border-purple-500/40 bg-purple-500/5"
    }
  ];

  const testimonials = [
    { name: t('parents.testimonials.review1.name'), role: t('parents.testimonials.review1.role'), text: t('parents.testimonials.review1.text'), rating: 5 },
    { name: t('parents.testimonials.review2.name'), role: t('parents.testimonials.review2.role'), text: t('parents.testimonials.review2.text'), rating: 5 },
    { name: t('parents.testimonials.review3.name'), role: t('parents.testimonials.review3.role'), text: t('parents.testimonials.review3.text'), rating: 5 },
    { name: t('parents.testimonials.review4.name'), role: t('parents.testimonials.review4.role'), text: t('parents.testimonials.review4.text'), rating: 5 }
  ];

  const faqs = [
    { q: t('parents.faq.q1.q'), a: t('parents.faq.q1.a') },
    { q: t('parents.faq.q2.q'), a: t('parents.faq.q2.a') },
    { q: t('parents.faq.q3.q'), a: t('parents.faq.q3.a') },
    { q: t('parents.faq.q4.q'), a: t('parents.faq.q4.a') },
    { q: t('parents.faq.q5.q'), a: t('parents.faq.q5.a') },
    { q: t('parents.faq.q6.q'), a: t('parents.faq.q6.a') },
  ];

  return (
    // הסרנו את dir="rtl" כדי שהכיוון ייקבע גלובלית
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white font-heebo">

      <Navbar />

      {/* Hero Section */}
      <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
               {t('parents.hero.badge')}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
               {t('parents.hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
               {t('parents.hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-600" />
                {t('parents.hero.safe')}
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                {t('parents.hero.rating')}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-600" />
                {t('parents.hero.users')}
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
                <button onClick={scrollToProduct} className="group bg-gradient-to-l from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-orange-500/40 transition-all transform hover:scale-105 flex items-center gap-2">
                   {t('parents.hero.cta')}
                   {/* חץ שמסתובב לפי השפה */}
                  <ChevronLeft className={`w-5 h-5 transition-transform ${i18n.language === 'he' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1 rotate-180'}`} />
                </button>
            </div>

          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
             {t('parents.problems.title')}
          </h2>
           
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {problems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-orange-200 transition-colors">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <p className="font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
               {t('parents.solution.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               {t('parents.solution.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
               {t('parents.inside.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               {t('parents.inside.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
              <span className="text-5xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {t('parents.inside.detective.title')}
              </h3>
              <ul className="space-y-3">
                {(t('parents.inside.detective.list', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <span className="text-5xl mb-4 block">🔬</span>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {t('parents.inside.experiment.title')}
              </h3>
              <ul className="space-y-3">
                {(t('parents.inside.experiment.list', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
               {t('parents.inside.format.title')}
            </h3>
            <p className="text-gray-600">
               {t('parents.inside.format.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Age Suitability */}
      <section className="py-16 md:py-24 bg-amber-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
             {t('parents.ages.title')}
          </h2>
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ageGroups.map((level, index) => (
              <div key={index} className={`rounded-2xl p-6 border-2 text-center ${level.color}`}>
                <span className="text-4xl block mb-2">{level.emoji}</span>
                <span className="text-3xl font-black text-gray-800 block mb-1">{level.title}</span>
                <h3 className="font-bold text-gray-700 mb-4">{level.subtitle}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-4">
             {t('parents.testimonials.title')}
          </h2>
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                      👤
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
               {t('parents.pricing.title')}
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
               {t('parents.pricing.subtitle')}
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                 {t('parents.pricing.badge')}
              </div>

              <div className="text-center mb-8">
                <p className="text-xl font-bold mb-1">{t('parents.pricing.product_name')}</p>
                <p className="text-orange-200">{t('parents.pricing.product_sub')}</p>
                 
                <div className="mt-6">
                  <span className="text-5xl md:text-6xl font-black">{t('parents.pricing.price')}</span>
                  <p className="text-sm text-orange-200 mt-2">
                     {t('parents.pricing.payment_type')}
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 mb-8">
                <p className="font-bold mb-3 text-center">
                   {t('parents.pricing.what_you_get')}
                </p>
                <ul className="space-y-2">
                  {(t('parents.pricing.features', { returnObjects: true }) as string[]).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => alert('כאן יפתח חלון התשלום')}
                className="w-full py-4 px-6 rounded-lg bg-white hover:bg-gray-100 text-primary font-heebo font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2 group"
              >
                <Download className="w-5 h-5" />
                 {t('parents.pricing.cta')}
                <ChevronLeft className={`w-5 h-5 transition-transform ${i18n.language === 'he' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1 rotate-180'}`} />
              </button>

              <p className="text-center text-sm text-orange-200 mt-4">
                 {t('parents.pricing.secure')}
              </p>
            </div>

            {/* Money Back Guarantee */}
            <div className="mt-8 bg-white/10 rounded-2xl p-6 text-center border border-white/20">
              <span className="text-4xl block mb-3">🛡️</span>
              <h3 className="font-bold text-lg mb-2">
                 {t('parents.pricing.guarantee.title')}
              </h3>
              <p className="text-orange-100 text-sm">
                 {t('parents.pricing.guarantee.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12">
             {t('parents.faq.title')}
          </h2>
           
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-bold text-gray-800 hover:bg-gray-100">
                  {faq.q}
                  <ChevronLeft className={`w-5 h-5 text-gray-500 transition-transform group-open:-rotate-90 ${i18n.language === 'en' ? 'rotate-180' : ''}`} />
                </summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-amber-100 to-orange-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-5xl block mb-6">🧅🔬</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
               {t('parents.cta_final.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
               {t('parents.cta_final.subtitle')}
            </p>
             
            <div className="flex flex-col items-center gap-4">
              <button onClick={scrollToProduct} className="group bg-gradient-to-l from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-orange-500/40 transition-all transform hover:scale-105">
                  {t('parents.cta_final.btn')}
                <ChevronLeft className={`inline-block w-5 h-5 ${i18n.language === 'he' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1 rotate-180'}`} />
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
               {t('parents.cta_final.footer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;