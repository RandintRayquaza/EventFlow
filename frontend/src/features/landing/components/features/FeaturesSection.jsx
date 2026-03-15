import { motion } from 'framer-motion';
import { CalendarDays, Users, ScanLine, Type, MapPin, Clock, Image as ImageIcon, QrCode } from 'lucide-react';
import Section from '../../../../shared/Section';
import { cardContainerVariants, cardItemVariants } from '../../../../utils/motionVariants';

const MotionGrid = motion.div;
const MotionCard = motion.article;

const FeaturesSection = () => {
  return (
    <Section id="features" className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-3xl mb-20 mx-auto text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">Platform Previews</p>
        <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold tracking-tight text-white">Experience The Workflow</h2>
        <p className="mt-6 text-[16px] text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Take a look at the powerful tools inside EventFlow designed to make planning, collaboration, and execution seamless.
        </p>
      </div>

      <MotionGrid
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Event Creation - Full Width Feature */}
        <MotionCard
          variants={cardItemVariants}
          className="col-span-1 lg:col-span-2 group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col lg:flex-row"
        >
          {/* UI Preview Side */}
          <div className="flex-1 p-8 md:p-12 lg:pr-6 flex items-center justify-center bg-[var(--color-bg)]/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-full max-w-md bg-[var(--color-surface-strong)] border border-[var(--color-border)] rounded-2xl p-6 shadow-2xl relative z-10">
              <div className="text-sm font-semibold text-white mb-5 pb-4 border-b border-[var(--color-border)] flex items-center gap-2">
                <CalendarDays size={16} className="text-[var(--color-primary)]" />
                Create New Event
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-wide">Event Title</div>
                  <div className="flex items-center gap-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-2.5">
                    <Type size={14} className="text-gray-500" />
                    <div className="text-sm text-gray-300">Scale Tech Meetup 2026</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-wide">Date</div>
                    <div className="flex items-center gap-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-2.5">
                      <CalendarDays size={14} className="text-gray-500" />
                      <div className="text-sm text-gray-300">Oct 24, 2026</div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-wide">Time</div>
                    <div className="flex items-center gap-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-2.5">
                      <Clock size={14} className="text-gray-500" />
                      <div className="text-sm text-gray-300">09:00 AM</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-wide">Venue</div>
                  <div className="flex items-center gap-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-2.5">
                    <MapPin size={14} className="text-gray-500" />
                    <div className="text-sm text-gray-300">SF MoMA, San Francisco</div>
                  </div>
                </div>
                <div className="border-2 border-dashed border-[var(--color-border)] rounded-xl py-6 flex flex-col items-center justify-center bg-[var(--color-bg)]/50 mt-2">
                  <ImageIcon size={20} className="text-gray-500 mb-2" />
                  <div className="text-xs text-gray-400">Click to upload banner image</div>
                </div>
                <div className="pt-2">
                  <div className="w-full bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold rounded-lg py-2.5 text-center text-sm cursor-pointer shadow-[0_0_15px_rgba(34,197,94,0.2)]">Publish Event</div>
                </div>
              </div>
            </div>
          </div>
          {/* Text Side */}
          <div className="w-full lg:w-[400px] p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[var(--color-border)]">
            <div className="mb-6 h-12 w-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)]">
              <CalendarDays size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-['Sora'] text-2xl font-semibold tracking-tight text-white mb-4">Frictionless Event Creation</h3>
            <p className="text-[16px] leading-relaxed text-[var(--color-text-muted)]">
              Launch your events instantly. Our builder provides all the necessary fields from dates to banners in a single clean interface. No complex wizards—just straight to publishing.
            </p>
          </div>
        </MotionCard>

        {/* Team Collaboration */}
        <MotionCard
          variants={cardItemVariants}
          className="col-span-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col"
        >
          <div className="h-[280px] p-8 flex items-center justify-center bg-[var(--color-bg)]/50 relative">
            <div className="w-full max-w-[320px] bg-[var(--color-surface-strong)] border border-[var(--color-border)] rounded-xl shadow-xl relative z-10">
              <div className="px-5 py-4 border-b border-[var(--color-border)] flex justify-between items-center">
                <div className="text-sm font-semibold text-white">Event Team</div>
                <div className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded-md font-medium">Invite</div>
              </div>
              <div className="p-2">
                {[
                  { name: 'Alex Rivera', email: 'alex@eventflow.com', role: 'Organizer', icon: 'A' },
                  { name: 'Jordan Smith', email: 'jordan@eventflow.com', role: 'Editor', icon: 'J' },
                  { name: 'Taylor Doe', email: 'taylor@eventflow.com', role: 'Scanner', icon: 'T' }
                ].map((user, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--color-bg)] cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center text-xs font-medium border border-gray-700">{user.icon}</div>
                      <div>
                        <div className="text-sm text-gray-200 font-medium">{user.name}</div>
                        <div className="text-[11px] text-gray-500">{user.email}</div>
                      </div>
                    </div>
                    <div className="text-xs border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-1 rounded text-gray-400">{user.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-8 md:px-10 border-t border-[var(--color-border)] flex-1">
            <div className="mb-5 h-10 w-10 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)]">
              <Users size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-['Sora'] text-xl font-semibold tracking-tight text-white mb-3">Granular Team Roles</h3>
            <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              Invite your entire crew. Assign specific permissions like Organizers, Editors, or Scanners to keep event management secure and highly coordinated.
            </p>
          </div>
        </MotionCard>

        {/* QR Check-in */}
        <MotionCard
          variants={cardItemVariants}
          className="col-span-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col"
        >
          <div className="h-[280px] p-8 flex items-center justify-center bg-[var(--color-bg)]/50 relative">
            <div className="w-full max-w-[260px] bg-[var(--color-surface-strong)] border border-[var(--color-border)] rounded-2xl shadow-xl p-5 relative z-10 flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-6">
                <ScanLine size={18} className="text-gray-400" />
                <div className="text-xs font-medium bg-green-500/20 text-green-400 px-2.5 py-1 rounded-full flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Scanner Active</div>
              </div>
              <div className="relative w-40 h-40">
                {/* QR Scanner Frame UI */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-primary)] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-primary)] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-primary)] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-primary)] rounded-br-xl"></div>
                <div className="absolute inset-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg flex items-center justify-center">
                  <QrCode size={64} className="text-gray-600 opacity-50" />
                </div>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--color-primary)] shadow-[0_0_15px_var(--color-primary)] animate-pulse"></div>
              </div>
              <div className="mt-6 text-sm text-gray-300 font-medium">Align QR code within frame</div>
            </div>
          </div>
          <div className="p-8 md:px-10 border-t border-[var(--color-border)] flex-1">
            <div className="mb-5 h-10 w-10 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)]">
              <ScanLine size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-['Sora'] text-xl font-semibold tracking-tight text-white mb-3">Instant QR Check-ins</h3>
            <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              Accelerate entry times at the venue. Our built-in scanning interface instantly verifies tickets on any mobile device.
            </p>
          </div>
        </MotionCard>

      </MotionGrid>
    </Section>
  );
};

export default FeaturesSection;