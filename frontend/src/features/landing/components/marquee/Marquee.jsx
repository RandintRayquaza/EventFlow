const tags = [
  'Hackathons',
  'Tech Meetups',
  'Conferences',
  'Developer Workshops',
  'Speaker Management',
  'Registration Flow',
  'Session Scheduling',
  'Post-Event Follow-up',
];

const Marquee = () => {
  const doubledTags = [...tags, ...tags];

  return (
    <section className="overflow-hidden border-y border-[#1b3326]/80 bg-[#0b110d] py-4" aria-label="EventFlow capabilities">
      <div className="marquee-track flex min-w-max items-center gap-3 pr-3">
        {doubledTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-full border border-[#264f38] bg-[#101a13] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[#9eb8a9]"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;