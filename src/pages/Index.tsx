import Hero from '@/components/home/Hero';
import AboutDetectiveOnion from '@/components/home/AboutDetectiveOnion';
import FeaturedProduct from '@/components/home/FeaturedProduct';
import HowItWorks from '@/components/home/HowItWorks';
import MeetTheCast from '@/components/home/MeetTheCast';
import SocialProof from '@/components/home/SocialProof';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <main className="flex-1">
      {/* 1. Hero: The Hook - רושם ראשוני חזק */}
      <Hero />
      
      {/* 2. About: The Story - היכרות עם הדמות והקונספט */}
      <AboutDetectiveOnion />
      
      {/* 3. Product: The Offer - הצעה לרכישה (מיקום אסטרטגי!) */}
      <FeaturedProduct />
      
      {/* 4. How It Works: The Process - הסרת חסמים והסבר טכני */}
      <HowItWorks />
      
      {/* 5. Cast: The Emotion - חיבור לדמויות המשנה */}
      <MeetTheCast />
      
      {/* 6. Social Proof: The Trust - הוכחה חברתית */}
      <SocialProof />
      
      {/* 7. Final CTA: The Closing - הזדמנות אחרונה לרכישה */}
      <FinalCTA />
    </main>
  );
};

export default Index;
