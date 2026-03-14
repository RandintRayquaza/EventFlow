import { CalendarDays, Clock3, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { cardItemVariants } from '../../../utils/motionVariants';
import EventInfoRow from './EventInfoRow';

const MotionCard = motion.article;

const EventCard = ({ event }) => {
  return (
    <MotionCard
      variants={cardItemVariants}
      whileHover="hover"
      className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90"
    >
      <NavLink to={`/events/${event.id}`} className="group flex h-full flex-col">
        <div className="h-52 overflow-hidden">
          <img
            src={event.banner}
            alt={event.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex h-full flex-col space-y-4 p-6">
          <div>
            <span className="inline-flex rounded-full border border-[#2c5d43] bg-[#132219] px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-[#a7ccb5]">
              {event.type}
            </span>
            <h3 className="mt-3 font-['Sora'] text-xl font-medium tracking-tight text-[var(--color-text)]">
              {event.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{event.description}</p>
          </div>

          <div className="space-y-2">
            <EventInfoRow icon={CalendarDays} value={event.date} />
            <EventInfoRow icon={Clock3} value={event.time} />
            <EventInfoRow icon={MapPin} value={event.venue} />
            {event.attendees ? <EventInfoRow icon={Users} value={`${event.attendees} attendees`} /> : null}
          </div>

          <span className="mt-auto inline-flex w-fit items-center rounded-lg border border-[#2f704a] bg-[#14311f] px-4 py-2 text-sm font-semibold text-[#c7efd5] transition-colors group-hover:border-[#48c27a] group-hover:bg-[#174429]">
            View Event
          </span>
        </div>
      </NavLink>
    </MotionCard>
  );
};

export default EventCard;
