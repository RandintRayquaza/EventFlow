import Section from '../../../../shared/Section';

const Problem = () => {
  return (
    <Section id="problem" className="bg-[var(--color-bg)] py-32 border-t border-[var(--color-border)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1" data-scroll-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-red-500">The Problem</p>
          <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Event planning is <span className="text-red-500">broken.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Juggling spreadsheets, broken integrations, and chaotic check-in lines ruins the experience for both you and your attendees. Most event software is bloated, slow, and hard to use.
          </p>
        </div>
        <div className="flex-1 w-full flex justify-center" data-scroll-reveal>
            <div className="relative w-full max-w-md p-6 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm">
               <div className="space-y-4">
                  {[
                    "Where is the latest guest list?",
                    "The scanner app is crashing again!",
                    "Did we send the reminder emails?",
                    "Sales are not syncing with the dashboard."
                  ].map((text, i) => (
                     <div key={i} className={`p-4 rounded-xl border border-red-500/20 bg-black/40 text-gray-300 text-sm flex items-center gap-3 transform translate-x-${i % 2 === 0 ? '4' : '0'}`}>
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                         {text}
                     </div>
                  ))}
               </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Problem;
