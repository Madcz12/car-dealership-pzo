import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'accent' | 'navy' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'accent',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  icon,
  iconPosition = 'right',
  ariaLabel,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    accent: "bg-brand-accent text-brand-white hover:bg-brand-accent-hover shadow-sm hover:shadow active:scale-[0.98]",
    navy: "bg-brand-navy text-brand-white hover:bg-brand-navy-light shadow-sm hover:shadow active:scale-[0.98]",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-white active:scale-[0.98]",
    ghost: "text-brand-navy hover:bg-brand-gray/50 active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
