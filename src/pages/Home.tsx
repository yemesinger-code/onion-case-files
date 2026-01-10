import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import SocialProof from '@/components/home/SocialProof';
import { PainPoints, Solution } from '@/components/home/MarketingSections';
import AboutDetectiveOnion from '@/components/home/AboutDetectiveOnion';
import MeetTheCast from '@/components/home/MeetTheCast';
import HowItWorks from '@/components/home/HowItWorks';
import FinalCTA from '@/components/home/FinalCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-1">
        
        {/* 1. Hero Title */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* 2. Four Questions / Stats */}
        <section id="social-proof">
          <SocialProof />
        </section>

        {/* 3. Does it sound familiar? */}
        <section id="pain-points">
          <PainPoints />
        </section>

        {/* 4. The Solution */}
        <section id="solution">
          <Solution />
        </section>

        {/* 5. About Detective Onion */}
        <section id="about">
          <AboutDetectiveOnion />
        </section>

        {/* 6. Meet The Cast */}
        <section id="cast">
          <MeetTheCast />
        </section>
        
        {/* 7. What's Included */}
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        {/* 8. Final CTA (Download Button) */}
        <section id="cta">
          <FinalCTA />
        </section>

      </main>
      
      {/* Footer נמצא ב-App.tsx */}
    </div>
  );
};

export default Home;
