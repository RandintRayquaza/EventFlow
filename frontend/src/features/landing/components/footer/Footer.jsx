import { NavLink } from 'react-router-dom';
import Container from '../../../../shared/Container';
import Logo from '../../../../shared/Logo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/featured-events' },
  { label: 'Features', to: '/features' },
  { label: 'How It Works', to: '/how-it-works' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact', to: '/contact' },
];

const authLinks = [
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] pt-20 pb-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              EventFlow is the modern operational layer for technical teams running next-generation developer events, conferences, and meetups.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24 flex-wrap">
            <div>
              <h4 className="font-semibold text-white mb-6">Product</h4>
              <nav className="flex flex-col gap-4 text-[14px] text-[var(--color-text-muted)]">
                {navLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} end={link.to === '/'} className="hover:text-white transition-colors">
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Account</h4>
              <nav className="flex flex-col gap-4 text-[14px] text-[var(--color-text-muted)]">
                {authLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <nav className="flex flex-col gap-4 text-[14px] text-[var(--color-text-muted)]">
                {legalLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[var(--color-text-muted)]">
          <p>© {year} EventFlow Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with precision</span>
            <div className="h-1 w-1 rounded-full bg-[var(--color-primary)]"></div>
            <span>System Status: All systems operational</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;