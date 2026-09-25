import React, { useEffect, useRef, useState } from 'react';
import { QuickAccessCard, type ServiceCardItem } from '../components/QuickAccessCard';

export const SERVICES_DATA: ServiceCardItem[] = [
  {
    id: 'servicio-venta-0km',
    title: 'Venta 0km',
    subtitle: 'CONCESIONARIO OFICIAL',
    description: 'Modelos nuevos Venucia y ZXAuto con garantía de fábrica y entrega inmediata en Puerto Ordaz.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Vehículos 0km en exhibición oficial VeneCars Motors',
    ctaText: 'Ver Catálogo',
    ctaLink: '#catalogo',
    isExternal: false,
    span: 'full',
  },
  {
    id: 'servicio-consignacion',
    title: 'Consignación',
    subtitle: 'VENTA GARANTIZADA',
    description: 'Vende tu vehículo con respaldo profesional, seguridad jurídica y máxima visibilidad de mercado.',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Servicio de consignación segura de vehículos en VeneCars Motors',
    ctaText: 'Consignar Ahora',
    ctaLink: '#consignacion',
    isExternal: false,
    span: 'half',
  },
  {
    id: 'servicio-taller',
    title: 'Taller Especializado',
    subtitle: 'SERVICIO TÉCNICO',
    description: 'Mantenimiento preventivo, correctivo y diagnóstico computarizado con técnicos certificados.',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Taller mecánico y servicio técnico especializado VeneCars Motors',
    ctaText: 'Agendar Cita',
    ctaLink: 'https://wa.me/584140000000?text=Hola%20VeneCars%20Motors,%20deseo%20agendar%20una%20cita%20de%20servicio%20t%C3%A9cnico%20y%20taller.',
    isExternal: true,
    span: 'half',
  },
  {
    id: 'servicio-repuestos',
    title: 'Repuestos Originales',
    subtitle: 'POSTVENTA OFICIAL',
    description: 'Inventario de repuestos y accesorios legítimos garantizados para vehículos Venucia y ZXAuto.',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Venta de repuestos legítimos y accesorios en VeneCars Motors',
    ctaText: 'Consultar Piezas',
    ctaLink: 'https://wa.me/584140000000?text=Hola%20VeneCars%20Motors,%20quiero%20consultar%20disponibilidad%20de%20repuestos.',
    isExternal: true,
    span: 'full',
  },
];

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="servicios" 
      className="relative py-16 sm:py-20 lg:py-28 bg-brand-white text-brand-dark"
      aria-labelledby="servicios-heading"
    >
      {/* Anchor de compatibilidad con enlaces hacia #taller-repuestos */}
      <div id="taller-repuestos" className="absolute -top-24 invisible" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-brand-accent mb-2.5">
            Ecosistema Integral
          </span>
          <h2 
            id="servicios-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight mb-4"
          >
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body">
            Respaldamos tu experiencia automotriz en cada etapa: desde la adquisición de tu 0km hasta el mantenimiento y provisión de repuestos en Puerto Ordaz.
          </p>
        </div>

        {/* Bento Grid asimétrico: 1 col (mobile), 2 cols con full/half spans (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((card, index) => (
            <QuickAccessCard 
              key={card.id} 
              card={card} 
              index={index} 
              isVisible={hasAnimated}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
