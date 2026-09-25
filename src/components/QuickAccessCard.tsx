import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceCard } from '../types';

export interface ServiceCardItem extends ServiceCard {
  span?: 'full' | 'half';
}

export interface QuickAccessCardProps {
  card: ServiceCardItem;
  index?: number;
  isVisible?: boolean;
}

export const QuickAccessCard: React.FC<QuickAccessCardProps> = ({ card, index = 0, isVisible = true }) => {
  const isExternal = card.isExternal || card.ctaLink.startsWith('http') || card.ctaLink.startsWith('https');
  const isFull = card.span === 'full';

  const handleClick = (e: React.MouseEvent) => {
    if (!isExternal && card.ctaLink.startsWith('#')) {
      const targetId = card.ctaLink.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', card.ctaLink);
      }
    }
  };

  return (
    <div
      className={`
        ${isFull ? 'lg:col-span-2' : 'lg:col-span-1'}
        group relative rounded-3xl bg-[#F1F1F2] border border-neutral-200/90
        overflow-hidden flex flex-col justify-between
        transition-all duration-500 ease-out cursor-pointer
        hover:-translate-y-1.5 hover:shadow-xl hover:border-neutral-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
      role="article"
      aria-label={card.title}
      onClick={handleClick}
    >
      {/* Enlace invisible para cubrir toda la card de forma accesible */}
      <a
        href={card.ctaLink}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="absolute inset-0 z-10"
        aria-label={`${card.title} - ${card.ctaText || 'Conoce más'}`}
        tabIndex={-1}
        onClick={(e) => {
          if (!isExternal && card.ctaLink.startsWith('#')) {
            handleClick(e);
          }
        }}
      />

      {isFull ? (
        /* ============================================================ */
        /* LAYOUT BENTO ANCHO COMPLETO (Venta 0km / Repuestos Originales) */
        /* ============================================================ */
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-stretch">
          {/* Columna de Texto */}
          <div className="lg:col-span-6 p-7 sm:p-9 lg:p-10 flex flex-col justify-between z-20">
            <div>
              {card.subtitle && (
                <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-brand-accent mb-2.5">
                  {card.subtitle}
                </span>
              )}

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-black tracking-tight mb-3">
                {card.title}
              </h3>

              {card.description && (
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body max-w-md">
                  {card.description}
                </p>
              )}
            </div>

            {/* Botón interactivo píldora con ícono circular separado */}
            <div className="pt-6 sm:pt-8 relative z-30">
              <a
                href={card.ctaLink}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group/btn inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white hover:bg-brand-accent text-brand-black hover:text-white border border-neutral-300/80 hover:border-brand-accent shadow-xs transition-colors duration-200 select-none"
                onClick={handleClick}
              >
                <span className="text-sm font-heading font-bold transition-colors duration-200">
                  {card.ctaText || 'Conoce más'}
                </span>
                <span className="w-7 h-7 rounded-full bg-neutral-100 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-brand-black group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </span>
              </a>
            </div>
          </div>

          {/* Columna de Imagen (sangrado hacia la derecha y bordes) */}
          <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] overflow-hidden p-4 sm:p-6 lg:p-0 flex items-end justify-end">
            <div className="w-full h-full lg:absolute lg:inset-0 overflow-hidden rounded-2xl lg:rounded-none">
              <img
                src={card.imageUrl}
                alt={card.imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : (
        /* ============================================================ */
        /* LAYOUT BENTO MEDIA COLUMNA (Consignación / Taller Especializado) */
        /* ============================================================ */
        <div className="flex flex-col justify-between h-full">
          {/* Bloque superior de Texto */}
          <div className="p-7 sm:p-9 lg:p-10 flex flex-col z-20">
            {card.subtitle && (
              <span className="inline-block text-xs uppercase font-extrabold tracking-wider text-brand-accent mb-2.5">
                {card.subtitle}
              </span>
            )}

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-black tracking-tight mb-3">
              {card.title}
            </h3>

            {card.description && (
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body">
                {card.description}
              </p>
            )}

            {/* Botón interactivo píldora */}
            <div className="pt-6 relative z-30">
              <a
                href={card.ctaLink}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group/btn inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white hover:bg-brand-accent text-brand-black hover:text-white border border-neutral-300/80 hover:border-brand-accent shadow-xs transition-colors duration-200 select-none"
                onClick={handleClick}
              >
                <span className="text-sm font-heading font-bold transition-colors duration-200">
                  {card.ctaText || 'Conoce más'}
                </span>
                <span className="w-7 h-7 rounded-full bg-neutral-100 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-brand-black group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </span>
              </a>
            </div>
          </div>

          {/* Bloque inferior de Imagen (sangrado hacia la parte inferior) */}
          <div className="relative h-56 sm:h-64 lg:h-72 w-full overflow-hidden px-4 sm:px-6 pb-4 sm:pb-6 lg:px-8 lg:pb-8">
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-xs">
              <img
                src={card.imageUrl}
                alt={card.imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ServiceBentoCard = QuickAccessCard;
