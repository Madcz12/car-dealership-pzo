import React from 'react';
import { MessageCircle, CheckCircle2, Car } from 'lucide-react';
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
      className="group flex flex-col bg-[#141416] border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden text-white"
      aria-labelledby={`vehicle-title-${vehicle.id}`}
    >
      {/* Contenedor de Imagen con tratamiento estático o placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
        {vehicle.imageUrl ? (
          <img
            src={vehicle.imageUrl}
            alt={vehicle.imageAlt || `${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-neutral-400 bg-neutral-950 border border-dashed border-neutral-800">
            <Car className="w-10 h-10 mb-2 text-neutral-600" />
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-neutral-300">
              Placeholder Imagen
            </span>
            <span className="text-[10px] text-neutral-500 mt-0.5">
              {vehicle.brand} {vehicle.model}
            </span>
          </div>
        )}

        {/* Badges superiores: Marca y Estado */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-1 text-xs font-heading font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-xs text-white border border-white/20 shadow-md">
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
          <span className="text-[11px] font-medium text-white/90 bg-black/80 backdrop-blur-xs px-2 py-0.5 border border-white/10">
            {vehicle.type}
          </span>
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-5">
        <div>
          {/* Título del Modelo */}
          <div className="mb-3">
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
              {vehicle.brand}
            </p>
            <h3 
              id={`vehicle-title-${vehicle.id}`}
              className="font-heading font-extrabold text-2xl text-white tracking-tight"
            >
              {vehicle.model}
            </h3>
          </div>

          {/* Chips de especificaciones clave */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800">
            {vehicle.specs.map((spec, idx) => (
              <div 
                key={idx} 
                className="flex flex-col bg-neutral-900/90 p-2 border border-neutral-800 rounded-none text-left"
              >
                <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                  {spec.label}
                </span>
                <span className="text-xs font-semibold text-neutral-200 truncate" title={spec.value}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Colores disponibles opcionales */}
          {vehicle.availableColors && vehicle.availableColors.length > 0 && (
            <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
              <span className="text-[11px] font-medium">Colores:</span>
              <span className="text-[11px] font-semibold text-neutral-300">
                {vehicle.availableColors.join(', ')}
              </span>
            </div>
          )}
        </div>

        {/* Sección inferior: Precio y Botón CTA a WhatsApp */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
              Precio Oficial
            </span>
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
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
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-heading font-bold text-white bg-brand-accent hover:bg-brand-accent-hover active:bg-brand-accent-hover transition-colors duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white group/btn shrink-0"
            aria-label={`Consultar disponibilidad para ${vehicle.brand} ${vehicle.model} por WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </article>
  );
};

