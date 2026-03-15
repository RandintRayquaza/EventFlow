import { ShieldCheck, CreditCard } from 'lucide-react';
import Section from '../../../../shared/Section';

const PaymentSecurity = () => {
  return (
    <Section id="payment-security" className="bg-[#020403] relative border-t border-[var(--color-border)] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Payment Section */}
          <div className="flex flex-col justify-center rounded-3xl border border-[var(--color-border)] bg-[#050807] p-8 md:p-12 relative overflow-hidden" data-scroll-reveal>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CreditCard size={120} />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8">
              <CreditCard size={28} />
            </div>
            <h3 className="font-['Sora'] text-3xl font-bold text-white mb-4">Seamless Paid Events</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Hosts can easily monetize their events. Connect your Stripe account instantly to start accepting global payments.
            </p>
            <div className="space-y-4 max-w-sm">
               <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                 <span className="text-gray-300">Platform fee</span>
                 <span className="font-mono text-green-400 text-sm font-bold opacity-80 border border-green-500/20 px-2 py-1 rounded bg-green-500/10">Small fee</span>
               </div>
               <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                 <span className="text-gray-300">Host revenue</span>
                 <span className="font-mono text-white text-sm font-bold opacity-80 border border-gray-700 px-2 py-1 rounded bg-gray-800">Keep the most</span>
               </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="flex flex-col justify-center rounded-3xl border border-[var(--color-border)] bg-[#050807] p-8 md:p-12 relative overflow-hidden" data-scroll-reveal>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={120} />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mb-8">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-['Sora'] text-3xl font-bold text-white mb-4">Enterprise Grade Security</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              We handle authentication and ticket validation securely so you can focus on building an amazing experience.
            </p>
            <div className="space-y-4">
              <ul className="space-y-3">
                 {[
                   'One-click Google Authentication',
                   'Fraud-safe encrypted QR ticket generation',
                   'Instant real-time ticket validation',
                   'Private team dashboard access modes'
                 ].map((item, idx) => (
                   <li key={idx} className="flex gap-3 items-center text-gray-300">
                     <ShieldCheck size={18} className="text-green-500/80" />
                     {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PaymentSecurity;
