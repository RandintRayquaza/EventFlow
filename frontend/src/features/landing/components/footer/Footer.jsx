import { NavLink } from 'react-router-dom';
import Container from '../../../../shared/Container';
import Logo from '../../../../shared/Logo';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Features', to: '/features' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Docs', to: '/docs' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1b3326]/80 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-start">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
              EventFlow is the operational layer for teams running developer events, conferences, and workshops.
            </p>
          </div>
          <nav className="grid gap-3 text-sm text-[var(--color-text-muted)]" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'text-[var(--color-accent)]' : 'transition-colors hover:text-[var(--color-text)]'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-[#1a3225] pt-6 text-xs tracking-wide text-[#86a290]">
          <p>© {year} EventFlow. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;