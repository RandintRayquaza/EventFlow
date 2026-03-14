import { ShieldCheck, Ticket } from 'lucide-react';
import Button from '../../../shared/Button';

const EventRegistrationPanel = ({ onRegister, isLoggedIn, isRegistered }) => {
  return (
    <aside className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 lg:sticky lg:top-28">
      <p className="text-xs uppercase tracking-[0.22em] text-[#a7c9b3]">Attendee Access</p>
      <h3 className="mt-3 font-['Sora'] text-xl font-semibold tracking-tight">Reserve Your Spot</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
        Registration creates your event pass and keeps updates synced in one place.
      </p>

      <div className="mt-6 space-y-3 text-sm text-[var(--color-text-muted)]">
        <p className="flex items-center gap-2">
          <Ticket size={16} className="text-[var(--color-accent)]" />
          Digital ticket with QR check-in
        </p>
        <p className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-[var(--color-accent)]" />
          Secure attendee registration flow
        </p>
      </div>

      <Button onClick={onRegister} className="mt-7 w-full justify-center">
        {isLoggedIn ? (isRegistered ? 'Registered' : 'Register Event') : 'Login To Register'}
      </Button>
    </aside>
  );
};

export default EventRegistrationPanel;
