import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Calendar, Zap } from "lucide-react";
import { useAuthState, useAuthActions } from "../../Hooks/auth.hook";
import InputField from "../components/InputFiled";
import Button from "../components/Button";


const GoogleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// ─── Floating orb background ──────────────────────────────────
const BackgroundOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    <div style={{
      position: "absolute", top: "-10%", right: "-5%",
      width: 400, height: 400, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
      filter: "blur(40px)",
    }} />
    <div style={{
      position: "absolute", bottom: "-15%", left: "-10%",
      width: 500, height: 500, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)",
      filter: "blur(60px)",
    }} />
  </div>
);

// ─── Main Login page ──────────────────────────────────────────
const Login = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle, dismissError } = useAuthActions();
  const { loading, error, isAuthenticated } = useAuthState();

  const [form, setForm] = useState({ email: "", password: "" });
  const [fieldErrors, setFieldErrors] = useState({});

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  // Clear Redux error when user starts typing again
  useEffect(() => {
    if (error) dismissError();
  }, [form.email, form.password, error, dismissError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!form.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Enter a valid email";
    if (!form.password) errors.password = "Password is required";
    else if (form.password.length < 6) errors.password = "Min 6 characters";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length) { setFieldErrors(errors); return; }
    await login(form.email, form.password);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <BackgroundOrbs />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full max-w-5xl px-6 py-12">

        {/* ── Left: Brand panel ───────────────────────── */}
        <div className="flex flex-col gap-8 max-w-xs text-center lg:text-left">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg"
              style={{ background: "var(--color-primary)" }}>
              <Calendar size={18} color="#050807" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "var(--color-text)" }}>
              EventFlow
            </span>
          </div>

          <div>
            <h1 className="text-5xl font-extrabold leading-none mb-4"
              style={{ fontFamily: "'Sora', sans-serif", color: "var(--color-text)", letterSpacing: "-0.03em" }}>
              Plan.<br />
              <span style={{ color: "var(--color-primary)" }}>Execute.</span><br />
              Celebrate.
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              The event management platform built for people who move fast.
            </p>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {["RSVP tracking", "Live updates", "Team collab", "Free forever"].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}>
                <Zap size={10} color="var(--color-primary)" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Form card ─────────────────────────── */}
        <div
          className="w-full max-w-sm rounded-2xl p-8 flex flex-col gap-5"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
          }}
        >
          {/* Card header */}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "var(--color-text)" }}>
              Welcome back
            </h2>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Log in to your EventFlow account
            </p>
          </div>

          {/* Google button */}
          <Button variant="outline" fullWidth icon={GoogleIcon} onClick={loginWithGoogle}>
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <InputField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              icon={Mail}
              error={fieldErrors.email}
            />

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-text-muted)" }}>
                  Password
                </span>
                {/* ✅ React Router Link — no <a> tag */}
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium transition-colors"
                  style={{ color: "var(--color-primary)" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--color-primary)")}
                >
                  Forgot password?
                </Link>
              </div>
              <InputField
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                icon={Lock}
                error={fieldErrors.password}
              />
            </div>

            {/* Redux API error */}
            {error && (
              <div className="text-xs px-3 py-2.5 rounded-lg"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#f87171" }}>
                {error}
              </div>
            )}

            <Button type="submit" variant="primary" fullWidth loading={loading}>
              {loading ? "Logging in…" : "Log in to EventFlow"}
            </Button>
          </form>

          {/* Sign up link — React Router Link */}
          <p className="text-sm text-center" style={{ color: "var(--color-text-muted)" }}>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold"
              style={{ color: "var(--color-primary)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--color-primary)")}
            >
              Sign up free →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;