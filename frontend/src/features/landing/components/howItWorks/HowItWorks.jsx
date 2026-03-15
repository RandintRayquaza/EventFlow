import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus2, Users2, Ticket, QrCode, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../../../../shared/Section';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 'create',
    title: 'Create your event',
    copy: 'Set the core details in a single flow with date, venue, ticket tiers, and publishing controls.',
    icon: CalendarPlus2,
    bullets: ['Define schedule and capacity', 'Set free or paid ticket tiers', 'Publish instantly to your event page'],
  },
  {
    id: 'invite',
    title: 'Invite your team',
    copy: 'Assign organizer roles so coordinators, editors, and door staff can collaborate in one workspace.',
    icon: Users2,
    bullets: ['Granular permission levels', 'Role-based editing access', 'Shared activity timeline'],
  },
  {
    id: 'registrations',
    title: 'Open registrations',
    copy: 'Launch registration and monitor attendee activity with live status and conversion-ready data.',
    icon: Ticket,
    bullets: ['Registration status by ticket type', 'Attendee records update in real time', 'Automatic confirmation workflow'],
  },
  {
    id: 'scan',
    title: 'Scan tickets at the venue',
    copy: 'Run fast, reliable check-ins using encrypted QR tickets and instant entry verification.',
    icon: QrCode,
    bullets: ['Mobile scan mode', 'Duplicate prevention', 'Live entry confirmations'],
  },
];

