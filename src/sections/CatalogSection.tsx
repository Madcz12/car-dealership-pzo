import React, { useState, useMemo } from 'react';
import { VehicleCard } from '../components/VehicleCard';
import type { Vehicle } from '../types';
import { Car } from 'lucide-react';

// TODO: Reemplazar imágenes de referencia con las fotografías oficiales provistas por el cliente.
// Datos semilla confirmados según Sección 5 de Spec 004
export const VEHICLES_DATA: Vehicle[] = [
  {
    id: 'veh-zxauto-grandlion',
    brand: 'ZXAuto',
    model: 'Grandlion',
    type: 'Pickup 4x4',
    priceDisplay: 'Consultar',
    priceNote: 'TODO: Precio sujeto a cotización oficial',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pick-up ZXAuto Grandlion 4x4 0km en exhibición oficial',
    badge: '0km Oficial',
    availableColors: ['Azul', 'Blanco'],
    specs: [
      { label: 'Motor', value: 'Mitsubishi 2.0L Turbo' },
      { label: 'Transmisión', value: '8 Velocidades' },
      { label: 'Tracción', value: '4x4 Todo Terreno' },
      { label: 'Garantía', value: '3 años / 100.000 km' },
    ],
  },
  {
    id: 'veh-venucia-v-online',
    brand: 'Venucia',
    model: 'V-Online',
    type: 'SUV Confort',
    priceDisplay: '$37.500',
    priceNote: 'Precio de lista oficial en USD',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'SUV Venucia V-Online 1.5L Turbo 0km en exhibición oficial',
    badge: '0km Oficial',
    specs: [
      { label: 'Motor', value: 'Mitsubishi 1.5L Turbo (187 HP)' },
      { label: 'Transmisión', value: 'Automática Dual 7 Vel.' },
      { label: 'Consumo', value: '7.1L / 100km' },
      { label: 'Garantía', value: '3 años / 100.000 km' },
    ],
  },
];

const BRAND_FILTERS = ['Todos', 'Venucia', 'ZXAuto'] as const;

export const CatalogSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Todos');

  const filteredVehicles = useMemo(() => {
    if (selectedBrand === 'Todos') {
      return VEHICLES_DATA;
    }
    return VEHICLES_DATA.filter((v) => v.brand.toLowerCase() === selectedBrand.toLowerCase());
  }, [selectedBrand]);

  return (
    <section 
      id="catalogo"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand-white text-brand-dark"
      aria-labelledby="catalog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección (Mismo patrón visual que 005-servicios: label + título + subtítulo) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-brand-accent mb-2">
            Catálogo 0km
          </span>
          <h2 
            id="catalog-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight mb-4"
          >
            Nuestros Vehículos
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body">
            Descubre nuestra gama de vehículos nuevos con garantía de fábrica, respaldo técnico y disponibilidad inmediata en Puerto Ordaz.
          </p>
        </div>

        {/* Chips de filtro por marca (EARS #2, #3) */}
        <div 
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
          role="group"
          aria-label="Filtrar vehículos por marca"
        >
          {BRAND_FILTERS.map((brand) => {
            const isActive = selectedBrand === brand;
            return (
              <button
                key={brand}
                type="button"
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                  isActive 
                    ? 'bg-brand-black text-white shadow-md' 
                    : 'bg-brand-gray-light text-neutral-700 hover:bg-brand-gray hover:text-black border border-brand-gray/80'
                }`}
                aria-pressed={isActive}
              >
                {brand}
              </button>
            );
          })}
        </div>

        {/* Grid de vehículos responsive: 1 col (<640px), 2 cols (640-1023px), 3 cols (>=1024px) (EARS #7, #8, #9) */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          /* Estado vacío si no hay vehículos en esa categoría (EARS #10) */
          <div className="text-center py-12 px-4 border border-dashed border-brand-gray bg-brand-gray-light max-w-lg mx-auto">
            <Car className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <p className="text-base font-heading font-semibold text-brand-black mb-1">
              No hay vehículos disponibles por el momento
            </p>
            <p className="text-sm text-neutral-500 mb-4">
              Estamos actualizando el inventario de la marca seleccionada.
            </p>
            <button
              type="button"
              onClick={() => setSelectedBrand('Todos')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-black border border-brand-black hover:bg-brand-black hover:text-white transition-colors"
            >
              Ver todos los vehículos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
