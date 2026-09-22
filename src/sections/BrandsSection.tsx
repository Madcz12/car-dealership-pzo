import React from 'react';
import type { BrandLogo } from '../types';
import venuciaLogo from '../assets/images/brands/venucia.svg';
import zxautoLogo from '../assets/images/brands/zxauto.svg';

export const BRANDS_DATA: BrandLogo[] = [
  {
    id: 'brand-venucia',
    name: 'Venucia',
    logoUrl: venuciaLogo,
    altText: 'Logo oficial de Venucia',
    description: 'Vehículos SUV y sedanes con tecnología e innovación de clase mundial.',
  },
  {
    id: 'brand-zxauto',
    name: 'ZXAuto',
    logoUrl: zxautoLogo,
    altText: 'Logo oficial de ZXAuto',
    description: 'Pick-ups y utilitarios 4x4 de alta resistencia y durabilidad.',
  },
];

// Generamos 4 repeticiones del par para garantizar una pista horizontal densa y sin cortes
const REPEATED_BRANDS = [
  ...BRANDS_DATA,
  ...BRANDS_DATA,
  ...BRANDS_DATA,
  ...BRANDS_DATA,
];

export const BrandsSection: React.FC = () => {
  return (
    <section 
      id="marcas"
      role="region"
      aria-label="Marcas representadas: Venucia y ZXAuto"
      className="relative w-full py-8 sm:py-10 bg-brand-white border-y border-brand-gray/50 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-heading font-extrabold text-neutral-500">
          Distribuidor Autorizado Oficial en Puerto Ordaz
        </p>
      </div>

      {/* Contenedor de Marquesina con degradados laterales (fade) */}
      <div className="relative w-full overflow-hidden">
        
        {/* Degradado lateral izquierdo */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-white via-brand-white/80 to-transparent z-10" 
          aria-hidden="true"
        />

        {/* Degradado lateral derecho */}
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-white via-brand-white/80 to-transparent z-10" 
          aria-hidden="true"
        />

        {/* Pistas continuas de desplazamiento infinito */}
        <div 
          className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:justify-center motion-reduce:flex-wrap"
          tabIndex={0}
          aria-label="Pista de marcas representadas en movimiento continuo. Pase el cursor o enfoque para pausar."
        >
          {/* Pista 1 (Accesible para lectores de pantalla) */}
          <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-16 lg:gap-24 pr-12 sm:pr-16 lg:pr-24">
            {REPEATED_BRANDS.map((brand, idx) => (
              <div 
                key={`track1-${brand.id}-${idx}`}
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={brand.logoUrl} 
                  alt={brand.altText}
                  className="h-8 sm:h-10 w-auto object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Pista 2 (Duplicado para loop infinito perfecto sin saltos, oculto a lectores de pantalla) */}
          <div 
            className="flex shrink-0 items-center justify-around gap-12 sm:gap-16 lg:gap-24 pr-12 sm:pr-16 lg:pr-24 motion-reduce:hidden"
            aria-hidden="true"
          >
            {REPEATED_BRANDS.map((brand, idx) => (
              <div 
                key={`track2-${brand.id}-${idx}`}
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={brand.logoUrl} 
                  alt=""
                  className="h-8 sm:h-10 w-auto object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
