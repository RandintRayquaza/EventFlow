import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please enter all details');
      return;
    }
    
    // Fake login simulation for UI purpose until hooked
    toast.success('Login Successful');
    navigate('/');
  };

  const handleGoogleLogin = () => {
    toast.success('Google Login simulated');
  };

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-white/30">
      {/* Left side imagery / branding */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-zinc-950 p-10 lg:flex border-r border-zinc-800">
        <div className="relative z-10 flex items-center gap-2 font-medium text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
          EventFlow
        </div>
        
        <div className="relative z-10 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This platform has revolutionized how we manage and discover events. Everything is seamless and beautifully designed.&rdquo;
            </p>
            <footer className="text-sm text-zinc-400">Sofia Davis, Event Organizer</footer>
          </blockquote>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="mx-auto w-full max-w-sm lg:w-[350px]">
          <div className="flex flex-col space-y-2 text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-zinc-400">
              Enter your email to sign in to your account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none text-zinc-300">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors text-white"
                placeholder="m@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none text-zinc-300">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors text-white"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white transition-colors h-10"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-zinc-500">
                Or continue with
              </span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="inline-flex w-full items-center justify-center rounded-md border border-zinc-800 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-colors h-10"
          >
            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
            </svg>
            Google
          </button>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-white hover:underline underline-offset-4">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
