import { motion } from 'framer-motion';
import {
  CalendarDays,
  CalendarPlus,
  CheckCircle,
  Clock3,
  ImagePlus,
  LogIn,
  MapPin,
  Plus,
  QrCode,
  Rocket,
  ScanLine,
  Ticket,
  User,
} from 'lucide-react';
import Section from '../../../../shared/Section';
import { cardContainerVariants, cardItemVariants } from '../../../../utils/motionVariants';

const MotionGrid = motion.div;
const MotionCard = motion.article;

const workflowSteps = [
  {
    step: 'Step 1',
    title: 'Login Or Register',
    description: 'Create your organizer profile and access your event workspace instantly.',
    icon: LogIn,
    badgeIcon: User,
  },
  {
    step: 'Step 2',
    title: 'Create Or Organize An Event',
    description: 'Start a new event flow, assign organizers, and define event type and capacity.',
    icon: CalendarPlus,
    badgeIcon: Plus,
  },
  {
    step: 'Step 3',
    title: 'Add Event Details',
    description: 'Add date, time, venue, and banner assets before publishing your listing.',
    icon: CalendarDays,
    detailIcons: [
      { label: 'Date', icon: CalendarDays },
      { label: 'Time', icon: Clock3 },
      { label: 'Venue', icon: MapPin },
      { label: 'Banner Upload', icon: ImagePlus },
    ],
  },
  {
    step: 'Step 4',
    title: 'Publish The Event',
    description: 'Push your event live with one click and open attendee registrations.',
    icon: Rocket,
  },
  {
    step: 'Step 5',
    title: 'Attendees Register With QR Tickets',
    description: 'Registered attendees receive digital passes and QR tickets automatically.',
    icon: QrCode,
    badgeIcon: Ticket,
  },
  {
    step: 'Step 6',
    title: 'Scan Tickets At Check-In',
    description: 'Use fast scan mode at the venue and track verified entry in real time.',
    icon: ScanLine,
    badgeIcon: CheckCircle,
  },
];

const HowItWorks = () => {
  return (
    <Section id="how-it-works" className="bg-[rgba(11,17,13,0.55)]">
      <div className="max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#9db6a7]">How It Works</p>
        <h2 className="font-['Sora'] text-3xl font-semibold tracking-tight sm:text-4xl">A Real Event Workflow From Setup To Check-In</h2>
      </div>
      <MotionGrid
        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {workflowSteps.map((step) => (
          <MotionCard
            key={step.title}
            variants={cardItemVariants}
            whileHover="hover"
            className="rounded-2xl border border-[var(--color-border)] bg-[rgba(13,21,16,0.84)] p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">{step.step}</p>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#356f4b] bg-[#143021] text-[var(--color-accent)]">
                <step.icon size={18} />
              </span>
            </div>

            <h3 className="mt-5 font-['Sora'] text-xl font-medium tracking-tight">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{step.description}</p>

            {step.detailIcons?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {step.detailIcons.map((detail) => (
                  <span
                    key={detail.label}
                    className="inline-flex items-center gap-2 rounded-full border border-[#2a5840] bg-[#13261a] px-3 py-1 text-xs text-[#b5d8c2]"
                  >
                    <detail.icon size={13} className="text-[var(--color-accent)]" />
                    {detail.label}
                  </span>
                ))}
              </div>
            ) : null}

            {step.badgeIcon ? (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#2a5940] bg-[#13261a] px-3 py-1 text-xs text-[#b5d8c2]">
                <step.badgeIcon size={13} className="text-[var(--color-accent)]" />
                Workflow Enabled
              </p>
            ) : null}
          </MotionCard>
        ))}
      </MotionGrid>
    </Section>
  );
};

export default HowItWorks;