import { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Navbar from '../components/navbar/Navbar';
import DualUserFlow from '../components/dualUserFlow/DualUserFlow';
import Preloader from '../components/preloader/Preloader';
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs';
import Marquee from '../components/marquee/Marquee';
import FeaturesSection from '../components/features/FeaturesSection';

const Landing = ({ focusSection = 'top' }) => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    if (!preloaderDone) return;
    
    // We wait for DOM to settle then refresh GSAP triggers
    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => window.clearTimeout(timer);
  }, [preloaderDone]);

  useEffect(() => {
    if (!preloaderDone) return;
    
    if (!focusSection || focusSection === 'top') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(focusSection);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      ScrollTrigger.refresh();
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [focusSection, preloaderDone]);

  return (
    <div className="relative bg-[#000000] text-white">
      <AnimatePresence mode="wait">
        {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${preloaderDone ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        
        {/* Cinematic Layered Scrolling Architecture */}
        <main ref={mainRef} className="relative bg-[#000000]">
          
          {/* Main Hero */}
          <div className="relative z-10 w-full bg-[#000000]">
            <Hero />
          </div>
          
          {/* Large Scroll Headline sliding over Hero */}
          <div className="relative z-20 w-full bg-[#0a0a0a] shadow-[0_-30px_60px_rgba(0,0,0,0.9)] border-t border-[#1a1a1a]">
            <DualUserFlow />
          </div>
          
          {/* Pinned Workflow sliding over Headline */}
          <div className="relative z-30 w-full bg-[#000000] shadow-[0_-30px_60px_rgba(0,0,0,1)] border-t border-[#262626]">
            <HowItWorks />
          </div>

          <div className="relative z-30 w-full bg-[#0a0a0a] shadow-[0_-30px_60px_rgba(0,0,0,1)] border-t border-[#262626]">
            <WhyChooseUs />
          </div>

          <div className="relative z-30 w-full bg-[#000000] border-t border-[#262626]">
            <Marquee />
          </div>

          <div className="relative z-30 w-full bg-[#0a0a0a] border-t border-[#262626]">
            <FeaturesSection />
          </div>
          
        </main>
        
        <div className="relative z-40 w-full bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,1)] border-t border-[#1f1f1f]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
