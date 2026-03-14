import { motion } from 'framer-motion';
import EventCard from '../../features/events/components/EventCard';
import { eventsData } from '../../features/events/data/eventsData';
import Footer from '../../features/landing/components/footer/Footer';
import Navbar from '../../features/landing/components/navbar/Navbar';
import Section from '../../shared/Section';
import { cardContainerVariants } from '../../utils/motionVariants';

const MotionGrid = motion.div;

const EventsPage = () => {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="pt-24">
        <Section id="events" className="pt-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#a4c2af]">Events</p>
            <h1 className="font-['Sora'] text-4xl font-semibold tracking-tight sm:text-5xl">Browse Live And Upcoming Events</h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)]">
              Discover real community programs run on EventFlow, from high-intensity hackathons to practical workshop tracks.
            </p>
          </div>

          <MotionGrid
            className="mt-12 grid gap-6 md:grid-cols-2"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </MotionGrid>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
