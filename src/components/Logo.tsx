import React from 'react';
import logoImg from '../assets/images/logo/venecars-logotype.webp';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  isLight = false,
  showText = true,
}) => {
  return (
    <a 
      href="#inicio" 
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy rounded-lg p-0.5 transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="VeneCars Motors - Ir al inicio"
    >
      <img 
        src={logoImg} 
        alt="VeneCars Motors" 
        className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 ${
          isLight ? 'brightness-0 invert' : ''
        }`}
        loading="eager"
        decoding="async"
      />
      {showText && (
        <div className="flex items-center gap-1.5 sm:gap-2 select-none">
          <span className={`font-teko text-base sm:text-lg md:text-xl uppercase font-bold tracking-wider leading-none ${isLight ? 'text-brand-white' : 'text-brand-navy'}`}>
            Venecars
          </span>
          <span className={`font-orbitron text-xs sm:text-sm md:text-[15px] uppercase font-bold tracking-widest leading-none ${isLight ? 'text-brand-white/90' : 'text-brand-navy'}`}>
            Motors
          </span>
        </div>
      )}
    </a>
  );
};
