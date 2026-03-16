import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MotionArticle = motion.article;

const featuredEvents = [
  {
    id: 'hackathon',
    type: 'Hackathon',
    title: 'BuildSprint: AI Product Hackathon',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
    date: 'Apr 18, 2026',
    location: 'Bengaluru, India',
  },
  {
    id: 'meetup',
    type: 'Tech Meetup',
    title: 'Scale Systems Meetup',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=80',
    date: 'May 06, 2026',
    location: 'Mumbai, India',
  },
  {
    id: 'workshop',
    type: 'Workshop',
    title: 'React Architecture Workshop',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    date: 'Jul 02, 2026',
    location: 'Pune, India',
  },
  {
    id: 'startup',
    type: 'Startup Event',
    title: 'Founder GTM Summit',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    date: 'Sep 14, 2026',
    location: 'Delhi, India',
  },
];

const FeaturedEvents = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWrapper = scrollWrapperRef.current;
      if (!scrollWrapper || window.innerWidth < 1024) return;

      const totalWidth = scrollWrapper.scrollWidth;
      const windowWidth = window.innerWidth;
      
      const xDistance = -(totalWidth - windowWidth + 120);

      gsap.to(scrollWrapper, {
        x: xDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${Math.abs(xDistance)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="featured-events" ref={containerRef} className="relative z-30 min-h-screen border-t border-[var(--color-border)] bg-[#000000] pt-28 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">Format Showcase</p>
            <h2 className="mt-4 font-['Sora'] text-4xl font-bold tracking-tight text-white md:text-5xl" data-scroll-reveal>
              Engineered for every event scale
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-gray-400" data-scroll-reveal>
            From intimate technical workshops to multi-day startup summits, EventFlow adapts to your operational requirements.
          </p>
        </div>
      </div>

      <div className="relative mt-16 hidden w-full overflow-hidden pb-12 pt-4 lg:block">
        <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none" />
        
        <div className="w-[100vw] overflow-visible">
          <div className="pl-[max(1.5rem,calc((100vw-80rem)/2))]">
            <div ref={scrollWrapperRef} className="flex gap-6 w-max will-change-transform">
              {featuredEvents.map((event, index) => (
                <MotionArticle
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex w-[480px] shrink-0 flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[#0a0a0a] transition-colors hover:border-white/20"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white">
                      {event.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-['Sora'] text-2xl font-semibold tracking-tight text-white">{event.title}</h3>
                    <div className="mt-5 space-y-3 text-sm text-gray-400">
                      <p className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-white" />
                        {event.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={16} className="text-white" />
                        {event.location}
                      </p>
                    </div>

                    <button className="mt-auto inline-flex items-center gap-2 border-t border-[#262626] pt-4 text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                      View format details
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </MotionArticle>
              ))}
              <div className="w-20 shrink-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto px-6 pb-4 lg:hidden">
        {featuredEvents.map((event) => (
          <article
            key={`${event.id}-mobile`}
            className="w-[82vw] max-w-[360px] shrink-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#0a0a0a]"
          >
            <img src={event.image} alt={event.title} className="h-48 w-full object-cover grayscale" />
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white">{event.type}</p>
              <h3 className="mt-2 font-['Sora'] text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                <CalendarDays size={14} className="text-white" />
                {event.date}
              </p>
              <p className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                <MapPin size={14} className="text-white" />
                {event.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
