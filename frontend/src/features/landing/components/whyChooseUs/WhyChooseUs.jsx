import { useRef, useLayoutEffect } from 'react';
import { CalendarDays, Users, QrCode, Compass, Ticket, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const organizerBenefits = [
  {
    title: 'Create and organize',
    description: 'Launch event pages with powerful layout blocks, custom ticketing logic, and capacity limits in minutes.',
    icon: CalendarDays,
  },
  {
    title: 'Manage your team',
    description: 'Assign robust custom permissions to co-organizers and door staff via a centralized dashboard.',
    icon: Users,
  },
  {
    title: 'Seamless entry',
    description: 'Verify entries fast with encrypted QR tokens and our offline-first mobile check-in scanner.',
    icon: QrCode,
  },
];

const participantBenefits = [
  {
    title: 'Discover and explore',
    description: 'Find curated events matching your interests with smart recommendations and a minimal feed.',
    icon: Compass,
  },
  {
    title: 'Frictionless booking',
    description: 'Checkout in two taps with guest pay and mobile wallets. Get your digital pass instantly.',
    icon: Ticket,
  },
  {
    title: 'Participate and engage',
    description: 'Connect with other attendees, share temporary passes securely, and access your tickets offline.',
    icon: HeartHandshake,
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-choose-us" className="relative w-full bg-[#0a0a0a] py-32 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-['Sora'] text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Two sides, one ecosystem.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Whether you&apos;re orchestrating a massive conference or just looking for something to do this weekend, we&apos;ve built the perfect toolset for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Organizers Column */}
          <div className="flex flex-col">
            <div className="mb-12 border-b border-[#262626] pb-6 flex items-center justify-between">
              <h3 className="font-['Sora'] text-2xl font-bold text-white">For Organizers</h3>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gray-300">
                Creators
              </div>
            </div>
            
            <div className="space-y-8 flex-1">
              {organizerBenefits.map((benefit, idx) => (
                <div key={idx} className="benefit-card group relative p-8 rounded-3xl border border-[#262626] bg-[#000000] hover:bg-[#111111] transition-colors duration-300">
                  <div className="flex flex-col gap-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] text-white border border-[#333]">
                      <benefit.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-['Sora'] text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        {benefit.title}
                        <ArrowUpRight size={16} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[15px] leading-relaxed text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Participants Column */}
          <div className="flex flex-col mt-12 lg:mt-0">
            <div className="mb-12 border-b border-[#262626] pb-6 flex items-center justify-between">
              <h3 className="font-['Sora'] text-2xl font-bold text-white">For Participants</h3>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gray-300">
                Attendees
              </div>
            </div>
            
            <div className="space-y-8 flex-1">
              {participantBenefits.map((benefit, idx) => (
                <div key={idx} className="benefit-card group relative p-8 rounded-3xl border border-[#262626] bg-[#000000] hover:bg-[#111111] transition-colors duration-300">
                  <div className="flex flex-col gap-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] text-white border border-[#333]">
                      <benefit.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-['Sora'] text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        {benefit.title}
                        <ArrowUpRight size={16} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[15px] leading-relaxed text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;