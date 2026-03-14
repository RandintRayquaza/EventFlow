import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="EventFlow home">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#22c55e66] bg-[#22c55e1a]">
        <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-[#4ade80] to-[#22c55e] shadow-[0_0_16px_rgba(34,197,94,0.6)]" />
      </span>
      <span className="font-['Sora'] text-lg font-semibold tracking-tight text-[var(--color-text)]">EventFlow</span>
    </Link>
  );
};

export default Logo;