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
  const doubledTags = [...tags, ...tags, ...tags];

  return (
    <section className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-5 relative" aria-label="EventFlow capabilities">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />
      <div className="marquee-track flex min-w-max items-center gap-4 pr-4">
        {doubledTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-2.5 text-[13px] font-semibold tracking-wider text-[var(--color-text-muted)] hover:text-white hover:border-[#374151] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;