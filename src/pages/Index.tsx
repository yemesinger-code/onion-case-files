import Hero from '@/components/home/Hero';
import AboutDetectiveOnion from '@/components/home/AboutDetectiveOnion';
import HowItWorks from '@/components/home/HowItWorks';
import MeetTheCast from '@/components/home/MeetTheCast';
import SocialProof from '@/components/home/SocialProof';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero />
      
      {/* About Detective Onion - Hero Section with tabs */}
      <AboutDetectiveOnion />
      
      {/* How It Works - 3 steps */}
      <HowItWorks />
      
      {/* Meet The Cast - Characters */}
      <MeetTheCast />
      
      {/* Social Proof - Stats & Testimonials */}
      <SocialProof />
      
      {/* Final CTA - Download section */}
      <FinalCTA />
    </main>
  );
};

export default Index;
