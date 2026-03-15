import Section from '../../../../shared/Section';
import { ShieldCheck, Zap, Repeat } from 'lucide-react';

const Solution = () => {
  return (
    <Section id="solution" className="bg-[var(--color-surface)] py-32 border-t border-[var(--color-border)] relative overflow-hidden">
       <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
       <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="flex-1" data-scroll-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">The Solution</p>
          <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            EventFlow brings <span className="text-[#22c55e]">order.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Experience a unified platform where everything from the initial landing page to the final QR scan is perfectly synchronized in real time.
          </p>
          <div className="space-y-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Built for speed to handle high-traffic ticket drops.' },
              { icon: ShieldCheck, title: 'Secure Check-ins', desc: 'Encrypted QR codes prevent ticket fraud instantly.' },
              { icon: Repeat, title: 'Live Sync', desc: 'Registrations update everywhere immediately without refreshing.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                 <div className="p-3 bg-[#22c55e]/10 text-[#22c55e] rounded-xl border border-[#22c55e]/20 mt-1">
                    <feature.icon size={20} />
                 </div>
                 <div>
                    <h4 className="font-['Sora'] text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center perspective-[1000px]" data-scroll-reveal>
           <div className="relative w-full max-w-md p-2 rounded-3xl border border-[var(--color-border)] bg-black shadow-2xl transform rotate-y-[5deg] hover:rotate-y-0 transition-transform duration-700">
               <div className="rounded-2xl overflow-hidden border border-gray-800 bg-[#0c1110]">
                  <div className="h-10 bg-[#050807] flex items-center px-4 gap-2 border-b border-gray-800">
                     <span className="text-xs text-gray-500 font-mono">dashboard / live</span>
                  </div>
                  <div className="p-6">
                     <div className="flex justify-between items-center mb-6">
                        <div className="text-white font-medium">All Systems Operational</div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold">
                           <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> SYNCED
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="h-12 w-full bg-gray-900 rounded-lg flex items-center justify-between px-4">
                           <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs">1</div>
                              <span className="text-sm text-gray-300">Ticket DB</span>
                           </div>
                           <span className="text-xs text-green-400">100%</span>
                        </div>
                        <div className="h-12 w-full bg-gray-900 rounded-lg flex items-center justify-between px-4">
                           <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-xs">2</div>
                              <span className="text-sm text-gray-300">Auth Services</span>
                           </div>
                           <span className="text-xs text-green-400">10s ping</span>
                        </div>
                        <div className="h-12 w-full bg-gray-900 rounded-lg flex items-center justify-between px-4">
                           <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs">3</div>
                              <span className="text-sm text-gray-300">Scanner Endpoints</span>
                           </div>
                           <span className="text-xs text-green-400">Active</span>
                        </div>
                     </div>
                  </div>
               </div>
           </div>
        </div>
       </div>
    </Section>
  );
};

export default Solution;
