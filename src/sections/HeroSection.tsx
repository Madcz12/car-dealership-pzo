import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-[70vh] flex items-center justify-center bg-brand-white text-brand-navy px-4 py-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-semibold uppercase tracking-wider">
          Concesionaria Oficial en Puerto Ordaz
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-brand-navy leading-tight">
          Tu próximo vehículo 0km <br className="hidden sm:inline" />
          <span className="text-brand-accent">empieza en VeneCars</span>
        </h1>
        <p className="text-brand-navy/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Representantes oficiales de Venucia y ZXAuto en el Estado Bolívar. Venta de 0km, consignación segura, servicio técnico especializado y repuestos originales.
        </p>
      </div>
    </section>
  );
};
