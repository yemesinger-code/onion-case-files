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
      {/* מזהה: top - ראש הדף */}
      <div id="top">
        <Hero />
      </div>

      {/* מזהה: about - אודות הבלש */}
      <div id="about">
        <AboutDetectiveOnion />
      </div>

      {/* מזהה: products - החנות/תיקים */}
      <div id="products">
        <FeaturedProduct />
      </div>

      {/* מזהה: how-it-works - איך זה עובד */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* מזהה: cast - הצוות */}
      <div id="cast">
        <MeetTheCast />
      </div>

      {/* מזהה: reviews - המלצות */}
      <div id="reviews">
        <SocialProof />
      </div>

      {/* מזהה: contact - יצירת קשר/סיום */}
      <div id="contact">
        <FinalCTA />
      </div>
    </main>
  );
};

export default Index;
