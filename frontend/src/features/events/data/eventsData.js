export const eventsData = [
  {
    id: 'global-hackathon-sprint',
    title: 'Global Hackathon Sprint',
    type: 'Hackathon',
    description: 'A 24-hour engineering sprint where teams build practical AI and cloud tools with mentor support.',
    longDescription:
      'Global Hackathon Sprint brings product engineers, students, and startup builders into one competition format. Teams get problem statements, live mentor feedback, and demo-day judging in a single command-run workflow.',
    banner:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
    alt: 'Developers working at a hackathon venue',
    date: 'April 18, 2026',
    time: '09:00 AM - 08:00 PM',
    venue: 'Nexus Arena, Bengaluru',
    organizer: 'EventFlow Labs',
    attendees: 420,
  },
  {
    id: 'scale-tech-meetup',
    title: 'Scale Tech Meetup',
    type: 'Tech Meetup',
    description: 'A practical meetup focused on backend scale stories, observability playbooks, and tooling demos.',
    longDescription:
      'Scale Tech Meetup is designed for engineering leads and platform teams. Sessions include production lessons, architecture reviews, and moderated networking for cross-team collaboration.',
    banner:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Attendees networking at a community meetup',
    date: 'May 06, 2026',
    time: '06:30 PM - 09:00 PM',
    venue: 'CraftHub, Mumbai',
    organizer: 'EventFlow Community',
    attendees: 180,
  },
  {
    id: 'future-dev-conference',
    title: 'Future Dev Conference',
    type: 'Conference',
    description: 'A multi-track conference on frontend systems, AI products, and platform engineering workflows.',
    longDescription:
      'Future Dev Conference hosts keynote sessions, breakout tracks, and sponsor demos across a full-day program. Organizers use EventFlow to coordinate speaker handoffs, agenda updates, and ticket scanning.',
    banner:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80',
    alt: 'Conference stage lights and seated audience',
    date: 'June 14, 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'Summit Center, Hyderabad',
    organizer: 'EventFlow Ops Team',
    attendees: 860,
  },
  {
    id: 'developer-workshop-series',
    title: 'Developer Workshop Series',
    type: 'Workshop',
    description: 'Hands-on workshop sessions for React, API design, and release engineering with guided labs.',
    longDescription:
      'Developer Workshop Series runs as an instructor-led format for early and mid-level engineers. The program includes lab kits, session-based attendance tracking, and real-time assignment submissions.',
    banner:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    alt: 'Small workshop group collaborating on laptops',
    date: 'July 02, 2026',
    time: '11:00 AM - 04:30 PM',
    venue: 'Launchpad Studio, Pune',
    organizer: 'DevRel Guild',
    attendees: 95,
  },
];

export const getEventById = (eventId) => {
  return eventsData.find((event) => event.id === eventId);
};
