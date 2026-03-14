import { Plus } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../../../shared/Button';
import Container from '../../../../shared/Container';
import Logo from '../../../../shared/Logo';
import { isAuthenticated } from '../../../../utils/auth';

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Events', to: '/events' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Docs', to: '/docs' },
];

const navLinkClassName = ({ isActive }) => {
  return `rounded-full px-3 py-2 text-sm transition-colors ${
    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
  }`;
};

const actionLinkClassName = ({ isActive }) => {
  return `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
  }`;
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    if (isAuthenticated()) {
      navigate('/events/new');
      return;
    }

    navigate('/login', { state: { from: '/events/new' } });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#1b3326]/80 bg-[#070b08]/85 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-1 md:flex">
            <NavLink to="/login" className={actionLinkClassName}>
              Login
            </NavLink>
            <NavLink to="/signup" className={actionLinkClassName}>
              Sign Up
            </NavLink>
            <Button onClick={handleCreateEvent} className="ml-2">
              <Plus size={16} />
              Create Event
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-4 md:hidden">
          <nav className="flex items-center gap-2 overflow-x-auto" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={`${item.to}-mobile`} to={item.to} end={item.to === '/'} className={navLinkClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <NavLink to="/login" className={actionLinkClassName}>
              Login
            </NavLink>
            <NavLink to="/signup" className={actionLinkClassName}>
              Sign Up
            </NavLink>
            <Button onClick={handleCreateEvent} className="ml-auto">
              <Plus size={16} />
              Create Event
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;