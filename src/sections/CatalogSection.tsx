import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CatalogSectionProps {
  onNavigateToCatalog?: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onNavigateToCatalog }) => {
  const handleClickCatalog = (e: React.MouseEvent) => {
    if (onNavigateToCatalog) {
      e.preventDefault();
      onNavigateToCatalog();
    } else {
      window.location.hash = '#/catalogo';
    }
  };

  return (
    <section 
      id="catalogo"
      className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-[#141416] text-white select-none overflow-hidden"
      aria-labelledby="catalog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal */}
        <h1 
          id="catalog-heading"
          className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-8 sm:mb-12 text-center sm:text-left"
        >
          Nuestros Vehículos
        </h1>

        {/* Layout Split: Texto + Botón a la izquierda, Imagen de Vehículos ampliada a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Lado Izquierdo: Descripción y Botón al Catálogo */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-body">
              Descubre nuestra gama de vehículos nuevos 0km, seminuevos certificados y servicio técnico especializado en Puerto Ordaz.
            </p>

            <div className="pt-2">
              <a
                href="#/catalogo"
                onClick={handleClickCatalog}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm sm:text-base font-heading font-bold text-brand-black bg-white hover:bg-neutral-200 active:bg-neutral-300 transition-all duration-200 shadow-md group select-none cursor-pointer"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Lado Derecho: Imagen de Vehículos en gran tamaño */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end overflow-visible">
            <img
              src="/OurVehicles/ourvehicles.webp"
              alt="Gama oficial de vehículos VeneCars Motors"
              className="w-full h-auto object-contain object-center max-h-[480px] sm:max-h-[560px] lg:max-h-[640px] drop-shadow-2xl transform lg:scale-110 xl:scale-115 origin-center lg:origin-right transition-transform duration-300"
              loading="eager"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
