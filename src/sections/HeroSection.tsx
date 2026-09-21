import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquare, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import type { PromoSlide } from '../types';

// Slides de promociones configurables (Spec 002 & constitution.md)
// TODO: Actualizar vigencias, tasas de financiamiento y promociones oficiales con el cliente.
export const PROMO_SLIDES: PromoSlide[] = [
  {
    id: 'promo-financiamiento-0km',
    badge: 'Plan de Financiamiento Oficial',
    validity: 'TODO: Válido hasta fin de mes',
    title: 'Financiamiento Exclusivo',
    highlightedText: 'para tu próximo 0km',
    description: 'Estrena tu vehículo con cuotas adaptadas a tus posibilidades, aprobación ágil y respaldo de fábrica en Puerto Ordaz.',
    disclaimer: 'TODO: Sujeto a evaluación crediticia. Modelos Venucia y ZXAuto disponibles para entrega inmediata.',
    ctaText: 'Explorar Catálogo 0km',
    ctaLink: '#catalogo',
    ctaExternal: false,
    vehicles: [
      {
        modelName: 'GRANDLION',
        brand: 'ZXAuto',
        category: 'Pick-up 4x4',
        imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
        altText: 'Pick-up ZXAuto Grandlion 4x4 0km en exhibición oficial',
      },
      {
        modelName: 'V-ONLINE',
        brand: 'Venucia',
        category: 'SUV 1.5L Turbo',
        imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
        altText: 'SUV Venucia V-Online 0km en exhibición oficial',
      },
    ],
  },
  {
    id: 'promo-garantia-postventa',
    badge: 'Garantía & Respaldo Técnico',
    validity: 'TODO: Promoción permanente postventa',
    title: 'Garantía de Fábrica',
    highlightedText: 'y Servicio Especializado',
    description: 'Mantenimiento preventivo, diagnóstico computarizado y repuestos legítimos con personal técnico certificado.',
    disclaimer: 'TODO: Aplica para unidades Venucia y ZXAuto con historial de mantenimiento al día.',
    ctaText: 'Agendar Cita por WhatsApp',
    ctaLink: 'https://wa.me/584140000000?text=Hola%20VeneCars%20Motors,%20deseo%20agendar%20una%20cita%20de%20servicio%20t%C3%A9cnico.',
    ctaExternal: true,
    vehicles: [
      {
        modelName: 'V-ONLINE',
        brand: 'Venucia',
        category: 'SUV Confort',
        imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
        altText: 'Vehículo Venucia V-Online en taller oficial VeneCars Motors',
      },
    ],
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const totalSlides = PROMO_SLIDES.length;

  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex(newIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 350); // Transición suave máx 400ms por Spec 002
  }, [isTransitioning]);

  const goToPrev = useCallback(() => {
    const nextIdx = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    changeSlide(nextIdx);
  }, [currentSlideIndex, totalSlides, changeSlide]);

  const goToNext = useCallback(() => {
    const nextIdx = (currentSlideIndex + 1) % totalSlides;
    changeSlide(nextIdx);
  }, [currentSlideIndex, totalSlides, changeSlide]);

  // Soporte para gestos táctiles (Swipe en dispositivos móviles - Spec 002 EARS #8)
  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const currentSlide = PROMO_SLIDES[currentSlideIndex];

  return (
    <section 
      id="inicio" 
      role="region"
      aria-roledescription="carousel"
      aria-label="Promociones y Ofertas Destacadas de VeneCars Motors"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full text-brand-white overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
    >
      {/* Fondo: Imagen hero de alto impacto con overlay oscuro para contraste */}
      <div className="absolute inset-0">
        <img
          src="/HeroCarrousel/venecarshero.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Overlay oscuro para garantizar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenedor Principal del Banner Promocional */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:py-16 lg:py-20 min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
        
        <div
          key={currentSlide.id}
          className={`w-full transition-all duration-350 ease-out ${
            isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`Oferta ${currentSlideIndex + 1} de ${totalSlides}: ${currentSlide.title}`}
        >
          
          {/* Contenido de Texto Promocional */}
          <div className="max-w-2xl space-y-5 text-center lg:text-left z-10">
            
            {/* Badge de Oferta & Vigencia */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-black border border-brand-border text-white text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-brand-gray" />
                {currentSlide.badge}
              </span>

              {currentSlide.validity && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/10 text-gray-300 text-xs font-medium backdrop-blur-sm border border-brand-border">
                  <Calendar className="w-3 h-3 text-gray-400 shrink-0" />
                  {currentSlide.validity}
                </span>
              )}
            </div>

            {/* Titular Principal de la Oferta */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.15]">
              {currentSlide.title}{' '}
              {currentSlide.highlightedText && (
                <span className="text-gray-100 block sm:inline">
                  {currentSlide.highlightedText}
                </span>
              )}
            </h1>

            {/* Condiciones / Descripción de la Promoción */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              {currentSlide.description}
            </p>

            {/* Disclaimer breve de condiciones */}
            {currentSlide.disclaimer && (
              <p className="text-gray-400 text-xs italic max-w-lg mx-auto lg:mx-0">
                {currentSlide.disclaimer}
              </p>
            )}

            {/* Botón CTA Sólido */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Button
                variant="primary"
                size="lg"
                href={currentSlide.ctaLink}
                target={currentSlide.ctaExternal ? '_blank' : undefined}
                rel={currentSlide.ctaExternal ? 'noopener noreferrer' : undefined}
                icon={currentSlide.ctaExternal ? <MessageSquare className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto px-8 border border-brand-border shadow-xl"
              >
                {currentSlide.ctaText}
              </Button>
            </div>

          </div>

        </div>

      </div>

      {/* Flechas de Navegación Lateral (Manuales, solo desktop md+, Spec 002 EARS #5 y #8) */}
      {totalSlides > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Ver oferta anterior"
            className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center bg-black/80 hover:bg-black text-white border border-brand-border hover:border-white/30 backdrop-blur-md transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent active:scale-95 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Ver siguiente oferta"
            className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center bg-black/80 hover:bg-black text-white border border-brand-border hover:border-white/30 backdrop-blur-md transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent active:scale-95 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicadores de Puntos (Dots de navegación manual en parte inferior, Spec 002 EARS #5) */}
      {totalSlides > 1 && (
        <div 
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20 px-3 py-1.5 bg-black/50 border border-brand-border backdrop-blur-md"
          role="tablist"
          aria-label="Controles de navegación del carrusel"
        >
          {PROMO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Ir a oferta ${index + 1}: ${slide.title}`}
                onClick={() => changeSlide(index)}
                className={`h-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                  isActive 
                    ? 'w-8 bg-white border border-white/40' 
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            );
          })}
        </div>
      )}

    </section>
  );
};


