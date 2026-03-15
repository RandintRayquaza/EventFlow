import { motion, useScroll, useTransform } from 'framer-motion';
import { CalendarPlus, Users, CreditCard, QrCode, Search, Ticket, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import Section from '../../../../shared/Section';

const hostSteps = [
  { label: 'Create events', icon: CalendarPlus },
  { label: 'Manage attendees', icon: Users },
  { label: 'Sell tickets', icon: CreditCard },
  { label: 'Run QR check-in', icon: QrCode },
];

const attendeeSteps = [
  { label: 'Discover events', icon: Search },
  { label: 'Register instantly', icon: Ticket },
  { label: 'Receive QR ticket', icon: QrCode },
  { label: 'Enter smoothly', icon: ShieldCheck },
];

const DualUserFlow = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [180, -180]);

  return (
    <Section id="dual-user-flow" className="relative border-t border-[var(--color-border)] bg-[#050a08] py-32 lg:py-48 overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-24">
          <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Dual Experience
          </p>
          <h2 className="mt-5 font-['Sora'] text-4xl font-bold tracking-tight text-white md:text-6xl">
            One platform,<br/>two synchronized journeys
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Hosts orchestrate every detail while attendees move from discovery to entry without friction.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 relative">
          
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent hidden md:block" />

          <motion.article
            style={{ y: y1 }}
            className="rounded-[2.5rem] border border-[var(--color-border)] bg-gradient-to-b from-[#0d1411] to-[#080d0a] p-8 shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-10 flex items-center justify-between relative z-10">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-500/80 mb-2">Host flow</p>
                <h3 className="font-['Sora'] text-3xl font-semibold text-white">Event Hosts</h3>
              </div>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                <CalendarPlus size={24} />
              </span>
            </div>

            <div className="space-y-4 relative z-10">
              {hostSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    key={step.label} 
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-emerald-500/80 group-hover:scale-110 group-hover:text-emerald-400 transition-all">
                      <Icon size={18} />
                    </span>
                    <span className="text-[15px] font-medium text-gray-200">{step.label}</span>
                    <span className="ml-auto text-xs font-mono font-medium text-gray-600">0{index + 1}</span>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="flex items-center gap-2 text-[13px] text-emerald-400/80">
                <CheckCircle2 size={16} />
                Coordinated workflow from setup to venue
              </p>
            </div>
          </motion.article>

          <motion.article
            style={{ y: y2 }}
            className="rounded-[2.5rem] border border-[var(--color-border)] bg-gradient-to-b from-[#0d1411] to-[#080d0a] p-8 shadow-2xl relative md:mt-24"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-10 flex items-center justify-between relative z-10">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-500/80 mb-2">Attendee flow</p>
                <h3 className="font-['Sora'] text-3xl font-semibold text-white">Event Attendees</h3>
              </div>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                <Ticket size={24} />
              </span>
            </div>

            <div className="space-y-4 relative z-10">
              {attendeeSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    key={step.label} 
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-emerald-500/80 group-hover:scale-110 group-hover:text-emerald-400 transition-all">
                      <Icon size={18} />
                    </span>
                    <span className="text-[15px] font-medium text-gray-200">{step.label}</span>
                    <span className="ml-auto text-xs font-mono font-medium text-gray-600">0{index + 1}</span>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="flex items-center gap-2 text-[13px] text-emerald-400/80">
                <CheckCircle2 size={16} />
                Seamless path from discovery to entry
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </Section>
  );
};

export default DualUserFlow;
