import { NavLink } from 'react-router-dom';
import Footer from '../../features/landing/components/footer/Footer';
import Navbar from '../../features/landing/components/navbar/Navbar';
import Button from '../../shared/Button';
import Section from '../../shared/Section';

const PlaceholderPage = ({ title, description }) => {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="pt-24">
        <Section className="pt-20">
          <div className="max-w-3xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-8 sm:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#9ebbaa]">Coming Soon</p>
            <h1 className="font-['Sora'] text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 text-[var(--color-text-muted)]">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as={NavLink} to="/events">
                Browse Events
              </Button>
              <Button as={NavLink} to="/" variant="secondary">
                Back To Home
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
