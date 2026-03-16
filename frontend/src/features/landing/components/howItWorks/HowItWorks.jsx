import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarPlus2, Users2, Ticket, QrCode, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 'setup',
    title: 'Create event',
    description: 'Design your event page with powerful layout blocks and unified styling in minutes.',
    icon: CalendarPlus2,
  },
  {
    id: 'team',
    title: 'Invite team',
    description: 'Grant custom permissions to co-organizers, ticket scanners, and door staff.',
    icon: Users2,
  },
  {
    id: 'sell',
    title: 'Open registrations',
    description: 'Monitor live ticketing metrics and attendee demographics in real-time.',
    icon: Ticket,
  },
  {
    id: 'scan',
    title: 'Scan QR tickets',
    description: 'Verify entries fast with encrypted QR tokens and offline-first mobile check-in.',
    icon: QrCode,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const leftColRef = useRef(null);

  useLayoutEffect(() => {
    // Only apply complex scroll pinning on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Pin the container itself to allow the right side panels to scroll up visually
      const panels = gsap.utils.toArray('.scroll-panel');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "+=200%", // duration of scroll
          pin: true,
          scrub: true,
        }
      });

      // Simple parallax setup for panels
      panels.forEach((panel, i) => {
        if (i !== 0) {
          gsap.set(panel, { y: 100, opacity: 0 });
          tl.to(panels[i - 1], { opacity: 0, y: -50, duration: 1 }, `step${i}`)
            .to(panel, { y: 0, opacity: 1, duration: 1 }, `step${i}`);
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#000000] py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Floating Rounded Panel */}
        <div 
          ref={containerRef} 
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 rounded-[2rem] border border-[#262626] bg-[#0a0a0a] p-10 lg:p-20 shadow-2xl overflow-hidden"
        >
          {/* Left Pinned Content */}
          <div ref={leftColRef} className="flex flex-col justify-center">
            <h2 className="font-['Sora'] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              A seamless <br /> workflow.
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
              From drafting the initial concept to checking in the final attendee, everything flows together perfectly.
            </p>
            <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-white hover:text-gray-300 transition-colors cursor-pointer w-max">
              Explore Documentation <ArrowRight size={16} />
            </div>
          </div>

          {/* Right Scrolling Panels */}
          <div className="relative h-[400px] lg:h-[500px]">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={`scroll-panel absolute inset-0 flex flex-col justify-center rounded-2xl border border-[#262626] bg-[#141414] p-8 lg:p-12 ${i === 0 ? 'opacity-100' : ''}`}
              >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#333333] bg-[#1f1f1f]">
                  <step.icon size={28} className="text-white" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">Step 0{i + 1}</div>
                <h3 className="font-['Sora'] text-2xl lg:text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;