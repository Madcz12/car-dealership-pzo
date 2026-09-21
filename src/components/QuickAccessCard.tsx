import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ServiceCard } from '../types';

export interface QuickAccessCardProps {
  card: ServiceCard;
  index?: number;
}

export const QuickAccessCard: React.FC<QuickAccessCardProps> = ({ card, index }) => {
  const isExternal = card.isExternal || card.ctaLink.startsWith('http') || card.ctaLink.startsWith('https');

  return (
    <div 
      className="group relative flex flex-col justify-end overflow-hidden bg-brand-black min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] border border-brand-border hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl select-none"
      role="article"
      aria-label={card.title}
    >
      {/* Imagen de fondo a pantalla completa dentro de la tarjeta */}
      <img
        src={card.imageUrl}
        alt={card.imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Overlay oscuro semitransparente para contraste AA garantizado */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/60 to-brand-black/30 group-hover:from-brand-black/90 group-hover:via-brand-black/50 group-hover:to-brand-black/20 transition-colors duration-300" 
        aria-hidden="true"
      />

      {/* Número / Indicador sutil de pilar en esquina superior */}
      {typeof index === 'number' && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center justify-center text-xs font-heading font-bold text-white/60 tracking-widest uppercase px-2 py-1 bg-black/40 backdrop-blur-xs border border-brand-border">
            0{index + 1}
          </span>
        </div>
      )}

      {/* Contenido inferior: Título, descripción opcional y Botón Outline */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col items-start gap-4">
        {card.subtitle && (
          <span className="text-xs uppercase font-bold tracking-wider text-brand-accent">
            {card.subtitle}
          </span>
        )}

        <h3 className="font-heading font-extrabold text-2xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug">
          {card.title}
        </h3>

        {card.description && (
          <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed font-body">
            {card.description}
          </p>
        )}

        {/* Botón con borde (estilo outline) tipo 'Ver ahora' */}
        <a
          href={card.ctaLink}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-2.5 text-sm font-heading font-semibold text-white border border-white/80 hover:border-white hover:bg-white hover:text-brand-black active:bg-neutral-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent group/btn"
          aria-label={`${card.ctaText} - ${card.title}`}
        >
          <span>{card.ctaText}</span>
          {isExternal ? (
            <ArrowUpRight className="w-4 h-4 text-white/80 group-hover/btn:text-brand-black transition-colors" />
          ) : (
            <ArrowRight className="w-4 h-4 text-white/80 group-hover/btn:text-brand-black group-hover/btn:translate-x-0.5 transition-all" />
          )}
        </a>
      </div>
    </div>
  );
};

