import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../../features/landing/components/footer/Footer';
import Navbar from '../../features/landing/components/navbar/Navbar';
import Button from '../../shared/Button';
import Section from '../../shared/Section';
import { isAuthenticated } from '../../utils/auth';

const CreateEventPage = () => {
  const [draftSaved, setDraftSaved] = useState(false);

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: '/events/new' }} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setDraftSaved(true);
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="pt-24">
        <Section className="pt-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#9ebbaa]">Organizer Workspace</p>
            <h1 className="font-['Sora'] text-4xl font-semibold tracking-tight sm:text-5xl">Create A New Event</h1>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Configure your event details, publishing schedule, and attendee-facing information from one flow.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 sm:p-8">
            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Event Title</span>
              <input className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]" placeholder="Enter event title" />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Description</span>
              <textarea
                rows={4}
                className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]"
                placeholder="Describe the event agenda and outcomes"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-[var(--color-text-muted)]">Date</span>
                <input type="date" className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]" />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="text-[var(--color-text-muted)]">Time</span>
                <input type="time" className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]" />
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Venue</span>
              <input className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]" placeholder="Venue name and city" />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Banner URL</span>
              <input className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]" placeholder="https://..." />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit">Save Draft</Button>
              <Button type="button" variant="secondary">
                Publish Event
              </Button>
              {draftSaved ? <span className="text-sm text-[#92c9a8]">Draft saved locally.</span> : null}
            </div>
          </form>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default CreateEventPage;
