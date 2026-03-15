import { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';
import Cta from '../components/cta/Cta';
import FeaturedEvents from '../components/featuredEvents/FeaturedEvents';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Navbar from '../components/navbar/Navbar';
import DualUserFlow from '../components/dualUserFlow/DualUserFlow';
import EventTypes from '../components/eventTypes/EventTypes';
import PaymentSecurity from '../components/paymentSecurity/PaymentSecurity';
import Preloader from '../components/preloader/Preloader';

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
    <div className="relative bg-[var(--color-bg)] text-[var(--color-text)]">
      <AnimatePresence mode="wait">
        {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${preloaderDone ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        
        {/* Layered Scrolling Architecture */}
        <main ref={mainRef} className="relative">
          <div className="relative w-full overflow-hidden z-10 bg-[var(--color-bg)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Hero />
          </div>
          
          <div className="relative w-full z-10 bg-[var(--color-bg)]">
            <EventTypes />
          </div>
          
          <div className="sticky top-0 z-30 w-full bg-[var(--color-bg)] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <DualUserFlow />
          </div>
          
          <div className="relative w-full z-10 bg-[#0a120f] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <HowItWorks />
          </div>
          
          <div className="sticky top-0 z-50 w-full bg-[var(--color-bg)] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <FeaturedEvents />
          </div>
          
          <div className="relative w-full z-10 bg-[#050a08] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <PaymentSecurity />
          </div>
          
          <div className="relative w-full z-10 bg-[var(--color-bg)]">
            <Cta />
          </div>
        </main>
        
        <div className="relative w-full z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
