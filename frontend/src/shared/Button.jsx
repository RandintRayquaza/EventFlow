import { createElement } from 'react';

const variantStyles = {
  primary:
    'border border-[#38d76f]/60 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-[#05200f] shadow-[0_14px_40px_rgba(34,197,94,0.32)] hover:shadow-[0_18px_44px_rgba(34,197,94,0.42)]',
  secondary:
    'border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text)] hover:border-[#37d76e] hover:bg-[rgba(34,197,94,0.08)]',
};

const Button = ({
  as = 'button',
  className = '',
  variant = 'primary',
  children,
  ...props
}) => {
  const baseClassName =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300';
  const variantClassName = variantStyles[variant] ?? variantStyles.primary;

  return createElement(
    as,
    {
      className: `${baseClassName} ${variantClassName} ${className}`,
      ...props,
    },
    children,
  );
};

export default Button;