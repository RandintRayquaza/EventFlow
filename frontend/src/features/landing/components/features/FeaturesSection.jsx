import { motion } from 'framer-motion';
import Section from '../../../../shared/Section';
import { cardContainerVariants, cardItemVariants } from '../../../../utils/motionVariants';

const MotionGrid = motion.div;
const MotionCard = motion.article;

const featureItems = [
  {
    title: 'Unified Registration',
    description: 'Custom forms, approval flows, and waitlist management in one streamlined pipeline.',
  },
  {
    title: 'Agenda Orchestration',
    description: 'Handle speaker slots, session updates, and room changes without breaking attendee flow.',
  },
  {
    title: 'Team Workspaces',
    description: 'Keep organizers, moderators, and volunteers aligned with role-based collaboration.',
  },
  {
    title: 'Post-Event Follow Through',
    description: 'Trigger follow-up campaigns and recap pages instantly after the event ends.',
  },
];

const FeaturesSection = () => {
  return (
    <Section id="features">
      <div className="max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#9db6a7]">Why EventFlow</p>
        <h2 className="font-['Sora'] text-3xl font-semibold tracking-tight sm:text-4xl">A Focused Stack For Event Teams</h2>
      </div>
      <MotionGrid
        className="mt-10 grid gap-5 md:grid-cols-2"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featureItems.map((item) => (
          <MotionCard
            key={item.title}
            variants={cardItemVariants}
            whileHover="hover"
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <h3 className="font-['Sora'] text-xl font-medium tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
          </MotionCard>
        ))}
      </MotionGrid>
    </Section>
  );
};

export default FeaturesSection;