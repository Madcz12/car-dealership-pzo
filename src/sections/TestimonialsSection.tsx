import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../types';

// TODO: Reemplazar con testimonios reales verificados antes de publicar en producción — no usar citas ficticias en el sitio en vivo.
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Excelente atención desde el primer momento. La entrega de mi ZXAuto Grandlion fue rápida, con toda la documentación en regla y un acompañamiento impecable.',
    author: 'C. Mendoza',
    roleOrVehicle: 'Comprador ZXAuto Grandlion 0km',
    initials: 'CM',
  },
  {
    id: 'test-2',
    quote: 'El proceso de consignación de mi vehículo fue completamente transparente y seguro. Lograron la venta en tiempo récord y con total respaldo legal.',
    author: 'R. González',
    roleOrVehicle: 'Cliente Consignación',
    initials: 'RG',
  },
  {
    id: 'test-3',
    quote: 'El servicio técnico del taller oficial es sumamente profesional. Encontré repuestos originales de inmediato y el diagnóstico fue certero.',
    author: 'M. Fernández',
    roleOrVehicle: 'Cliente Taller & Repuestos',
    initials: 'MF',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonios"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-gray-light text-brand-dark"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-brand-accent mb-2">
            Testimonios
          </span>
          <h2 
            id="testimonials-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight mb-4"
          >
            Experiencias de Confianza
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body">
            La satisfacción de quienes confían en nosotros es el mayor respaldo de nuestro concesionario.
          </p>
        </div>

        {/* Grid de 3 Tarjetas de Testimonio (EARS #2, #3, #4, #5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <article 
              key={t.id}
              className="relative flex flex-col justify-between p-6 sm:p-8 bg-brand-white border border-brand-gray hover:border-brand-black/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Marca de Comilla Decorativa */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-brand-accent/80" aria-hidden="true" />
              </div>

              {/* Cita Textual */}
              <blockquote className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 font-body flex-grow">
                “{t.quote}”
              </blockquote>

              {/* Autor e Iniciales (Sin fotos ficticias de personas) */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-gray/60">
                <div className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-heading font-bold text-xs shrink-0 select-none">
                  {t.initials}
                </div>
                <div className="text-left overflow-hidden">
                  <p className="font-heading font-bold text-sm text-brand-black truncate">
                    {t.author}
                  </p>
                  <p className="text-xs text-neutral-500 truncate">
                    {t.roleOrVehicle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
