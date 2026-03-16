const tags = [
  'Event Discovery',
  'Event Organization',
  'Easy Participation',
  'Seamless Ticketing',
  'Participant Management',
  'Instant Check-ins',
  'Custom Layouts',
  'Smart Recommendations',
];

const Marquee = () => {
  const doubledTags = [...tags, ...tags, ...tags];

  return (
    <section className="overflow-hidden border-y border-[#262626] bg-[#0a0a0a] py-6 relative" aria-label="EventFlow capabilities">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="marquee-track flex min-w-max items-center gap-6 pr-6">
        {doubledTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-full border border-[#262626] bg-[#000000] px-6 py-3 text-[14px] font-semibold tracking-wider text-gray-400 hover:text-white hover:border-[#404040] hover:bg-[#111111] transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;