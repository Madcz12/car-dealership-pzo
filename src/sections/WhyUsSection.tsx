import React from 'react';
import { ShieldCheck, Wrench, FileCheck, Car } from 'lucide-react';

export interface BentoItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlight?: string;
  icon: React.ReactNode;
  spanClass: string;
}

export const BENTO_METRICS: BentoItem[] = [
  {
    id: 'bento-garantia',
    badge: 'Respaldo de Fábrica',
    title: 'Garantía Oficial de 3 Años o 100.000 km',
    description: 'Comercializamos unidades 0km de concesionario oficial con entrega inmediata, inspección pre-entrega y cobertura directa de garantía.',
    highlight: '100% Oficial',
    icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
    spanClass: 'md:col-span-2 bg-brand-white',
  },
  {
    id: 'bento-marcas',
    badge: 'Marcas Representadas',
    title: 'Venucia & ZXAuto',
    description: 'Ingeniería probada y motores de clase mundial para SUVs de confort y pick-ups 4x4 utilitarias.',
    highlight: '0km Exclusivos',
    icon: <Car className="w-8 h-8 text-brand-black" />,
    spanClass: 'md:col-span-1 bg-brand-white',
  },
  {
    id: 'bento-taller',
    badge: 'Postventa Integral',
    title: 'Taller Especializado y Repuestos',
    description: 'Diagnóstico computarizado, técnicos certificados y disponibilidad de repuestos legítimos en un solo lugar.',
    highlight: 'Servicio Certificado',
    icon: <Wrench className="w-8 h-8 text-brand-black" />,
    spanClass: 'md:col-span-1 bg-brand-white',
  },
  {
    id: 'bento-consignacion',
    badge: 'Seguridad Comercial',
    title: 'Consignación Transparente y Sin Riesgos',
    description: 'Asesoría jurídica y comercial completa para la compra y venta de vehículos en el Estado Bolívar, protegiendo tu patrimonio en cada etapa.',
    highlight: 'Cero Intermediarios Dudosos',
    icon: <FileCheck className="w-8 h-8 text-brand-accent" />,
    spanClass: 'md:col-span-2 bg-brand-white',
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section 
      id="nosotros" 
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-gray-light text-brand-dark"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Institucional */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-brand-accent mb-2">
            ¿Por qué elegirnos?
          </span>
          <h2 
            id="why-us-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight mb-4"
          >
            Solidez, Respaldo y Confianza Oficial
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body">
            Combinamos la representación de marcas globales con atención especializada, transparencia jurídica y servicio postventa en Puerto Ordaz.
          </p>
        </div>

        {/* Bento Grid de Cifras e Institucional (Spec 007 & constitution.md) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_METRICS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 border border-brand-gray/80 hover:border-brand-black/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between ${item.spanClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-brand-gray-light border border-brand-gray/60">
                    {item.icon}
                  </div>
                  {item.highlight && (
                    <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-1 bg-brand-black text-white">
                      {item.highlight}
                    </span>
                  )}
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-400 block mb-1">
                  {item.badge}
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-black mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed font-body mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
