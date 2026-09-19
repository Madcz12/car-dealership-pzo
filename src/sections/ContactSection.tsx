import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '../components/Button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-white">
            Visítanos o Contáctanos
          </h2>
          <p className="text-brand-gray text-base">
            Estamos ubicados en Puerto Ordaz para brindarte la mejor atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-6 bg-white/5 border border-white/10 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-white mb-3" />
            <h3 className="font-heading font-semibold text-lg text-brand-white mb-2">Ubicación</h3>
            <p className="text-sm text-brand-gray">
              Av. Caroní, al lado de la estación de servicio Paseo Caroní 1.<br />
              Puerto Ordaz, Edo. Bolívar.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 flex flex-col items-center">
            <Phone className="w-8 h-8 text-white mb-3" />
            <h3 className="font-heading font-semibold text-lg text-brand-white mb-2">Atención Directa</h3>
            <p className="text-sm text-brand-gray mb-4">
              Lunes a Sábado • Asesoría personalizada
            </p>
            {/* TODO: Reemplazar con el número oficial cuando se confirme */}
            <Button variant="primary" size="sm" href="https://wa.me/584140000000" target="_blank" className="border border-white/20">
              Escribir por WhatsApp
            </Button>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 flex flex-col items-center">
            <svg 
              className="w-8 h-8 text-white mb-3" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <h3 className="font-heading font-semibold text-lg text-brand-white mb-2">Redes Sociales</h3>
            <p className="text-sm text-brand-gray mb-4">
              Síguenos en nuestra cuenta oficial
            </p>
            <a 
              href="https://instagram.com/venecarspzo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-brand-gray hover:underline"
            >
              @venecarspzo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
