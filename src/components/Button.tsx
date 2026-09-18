import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'navy' | 'accent' | 'outline' | 'outline-white' | 'ghost';
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
  variant = 'navy',
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
  const baseStyles = "inline-flex items-center justify-center font-heading font-medium tracking-normal rounded-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3 text-sm sm:text-base gap-2.5",
    lg: "px-8 py-3.5 text-base sm:text-lg gap-3",
  };

  const variantStyles = {
    navy: "bg-brand-navy text-white hover:bg-brand-navy-light active:bg-brand-navy-dark border border-brand-navy hover:border-brand-navy-light shadow-sm",
    accent: "bg-brand-accent text-white hover:bg-brand-accent-hover active:bg-brand-accent-hover border border-brand-accent shadow-sm",
    outline: "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    'outline-white': "border border-white/80 text-white hover:bg-white hover:text-brand-navy",
    ghost: "text-brand-navy hover:bg-brand-gray/50",
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

