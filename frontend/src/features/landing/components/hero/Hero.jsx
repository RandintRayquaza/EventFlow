import { CalendarPlus, LayoutGrid } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../../../shared/Button';
import Section from '../../../../shared/Section';
import { isAuthenticated } from '../../../../utils/auth';

const Hero = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    if (isAuthenticated()) {
      navigate('/events/new');
      return;
    }

    navigate('/login', { state: { from: '/events/new' } });
  };

  return (
    <Section id="top" className="pt-40 md:pt-48 lg:pt-52">
      <div
        data-hero-glow
        className="pointer-events-none absolute left-1/2 top-36 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.4)_0%,rgba(34,197,94,0)_65%)] blur-2xl"
      />
      <div className="relative z-10 max-w-4xl">
        <p
          data-hero-reveal
          className="mb-7 inline-flex rounded-full border border-[#254a35] bg-[#0d1510] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#b3cabd]"
        >
          Event Operations Platform
        </p>
        <h1
          data-hero-reveal
          className="font-['Sora'] text-[clamp(2.45rem,8vw,5.4rem)] font-semibold leading-[0.93] tracking-[-0.03em]"
        >
          Run Events Without The Chaos
        </h1>
        <p
          data-hero-reveal
          className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
        >
          EventFlow turns scattered planning, registrations, and check-ins into one clean workflow so organizers can launch and run events with confidence.
        </p>
        <div data-hero-reveal className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button onClick={handleCreateEvent}>
            <CalendarPlus size={16} />
            Create Event
          </Button>
          <Button as={NavLink} to="/events" variant="secondary">
            <LayoutGrid size={16} />
            Browse Events
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;