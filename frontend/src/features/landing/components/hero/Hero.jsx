import { useRef, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import Button from '../../../../shared/Button';

const Hero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background subtle zoom/pan
      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Text reveal
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power4.out",
          delay: 0.2
        }
      );

      // Scroll effect - fade out on scroll
      gsap.to(containerRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false, // This makes the next section slide over it!
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="top" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#000000]">
      {/* Abstract Animated Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="hero-text font-['Sora'] text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-[7rem] leading-[1.1]">
          The platform for <br className="hidden md:block" /> modern events
        </h1>
        
        <p className="hero-text mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-2xl">
          Everything you need to create, manage, and scale your events. Designed for the builders of tomorrow.
        </p>

        <div className="hero-text mt-12 flex flex-col gap-6 sm:flex-row">
          <Button 
            as={NavLink} 
            to="/login" 
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-black transition-transform hover:scale-105"
          >
            Start Building
          </Button>
          <Button 
            as={NavLink} 
            to="/featured-events" 
            variant="secondary"
            className="rounded-full border border-[#333333] bg-transparent px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/5 active:scale-95"
          >
            Explore Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
