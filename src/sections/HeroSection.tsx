import React from 'react';
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';

// Oferta principal del Hero (Spec 002)
// TODO: Actualizar vigencias, tasas de financiamiento y promociones oficiales con el cliente.
export const HERO_PROMO = {
  badge: 'Plan de Financiamiento Oficial',
  validity: 'TODO: Válido hasta fin de mes',
  title: 'Financiamiento Exclusivo',
  highlightedText: 'para tu próximo 0km',
  description: 'Estrena tu vehículo con cuotas adaptadas a tus posibilidades, aprobación ágil y respaldo de fábrica en Puerto Ordaz.',
  disclaimer: 'TODO: Sujeto a evaluación crediticia. Modelos Venucia y ZXAuto disponibles para entrega inmediata.',
  ctaText: 'Explorar Catálogo 0km',
  ctaLink: '#catalogo',
  ctaExternal: false,
};

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="inicio" 
      role="region"
      aria-label="Promoción Destacada de VeneCars Motors"
      className="relative w-full text-brand-white overflow-hidden select-none"
    >
      {/* Fondo: Imagen hero con overlay oscuro para contraste */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/HeroCarrousel/venecarshero.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Overlay oscuro para garantizar legibilidad */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenedor Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:py-20 lg:py-28 min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
        
        {/* Bloque de Texto Promocional Inicial */}
        <div className="max-w-2xl space-y-5 text-center lg:text-left">
          
          {/* Badge de Oferta & Vigencia */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-black border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-brand-gray" />
              {HERO_PROMO.badge}
            </span>

            {HERO_PROMO.validity && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/10 text-gray-300 text-xs font-medium backdrop-blur-sm border border-white/10">
                <Calendar className="w-3 h-3 text-gray-400 shrink-0" />
                {HERO_PROMO.validity}
              </span>
            )}
          </div>

          {/* Titular Principal de la Oferta */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.15]">
            {HERO_PROMO.title}{' '}
            {HERO_PROMO.highlightedText && (
              <span className="text-gray-100 block sm:inline">
                {HERO_PROMO.highlightedText}
              </span>
            )}
          </h1>

          {/* Condiciones / Descripción de la Promoción */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
            {HERO_PROMO.description}
          </p>

          {/* Disclaimer breve de condiciones */}
          {HERO_PROMO.disclaimer && (
            <p className="text-gray-400 text-xs italic max-w-lg mx-auto lg:mx-0">
              {HERO_PROMO.disclaimer}
            </p>
          )}

          {/* Botón CTA Sólido */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <Button
              variant="primary"
              size="lg"
              href={HERO_PROMO.ctaLink}
              target={HERO_PROMO.ctaExternal ? '_blank' : undefined}
              rel={HERO_PROMO.ctaExternal ? 'noopener noreferrer' : undefined}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto px-8 border border-white/20 shadow-xl"
            >
              {HERO_PROMO.ctaText}
            </Button>
          </div>

        </div>

      </div>

    </section>
  );
};
