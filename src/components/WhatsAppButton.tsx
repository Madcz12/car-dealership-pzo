import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import type { WhatsAppConfig } from '../types';

interface WhatsAppButtonProps {
  config?: WhatsAppConfig;
}

// TODO: Reemplazar con el número oficial de WhatsApp de VeneCars Motors cuando sea confirmado por el cliente.
const DEFAULT_WHATSAPP_CONFIG: WhatsAppConfig = {
  phoneNumber: '584140000000', // Placeholder temporal (+58...)
  defaultMessage: 'Hola, quiero más información sobre sus vehículos y servicios en VeneCars Motors.',
};

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  config = DEFAULT_WHATSAPP_CONFIG 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(config.defaultMessage);
  const whatsappUrl = `https://wa.me/${config.phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip accesible con animación sutil */}
      <div 
        className={`hidden sm:flex items-center bg-brand-white text-brand-navy px-3.5 py-2 rounded-full shadow-lg border border-brand-gray text-xs font-medium tracking-normal transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
        role="tooltip"
        id="whatsapp-tooltip"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-brand-whatsapp mr-2 animate-pulse" />
        ¿Necesitas asesoría? <strong className="ml-1 font-semibold">Chatea con nosotros</strong>
      </div>

      {/* Botón flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-brand-whatsapp text-brand-white shadow-xl hover:bg-brand-whatsapp-hover transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-whatsapp/40"
        aria-label="Contactar por WhatsApp a VeneCars Motors"
        aria-describedby="whatsapp-tooltip"
      >
        {/* Anillo de pulso sutil */}
        <span className="absolute inset-0 rounded-full bg-brand-whatsapp opacity-30 group-hover:animate-ping" />
        
        {/* Icono de WhatsApp */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
};
