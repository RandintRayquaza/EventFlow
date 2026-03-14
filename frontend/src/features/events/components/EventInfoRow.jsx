import { createElement } from 'react';

const EventInfoRow = ({ icon, value }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
      {createElement(icon, { size: 15, className: 'text-[var(--color-accent)]' })}
      <span>{value}</span>
    </div>
  );
};

export default EventInfoRow;
