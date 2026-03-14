import { motion } from 'framer-motion';
import EventCard from '../../../events/components/EventCard';
import { eventsData } from '../../../events/data/eventsData';
import Section from '../../../../shared/Section';
import { cardContainerVariants } from '../../../../utils/motionVariants';

const MotionGrid = motion.div;

const FeaturedEvents = () => {
  const featuredEvents = eventsData.slice(0, 4);

  return (
    <Section id="featured-events" className="bg-[linear-gradient(180deg,rgba(6,9,7,0)_0%,rgba(13,20,15,0.72)_100%)]">
      <div className="max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#9db6a7]">Featured Events</p>
        <h2 className="font-['Sora'] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Built For Real Event Formats
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)]">
          EventFlow adapts to the way engineering communities and product teams run events, from local meetups to high-scale conferences.
        </p>
      </div>
      <MotionGrid
        className="mt-12 grid gap-6 sm:grid-cols-2"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </MotionGrid>
    </Section>
  );
};

export default FeaturedEvents;