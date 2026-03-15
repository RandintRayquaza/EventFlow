import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="EventFlow home">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10">
        <span className="h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary)]" />
      </span>
      <span className="font-['Sora'] text-xl font-bold tracking-tight text-[var(--color-text)]">EventFlow







        
      </span>
    </Link>
  );
};

export default Logo;