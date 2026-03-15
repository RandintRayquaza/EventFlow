import { CalendarPlus, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Button from '../../../../shared/Button';
import Section from '../../../../shared/Section';

const Cta = () => {
  return (
    <Section id="cta" className="border-t border-[var(--color-border)] bg-[#060b09] py-28">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[#0d1412] p-8 sm:p-10 md:p-14">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,rgba(34,197,94,0)_65%)] blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">Final chapter</p>
            <h2 className="mt-4 font-['Sora'] text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to turn your next event into a seamless experience?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
              Build the event page, coordinate your team, open registrations, and run check-in from one platform designed for modern execution.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#2a3331] bg-[#0a100e] px-4 py-3 text-sm text-gray-300">Host workflow in a single dashboard</div>
              <div className="rounded-xl border border-[#2a3331] bg-[#0a100e] px-4 py-3 text-sm text-gray-300">Attendee path from discovery to entry</div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 lg:max-w-sm lg:justify-end">
            <Button as={NavLink} to="/login" className="h-auto w-full justify-center px-7 py-4 text-[15px]">
              <CalendarPlus size={18} />
              Get Started Free
            </Button>
            <Button
              as={NavLink}
              to="/signup"
              variant="secondary"
              className="h-auto w-full justify-center border-[#32423b] bg-[#0a100e] px-7 py-4 text-[15px]"
            >
              Create account
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Cta;