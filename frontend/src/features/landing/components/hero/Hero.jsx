import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Play, ArrowRight, CheckCircle2, Ticket, QrCode } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Button from '../../../../shared/Button';

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  const previewY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    // Subtle background animation
    const ctx = gsap.context(() => {
      gsap.to(".bg-glow", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        stagger: 2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="top" className="relative min-h-[120vh] flex flex-col items-center justify-start overflow-hidden bg-[var(--color-bg)] pt-40 md:pt-48 pb-32">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="bg-glow absolute left-[20%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,rgba(0,0,0,0)_60%)] blur-[60px]" />
        <div className="bg-glow absolute right-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.1)_0%,rgba(0,0,0,0)_60%)] blur-[60px]" />
      </div>

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity, scale }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-emerald-400 backdrop-blur-md mb-8"
        >
          <Sparkles size={14} />
          Event Operations, Perfected
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Sora'] text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-7xl lg:text-[5.5rem] max-w-4xl"
        >
          Run Events Without Chaos
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
        >
          The modern platform for hosting and joining events. Build, launch, and manage everything from registrations to QR check-ins in one cinematic flow.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button as={NavLink} to="/login" className="h-12 px-8 text-[15px] font-medium transition-transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Create Event
            <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button
            as={NavLink}
            to="/featured-events"
            variant="secondary"
            className="h-12 border-white/10 bg-white/5 px-8 text-[15px] text-white hover:bg-white/10 backdrop-blur-md"
          >
            Explore Events
            <Play size={16} className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero UI Preview */}
      <motion.div 
        style={{ y: previewY, opacity: contentOpacity }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mt-16 w-full max-w-5xl px-6 perspective-1000"
      >
        <div className="relative rounded-[2rem] border border-white/10 bg-[#090e0c]/80 p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] pointer-events-none" />
          
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-[#050807] shadow-inner">
            {/* Minimal Mock OS Header */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-[#080d0b]">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto flex h-6 items-center rounded-md bg-white/5 px-4 text-[11px] text-gray-500 font-mono">
                eventflow.io/dashboard
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 grid gap-8 md:grid-cols-3">
              {/* Event Creation */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2">Event Published</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Global Builders Meetup is now live. Landing page generated.
                </p>
                <div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-full bg-emerald-500 rounded-full" />
                </div>
              </div>

              {/* Registrations */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Ticket size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2">Registrations</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  2,410 tickets claimed. Approvals pending for 45 attendees.
                </p>
                <div className="mt-4 flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-[#090e0c] bg-gray-600" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#090e0c] bg-gray-500" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#090e0c] bg-gray-400" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#090e0c] bg-emerald-500/20 text-[10px] text-emerald-400">
                    +40
                  </div>
                </div>
              </div>

              {/* Check-in */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <QrCode size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2">Scanner Active</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  QR scanner is running. 142 attendees checked in so far.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-gray-400">Live sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
