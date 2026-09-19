import React from 'react';
import { ShieldCheck, FileCheck, Sparkles, Users, MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';
import type { ConsignmentBenefit } from '../types';

export const CONSIGNMENT_BENEFITS: (ConsignmentBenefit & { icon: React.ReactNode })[] = [
  {
    id: 'benefit-peritaje',
    title: 'Peritaje Profesional',
    description: 'Evaluación mecánica y estética rigurosa para respaldar el valor real de tu automóvil.',
    icon: <ShieldCheck className="w-6 h-6 text-brand-black" />,
  },
  {
    id: 'benefit-juridico',
    title: 'Seguridad Jurídica',
    description: 'Gestión documental y validación legal completa, protegiéndote de riesgos y trámites dudosos.',
    icon: <FileCheck className="w-6 h-6 text-brand-black" />,
  },
  {
    id: 'benefit-exposicion',
    title: 'Máxima Exposición',
    description: 'Tu vehículo exhibido en nuestro showroom de alta afluencia y canales digitales oficiales.',
    icon: <Sparkles className="w-6 h-6 text-brand-black" />,
  },
  {
    id: 'benefit-atencion',
    title: 'Cero Complicaciones',
    description: 'Nos encargamos de atender a los compradores calificados y filtrar ofertas serias por ti.',
    icon: <Users className="w-6 h-6 text-brand-black" />,
  },
];

export const ConsignmentSection: React.FC = () => {
  const whatsappNumber = '584140000000'; // TODO: Confirmar con el cliente
  const whatsappMessage = encodeURIComponent(
    'Hola VeneCars Motors, deseo solicitar información y asesoría para consignar mi vehículo.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section 
      id="consignacion" 
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-gray-light text-brand-dark"
      aria-labelledby="consignacion-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-brand-accent mb-2">
            Consignación de Vehículos
          </span>
          <h2 
            id="consignacion-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight mb-4"
          >
            Consignación Segura y Transparente
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body">
            Vende tu vehículo con respaldo profesional, seguridad jurídica y el mejor alcance de mercado en Puerto Ordaz.
          </p>
        </div>

        {/* Grid de 4 Pilares de Beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {CONSIGNMENT_BENEFITS.map((benefit) => (
            <div 
              key={benefit.id}
              className="flex flex-col items-start p-6 bg-brand-white border border-brand-gray/80 hover:border-brand-black/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 mb-4 bg-brand-gray-light border border-brand-gray flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner CTA hacia WhatsApp */}
        <div className="max-w-2xl mx-auto text-center bg-brand-white border border-brand-gray p-8 sm:p-10 shadow-sm">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-black mb-3">
            ¿Listo para vender tu automóvil?
          </h3>
          <p className="text-sm text-neutral-600 mb-6 font-body">
            Agenda una cita de inspección y tasación sin costo con uno de nuestros especialistas.
          </p>
          <Button
            variant="primary"
            size="lg"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<MessageSquare className="w-4 h-4 text-brand-whatsapp" />}
            iconPosition="right"
            className="w-full sm:w-auto px-8 py-3.5 shadow-md"
          >
            Consignar mi vehículo
          </Button>
        </div>

      </div>
    </section>
  );
};
