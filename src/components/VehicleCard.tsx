import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import type { Vehicle } from '../types';

export interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const whatsappNumber = '584140000000'; // TODO: Confirmar con el cliente
  const whatsappMessage = encodeURIComponent(
    `Hola VeneCars Motors, quiero más información sobre el ${vehicle.brand} ${vehicle.model}.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <article 
      className="group flex flex-col bg-brand-white border border-brand-gray hover:border-brand-black/30 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
      aria-labelledby={`vehicle-title-${vehicle.id}`}
    >
      {/* Contenedor de Imagen con tratamiento estático de alta calidad */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <img
          src={vehicle.imageUrl}
          alt={vehicle.imageAlt}
          className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges superiores: Marca y Estado */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-1 text-xs font-heading font-extrabold uppercase tracking-wider bg-brand-black text-white shadow-md">
            {vehicle.brand}
          </span>
          {vehicle.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-brand-accent text-white shadow-md">
              <CheckCircle2 className="w-3 h-3" />
              {vehicle.badge}
            </span>
          )}
        </div>

        {/* Tipo de carrocería en esquina inferior */}
        <div className="absolute bottom-2 left-3">
          <span className="text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 border border-white/10">
            {vehicle.type}
          </span>
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-5">
        <div>
          {/* Título del Modelo */}
          <div className="mb-3">
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">
              {vehicle.brand}
            </p>
            <h3 
              id={`vehicle-title-${vehicle.id}`}
              className="font-heading font-extrabold text-2xl text-brand-black tracking-tight"
            >
              {vehicle.model}
            </h3>
          </div>

          {/* Chips de especificaciones clave (2-4 specs) */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-brand-gray/60">
            {vehicle.specs.map((spec, idx) => (
              <div 
                key={idx} 
                className="flex flex-col bg-brand-gray-light p-2 border border-brand-gray/40 rounded-none text-left"
              >
                <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                  {spec.label}
                </span>
                <span className="text-xs font-semibold text-brand-dark truncate" title={spec.value}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Colores disponibles opcionales */}
          {vehicle.availableColors && vehicle.availableColors.length > 0 && (
            <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
              <span className="text-[11px] font-medium">Colores:</span>
              <span className="text-[11px] font-semibold text-neutral-700">
                {vehicle.availableColors.join(', ')}
              </span>
            </div>
          )}
        </div>

        {/* Sección inferior: Precio y Botón CTA a WhatsApp */}
        <div className="pt-4 border-t border-brand-gray/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
              Precio Oficial
            </span>
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-brand-black tracking-tight">
              {vehicle.priceDisplay}
            </span>
            {vehicle.priceNote && (
              <span className="text-[10px] text-neutral-400 block">
                {vehicle.priceNote}
              </span>
            )}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-heading font-bold text-white bg-brand-black hover:bg-neutral-800 active:bg-black transition-colors duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent group/btn shrink-0"
            aria-label={`Consultar disponibilidad para ${vehicle.brand} ${vehicle.model} por WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 text-brand-whatsapp group-hover/btn:scale-110 transition-transform" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </article>
  );
};
