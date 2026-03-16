import { useState, useEffect } from 'react';
import { Plus, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../../../../shared/Button';
import Container from '../../../../shared/Container';
import Logo from '../../../../shared/Logo';

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Events', to: '/featured-events' },
];

const navLinkClassName = ({ isActive }) => {
  return `rounded-full px-5 py-2 text-[13px] tracking-wide font-medium transition-all duration-300 ${
    isActive ? 'text-black bg-white' : 'text-gray-400 hover:text-white hover:bg-white/10'
  }`;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) { setTimeout(() => setMobileMenuOpen(false), 0); }
  }, [location.pathname, mobileMenuOpen]);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 pt-4 px-4 sm:px-6 `}
      >
        <div className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 overflow-hidden ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-2xl border border-white/10 shadow-sm' 
            : 'bg-transparent border-transparent'
        }`}>
          <div className="flex h-16 items-center justify-between px-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo />
            </motion.div>
            
            <nav className="hidden items-center md:flex bg-black p-1 rounded-full border border-white/10" aria-label="Main navigation">
              {navItems.map((item, i) => (
                <motion.div 
                  key={item.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <NavLink to={item.to} end={item.to === '/'} className={navLinkClassName}>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden items-center md:flex"
            >
              <Button as={NavLink} to="/login" variant="secondary" className="h-9 px-5 text-[13px] bg-transparent border-none text-gray-300 hover:text-white hover:bg-white/10 rounded-full mr-2 transition-colors">
                Log in
              </Button>
              <Button as={NavLink} to="/signup" className="h-9 px-6 text-[13px] rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-none">
                Start for free
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 top-24 z-40 rounded-3xl bg-[#000000]/95 backdrop-blur-3xl border border-[#262626] shadow-2xl md:hidden overflow-hidden"
          >
            <div className="h-full p-6 flex flex-col pt-10">
              <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                {navItems.map((item, i) => (
                  <motion.div
                    key={`${item.to}-mobile`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <NavLink to={item.to} end={item.to === '/'} className={({isActive}) => `block px-4 py-4 rounded-2xl text-[18px] font-medium transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/5">
                <div className="grid grid-cols-2 gap-3">
                  <Button as={NavLink} to="/login" variant="secondary" className="w-full justify-center py-4 rounded-xl bg-white/5 border-none">
                    Log in
                  </Button>
                  <Button as={NavLink} to="/signup" className="w-full justify-center py-4 rounded-xl">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;