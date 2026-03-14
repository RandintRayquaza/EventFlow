import { useEffect, useRef } from 'react';
import Cta from '../../features/landing/components/cta/Cta';
import FeaturedEvents from '../../features/landing/components/featuredEvents/FeaturedEvents';
import FeaturesSection from '../../features/landing/components/features/FeaturesSection';
import Footer from '../../features/landing/components/footer/Footer';
import Hero from '../../features/landing/components/hero/Hero';
import HowItWorks from '../../features/landing/components/howItWorks/HowItWorks';
import Marquee from '../../features/landing/components/marquee/Marquee';
import Navbar from '../../features/landing/components/navbar/Navbar';
import { runHeroRevealAnimation } from '../../utils/gsapAnimations';

const LandingPage = ({ focusSection = 'top' }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    const cleanup = runHeroRevealAnimation(pageRef.current);
    return cleanup;
  }, []);

  useEffect(() => {
    if (!focusSection || focusSection === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(focusSection);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [focusSection]);

  return (
    <div ref={pageRef} className="relative overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeaturedEvents />
        <FeaturesSection />
        <HowItWorks />
        <Cta />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;