const StepPreview = ({ stepId }) => {
  if (stepId === 'create') {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[#0c1110] p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Event Builder</p>
        <div className="mt-5 space-y-3">
          {['Title: DevOps Night 2026', 'Date: Thu, Sep 12', 'Venue: North Hall, Bangalore'].map((item) => (
            <div key={item} className="rounded-lg border border-[#2a3331] bg-[#0a0f0d] px-3 py-2 text-sm text-gray-300">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-[#2a3331] bg-[#0a0f0d] px-3 py-2 text-sm text-gray-300">Tier: General - $19</div>
          <div className="rounded-lg border border-[#2a3331] bg-[#0a0f0d] px-3 py-2 text-sm text-gray-300">Tier: VIP - $49</div>
        </div>
        <button className="mt-5 w-full rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#06110b]">
          Publish Event
        </button>
      </div>
    );
  }

  if (stepId === 'invite') {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[#0c1110] p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Team Access</p>
        <div className="mt-5 space-y-3">
          {[
            ['Aman Verma', 'Organizer'],
            ['Sara Kim', 'Editor'],
            ['Noah Diaz', 'Scanner'],
          ].map(([name, role]) => (
            <div key={name} className="flex items-center justify-between rounded-lg border border-[#2a3331] bg-[#0a0f0d] px-3 py-2">
              <span className="text-sm text-gray-200">{name}</span>
              <span className="rounded-full border border-[#2a3f35] bg-[#11211a] px-2 py-1 text-xs text-[#a9d3bb]">{role}</span>
            </div>
          ))}
        </div>
        <button className="mt-5 w-full rounded-lg border border-[#355745] bg-[#11201a] px-4 py-2 text-sm font-semibold text-[#c8f1dc]">
          Invite teammate
        </button>
      </div>
    );
  }

  if (stepId === 'registrations') {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[#0c1110] p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Registration Board</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            ['General', '138 confirmed'],
            ['VIP', '29 confirmed'],
            ['Waitlist', '16 pending'],
            ['Checked-in', '0 live'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-[#2a3331] bg-[#0a0f0d] px-3 py-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
              <p className="mt-1 text-sm font-medium text-gray-200">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-[#2a3331] bg-[#0a0f0d] px-3 py-2 text-sm text-gray-300">
          Last registration: Priya N. - 18 seconds ago
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[#0c1110] p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">QR Check-In</p>
      <div className="mt-5 rounded-xl border border-[#2a3331] bg-[#0a0f0d] p-5">
        <div className="mx-auto grid h-52 w-52 place-items-center rounded-xl border border-dashed border-[#385f4a] bg-[#09100d]">
          <div className="grid h-24 w-24 place-items-center rounded-lg border border-[#304c3d] bg-[#0d1813] text-[#7bc79b]">
            <QrCode size={48} />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-lg border border-[#2a3331] bg-[#0b1411] px-3 py-2 text-sm text-gray-300">
          <span>Ticket ID: EVT-2913</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#11281c] px-2 py-1 text-xs text-[#9fe0bc]">
            <Check size={12} />
            Valid
          </span>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const activeStepRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);

  const progress = useMemo(() => {
    if (steps.length <= 1) {
      return 0;
    }
    return (activeStep / (steps.length - 1)) * 100;
  }, [activeStep]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const getPinDistance = () => Math.round(window.innerHeight * 2.35);

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${getPinDistance()}`,
        pin: '[data-story-pin]',
        scrub: 0.35,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const rawIndex = Math.round(self.progress * (steps.length - 1));
          const nextIndex = gsap.utils.clamp(0, steps.length - 1, rawIndex);

          if (nextIndex !== activeStepRef.current) {
            activeStepRef.current = nextIndex;
            setActiveStep(nextIndex);
          }
        },
      });

      return () => {
        trigger.kill();
      };
    });

    mm.add('(max-width: 1023px)', () => {
      setActiveStep(0);
    });

    return () => mm.revert();
  }, []);

  return (
    <Section id="how-it-works" className="border-t border-[var(--color-border)] bg-[#050807] py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">Story Flow</p>
          <h2 className="mt-4 font-['Sora'] text-4xl font-bold tracking-tight text-white md:text-5xl">
            A guided workflow that unfolds as you scroll
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            EventFlow follows your production lifecycle from setup to venue check-in in one continuous story.
          </p>
        </div>

        <div ref={sectionRef} className="relative mt-16 hidden lg:block">
          <div data-story-pin className="flex h-screen items-center">
            <div className="grid w-full grid-cols-[1fr_1.15fr] gap-10 rounded-3xl border border-[var(--color-border)] bg-[#070d0b] p-10">
              <div className="flex flex-col">
                <div className="mb-8 h-1 w-full rounded-full bg-[#17201d]">
                  <div
                    className="h-full rounded-full bg-[var(--color-primary)] transition-[width] duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index === activeStep;

                    return (
                      <div
                        key={step.id}
                        className={`rounded-2xl border p-4 transition-all duration-300 ${
                          isActive
                            ? 'border-[#2f5743] bg-[#101a16]'
                            : 'border-[#1f2a27] bg-[#0a100e] opacity-60'
                        }`}
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Step {index + 1}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <span
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${
                              isActive
                                ? 'border-[#37664f] bg-[#11231b] text-[#98d9b7]'
                                : 'border-[#2a3431] bg-[#0b1411] text-gray-500'
                            }`}
                          >
                            <Icon size={18} />
                          </span>
                          <h3 className="font-['Sora'] text-lg font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={steps[activeStep].id}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-[#8dbba3]">{`Step ${activeStep + 1}`}</p>
                    <h3 className="mt-3 font-['Sora'] text-3xl font-semibold tracking-tight text-white">
                      {steps[activeStep].title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400">{steps[activeStep].copy}</p>

                    <div className="mt-6 space-y-2">
                      {steps[activeStep].bullets.map((item) => (
                        <p key={item} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7bc79b]" />
                          {item}
                        </p>
                      ))}
                    </div>

                    <div className="mt-7">
                      <StepPreview stepId={steps[activeStep].id} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-6 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="rounded-2xl border border-[var(--color-border)] bg-[#0b1210] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8dbba3]">Step {index + 1}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#355745] bg-[#11231b] text-[#9fdfbd]">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-['Sora'] text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{step.copy}</p>
                <div className="mt-5 space-y-2">
                  {step.bullets.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7bc79b]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
