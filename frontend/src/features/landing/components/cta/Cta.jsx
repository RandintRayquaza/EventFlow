import { CalendarPlus, LayoutGrid } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../../../shared/Button';
import Section from '../../../../shared/Section';
import { isAuthenticated } from '../../../../utils/auth';

const Cta = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    if (isAuthenticated()) {
      navigate('/events/new');
      return;
    }

    navigate('/login', { state: { from: '/events/new' } });
  };

  return (
    <Section id="cta">
      <div className="rounded-3xl border border-[#275038] bg-[linear-gradient(140deg,rgba(34,197,94,0.14),rgba(11,18,13,0.92)_34%,rgba(7,11,8,1)_100%)] p-8 sm:p-10 md:p-14">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#b8d9c5]">Launch Better Events</p>
          <h2 className="font-['Sora'] text-3xl font-semibold tracking-tight sm:text-4xl">
            Make Event Execution Feel Calm, Predictable, And Fast.
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            EventFlow gives your team one reliable place to run planning, communication, and execution without scattered tools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
      </div>
    </Section>
  );
};

export default Cta;