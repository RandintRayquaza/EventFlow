import { createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const variantStyles = {
  primary:
    'border border-[var(--color-primary)] bg-[var(--color-primary)] text-[#05200f] hover:bg-white hover:border-white shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]',
  secondary:
    'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-strong)] hover:border-[#374151]',
};

const Button = ({
  as = 'button',
  className = '',
  variant = 'primary',
  children,
  ...props
}) => {
  const baseClassName =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-semibold transition-all duration-200';
  
  const variantClassName = variantStyles[variant] ?? variantStyles.primary;

  return createElement(
    as,
    {
      className: twMerge(clsx(baseClassName, variantClassName, className)),
      ...props,
    },
    children,
  );
};

export default Button;