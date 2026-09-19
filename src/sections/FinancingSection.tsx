import React from 'react';
import { Calculator, Users, KeyRound, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import type { FinancingStep } from '../types';

export const FINANCING_STEPS: (FinancingStep & { icon: React.ReactNode })[] = [
  {
    stepNumber: '01',
    title: 'Cotiza tu vehículo',
    description: 'Selecciona el modelo 0km de tu preferencia de nuestro catálogo oficial y solicita tu cotización inicial.',
    icon: <Calculator className="w-6 h-6 text-brand-black" />,
  },
  {
    stepNumber: '02',
    title: 'Evalúa tu plan con un asesor',
    description: 'Diseñamos juntos una opción de pago flexible adaptada a tus necesidades y posibilidades financieras.',
    icon: <Users className="w-6 h-6 text-brand-black" />,
  },
  {
    stepNumber: '03',
    title: 'Retira tu 0km',
    description: 'Completa la entrega oficial en nuestro concesionario con garantía de fábrica y respaldo postventa garantizado.',
    icon: <KeyRound className="w-6 h-6 text-brand-black" />,
  },
];

export const FinancingSection: React.FC = () => {
  const whatsappNumber = '584140000000'; // TODO: Confirmar con el cliente
  const whatsappMessage = encodeURIComponent(
    'Hola VeneCars Motors, quiero información sobre financiamiento para un vehículo 0km.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section 
      id="financiamiento"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-white text-brand-dark"
      aria-labelledby="financing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección (Patrón visual unificado: label + título + subtítulo) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-brand-accent mb-2">
            Financiamiento
          </span>
          <h2 
            id="financing-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight mb-4"
          >
            Estrena tu vehículo en 3 pasos
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body">
            Facilitamos tu camino hacia tu nuevo 0km con asesoría experta, procesos ágiles y planes de pago transparentes.
          </p>
        </div>

        {/* Flujo de 3 Pasos Numerados (EARS #2, #3, #4, #5, #6) */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-14">
          
          {/* Línea conectora horizontal para pantallas desktop/tablet (md+) */}
          <div 
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-brand-gray/80 -translate-y-6 z-0" 
            aria-hidden="true"
          />

          {FINANCING_STEPS.map((step, index) => (
            <div 
              key={step.stepNumber}
              className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 bg-brand-gray-light border border-brand-gray/80 hover:border-brand-black/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Badge Numérico y Contenedor de Icono */}
              <div className="relative mb-5 flex items-center justify-center">
                <div className="w-14 h-14 bg-brand-white border border-brand-gray flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>
                {/* Badge numérico en esquina */}
                <span className="absolute -top-2.5 -right-3 text-[11px] font-heading font-extrabold text-white bg-brand-black px-2 py-0.5 shadow-sm">
                  {step.stepNumber}
                </span>
              </div>

              {/* Título del Paso */}
              <h3 className="font-heading font-bold text-xl text-brand-black mb-3">
                {step.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-neutral-600 leading-relaxed font-body">
                {step.description}
              </p>

              {/* Indicador de flecha para mobile entre pasos */}
              {index < FINANCING_STEPS.length - 1 && (
                <div className="md:hidden mt-6 text-neutral-400" aria-hidden="true">
                  <ArrowRight className="w-5 h-5 rotate-90 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Banner CTA Final hacia WhatsApp (EARS #7) */}
        <div className="max-w-2xl mx-auto text-center pt-2">
          <Button
            variant="primary"
            size="lg"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<MessageSquare className="w-4 h-4 text-brand-whatsapp" />}
            iconPosition="right"
            className="w-full sm:w-auto px-8 py-3.5 shadow-lg"
          >
            Hablar con un asesor de financiamiento
          </Button>
          <p className="text-xs text-neutral-500 mt-3 font-medium">
            Atención directa por WhatsApp • Respuesta inmediata en horario laboral
          </p>
        </div>

      </div>
    </section>
  );
};
