import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LargeScrollHeadline = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      });

      // Character opacity gradual reveal
      gsap.fromTo(
        ".reveal-text",
        { opacity: 0.1, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headline = "Events, reimagined.";
  const words = headline.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="relative flex h-screen w-full items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#000000] scale-[0.98] rounded-[2rem] m-4 border border-[#262626] flex items-center justify-center pointer-events-none">
        <h2 ref={textRef} className="font-['Sora'] text-5xl md:text-8xl lg:text-[10rem] font-bold text-center px-4 leading-[1.1] tracking-[-0.04em] text-white">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap overflow-hidden mr-[0.2em]">
              {word.split("").map((char, charIndex) => (
                <span key={charIndex} className="reveal-text inline-block opacity-10">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default LargeScrollHeadline;