import { CalendarDays, Users, QrCode, ClipboardCheck } from 'lucide-react';
import Section from '../../../../shared/Section';

const reasons = [
  {
    title: 'Fast event creation',
    description: 'No more bloated forms. Set up your event page, ticket tiers, and details in under five minutes.',
    icon: CalendarDays,
  },
  {
    title: 'Team collaboration',
    description: 'Assign specific roles like Scanner or Editor to your team members for secure, delegated management.',
    icon: Users,
  },
  {
    title: 'Smart registrations',
    description: 'Provide an optimized checkout process that tracks real-time conversions and simplifies data entry.',
    icon: ClipboardCheck,
  },
  {
    title: 'QR ticket scanning',
    description: 'Breeze through lines. Our built-in mobile scanner verifies tickets instantly with a single tap.',
    icon: QrCode,
  },
];

const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" className="bg-[var(--color-bg)] py-32 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20" data-scroll-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">The Advantage</p>
          <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold tracking-tight text-white">
            Why Choose EventFlow
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-gray-400">
            We stripped away the noise to give you a platform that actually makes running events enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-scroll-reveal>
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[#0c1110] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#22c55e]/5"
            >
              <div className="h-12 w-12 rounded-xl bg-black border border-[var(--color-border)] flex items-center justify-center text-[#22c55e] mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-['Sora'] text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-[15px] leading-relaxed text-gray-400 flex-1">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
