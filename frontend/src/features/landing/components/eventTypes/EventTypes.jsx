import { motion } from 'framer-motion';
import { CalendarPlus2, Users2, Ticket, QrCode, CheckCircle2 } from 'lucide-react';
import Section from '../../../../shared/Section';

const MotionCard = motion.article;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const EventTypes = () => {
  return (
    <Section id="features" className="relative border-t border-[var(--color-border)] bg-[#070d0b] py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,rgba(34,197,94,0)_65%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">Product Interface</p>
          <h2 className="mt-4 font-['Sora'] text-4xl font-bold tracking-tight text-white md:text-5xl">
            Real screens from the event lifecycle
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            EventFlow is not a static template. It is a connected operations layer for hosts and attendees.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <MotionCard
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-[var(--color-border)] bg-[#0c1311] p-6 lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              <CalendarPlus2 size={14} className="text-[var(--color-primary)]" />
              Event creation interface
            </div>
            <div className="space-y-3">
              {['Title: EventFlow Product Launch', 'Date: Fri, Oct 04, 2026', 'Venue: Skyline Arena, Delhi'].map((item) => (
                <div key={item} className="rounded-lg border border-[#2a3431] bg-[#0a100e] px-3 py-2 text-sm text-gray-300">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[#2a3431] bg-[#0a100e] px-3 py-2 text-sm text-gray-300">Tier: General - $29</div>
              <div className="rounded-lg border border-[#2a3431] bg-[#0a100e] px-3 py-2 text-sm text-gray-300">Tier: VIP - $69</div>
            </div>
            <button className="mt-5 w-full rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#06110b]">
              Publish event
            </button>
          </MotionCard>

          <MotionCard
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-[var(--color-border)] bg-[#0c1311] p-6 lg:col-span-5"
          >
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              <Users2 size={14} className="text-[var(--color-primary)]" />
              Team management
            </div>
            <div className="space-y-3">
              {[
                ['Maya R.', 'Owner'],
                ['Tom S.', 'Editor'],
                ['Lea N.', 'Scanner'],
              ].map(([name, role]) => (
                <div key={name} className="flex items-center justify-between rounded-lg border border-[#2a3431] bg-[#0a100e] px-3 py-2">
                  <span className="text-sm text-gray-200">{name}</span>
                  <span className="rounded-full border border-[#304d3f] bg-[#12211b] px-2 py-1 text-xs text-[#acd9be]">{role}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-lg border border-[#355a47] bg-[#11201a] px-4 py-2 text-sm font-semibold text-[#d2f5e2]">
              Invite team member
            </button>
          </MotionCard>

          <MotionCard
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-[var(--color-border)] bg-[#0c1311] p-6 lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              <Ticket size={14} className="text-[var(--color-primary)]" />
              Registration dashboard
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['Total', '314'],
                ['General', '231'],
                ['VIP', '83'],
                ['Waitlist', '26'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#2a3431] bg-[#0a100e] px-3 py-3">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-[#2a3431] bg-[#0a100e] px-3 py-2 text-sm text-gray-300">
              Latest registration: Ethan L. - 8 seconds ago
            </div>
          </MotionCard>

          <MotionCard
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-[var(--color-border)] bg-[#0c1311] p-6 lg:col-span-5"
          >
            <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              <QrCode size={14} className="text-[var(--color-primary)]" />
              QR scan console
            </div>
            <div className="rounded-2xl border border-[#2d3b35] bg-[#09100d] p-4">
              <div className="mx-auto grid h-36 w-36 place-items-center rounded-xl border border-dashed border-[#38634d]">
                <QrCode size={56} className="text-[#7bc89d]" />
              </div>
              <div className="mt-4 space-y-2">
                {['Ticket: EVT-4412', 'Entry Gate: A2'].map((item) => (
                  <p key={item} className="rounded-lg border border-[#2a3431] bg-[#0b1411] px-3 py-2 text-sm text-gray-300">
                    {item}
                  </p>
                ))}
                <p className="inline-flex items-center gap-1 rounded-full bg-[#12261c] px-2 py-1 text-xs text-[#a7ddb9]">
                  <CheckCircle2 size={13} />
                  Verified
                </p>
              </div>
            </div>
          </MotionCard>
        </div>
      </div>
    </Section>
  );
};

export default EventTypes;
