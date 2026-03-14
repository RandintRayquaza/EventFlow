import { useMemo, useState } from 'react';
import { CalendarDays, Clock3, MapPin, User, Users } from 'lucide-react';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import EventRegistrationPanel from '../../features/events/components/EventRegistrationPanel';
import EventInfoRow from '../../features/events/components/EventInfoRow';
import { getEventById } from '../../features/events/data/eventsData';
import Footer from '../../features/landing/components/footer/Footer';
import Navbar from '../../features/landing/components/navbar/Navbar';
import Section from '../../shared/Section';
import { isAuthenticated } from '../../utils/auth';

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const event = useMemo(() => getEventById(id), [id]);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const loggedIn = isAuthenticated();

  const handleRegisterClick = () => {
    if (!loggedIn) {
      navigate('/login', { state: { from: `/events/${event.id}` } });
      return;
    }

    setIsRegistered(true);
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="pt-24">
        <Section className="pt-20">
          <NavLink to="/events" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
            Back to events
          </NavLink>

          <article className="mt-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/95">
            <div className="relative h-72 sm:h-80 lg:h-96">
              <img src={event.banner} alt={event.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b08] via-[#070b0800] to-[#070b0820]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-flex rounded-full border border-[#2f6b46] bg-[#12311e] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[#b9ddc6]">
                  {event.type}
                </span>
                <h1 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-tight sm:text-4xl">{event.title}</h1>
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.7fr_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#9ebaaa]">Event Overview</p>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">{event.longDescription}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-[var(--color-border)] bg-[#101813] p-4">
                    <EventInfoRow icon={CalendarDays} value={event.date} />
                  </div>
                  <div className="rounded-xl border border-[var(--color-border)] bg-[#101813] p-4">
                    <EventInfoRow icon={Clock3} value={event.time} />
                  </div>
                  <div className="rounded-xl border border-[var(--color-border)] bg-[#101813] p-4">
                    <EventInfoRow icon={MapPin} value={event.venue} />
                  </div>
                  <div className="rounded-xl border border-[var(--color-border)] bg-[#101813] p-4">
                    <EventInfoRow icon={User} value={`Organizer: ${event.organizer}`} />
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[#101813] p-4">
                  <EventInfoRow icon={Users} value={`${event.attendees} expected attendees`} />
                </div>
              </div>

              <EventRegistrationPanel
                onRegister={handleRegisterClick}
                isLoggedIn={loggedIn}
                isRegistered={isRegistered}
              />
            </div>
          </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailsPage;
