import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../../shared/Button';
import Container from '../../../../shared/Container';
import { signIn } from '../../../../utils/auth';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirectTo = location.state?.from || '/events/new';

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn();
    navigate(redirectTo, { replace: true });
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Container className="flex min-h-screen items-center justify-center py-16">
        <div className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-8 sm:p-9">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9ebbaa]">Authentication</p>
          <h1 className="mt-3 font-['Sora'] text-3xl font-semibold tracking-tight">Create Your Account</h1>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">Start organizing, publishing, and managing events with EventFlow.</p>

          <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Full Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                required
                className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]"
                placeholder="Jane Doe"
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Email</span>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
                className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]"
                placeholder="you@company.com"
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="text-[var(--color-text-muted)]">Password</span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                required
                className="rounded-lg border border-[#294935] bg-[#0f1712] px-4 py-3 outline-none focus:border-[#4ade80]"
                placeholder="Create a password"
              />
            </label>

            <Button type="submit" className="mt-2 w-full justify-center">
              Sign Up
            </Button>
          </form>

          <p className="mt-5 text-sm text-[var(--color-text-muted)]">
            Already have an account?{' '}
            <NavLink to="/login" className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-text)]">
              Login
            </NavLink>
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Signup;