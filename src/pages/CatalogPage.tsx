import React, { useState, useMemo, useEffect } from 'react';
import { VehicleCard } from '../components/VehicleCard';
import type { Vehicle } from '../types';
import { Car, Wrench, Shield, ArrowLeft, Building2 } from 'lucide-react';

// ==========================================
// DATOS DE EJEMPLO: 0KM OFICIALES (PLACEHOLDERS)
// ==========================================
export const NEW_VEHICLES_DATA: Vehicle[] = [
  {
    id: 'veh-venucia-v-online',
    brand: 'Venucia',
    model: 'V-Online 1.5L Turbo',
    type: 'SUV Confort',
    priceDisplay: '$37.500',
    priceNote: 'Precio oficial de lista en USD',
    imageUrl: '', // Placeholder activo para agregar luego
    imageAlt: 'SUV Venucia V-Online 1.5L Turbo 0km en exhibición oficial',
    badge: '0km Oficial',
    availableColors: ['Blanco Perla', 'Gris Grafito', 'Negro Obsidiana'],
    specs: [
      { label: 'Motor', value: 'Mitsubishi 1.5L Turbo (187 HP)' },
      { label: 'Transmisión', value: 'Automática Dual 7 Vel.' },
      { label: 'Tracción', value: 'Delantera FWD' },
      { label: 'Garantía', value: '3 años / 100.000 km' },
    ],
  },
  {
    id: 'veh-zxauto-grandlion',
    brand: 'ZXAuto',
    model: 'Grandlion 4x4 Diesel/Gasolina',
    type: 'Pickup 4x4 Todo Terreno',
    priceDisplay: 'Consultar',
    priceNote: 'Precio sujeto a cotización oficial',
    imageUrl: '', // Placeholder activo para agregar luego
    imageAlt: 'Pick-up ZXAuto Grandlion 4x4 0km en exhibición oficial',
    badge: '0km Oficial',
    availableColors: ['Azul Metalizado', 'Blanco', 'Plata'],
    specs: [
      { label: 'Motor', value: 'Mitsubishi 2.0L Turbo' },
      { label: 'Transmisión', value: 'Automática 8 Velocidades' },
      { label: 'Tracción', value: '4x4 con Reductora' },
      { label: 'Capacidad', value: '1.000 kg de carga útil' },
    ],
  },
  {
    id: 'veh-venucia-star',
    brand: 'Venucia',
    model: 'Star Luxury MHEV',
    type: 'SUV Premium 5 Pasajeros',
    priceDisplay: '$42.000',
    priceNote: 'Disponibilidad inmediata en showroom',
    imageUrl: '', // Placeholder activo para agregar luego
    imageAlt: 'SUV Venucia Star Luxury Híbrido Ligero 0km',
    badge: '0km Oficial',
    availableColors: ['Gris Titanio', 'Blanco Nieve'],
    specs: [
      { label: 'Motor', value: '1.5L Turbo + Sistema 48V (190 HP)' },
      { label: 'Transmisión', value: '7DCT de Doble Embrague' },
      { label: 'Equipamiento', value: 'Pantalla 15.6" + Techo Panorámico' },
      { label: 'Garantía', value: '3 años / 100.000 km' },
    ],
  },
];

// ==========================================
// DATOS DE EJEMPLO: SEMINUEVOS / USADOS
// ==========================================
export const PRE_OWNED_VEHICLES_DATA: Vehicle[] = [
  {
    id: 'used-toyota-fortuner-2021',
    brand: 'Toyota',
    model: 'Fortuner 4.0L V6 4x4',
    type: 'SUV 7 Pasajeros',
    priceDisplay: '$48.500',
    priceNote: 'Año 2021 • 45.000 km',
    imageUrl: '', // Placeholder activo para agregar luego
    imageAlt: 'Toyota Fortuner 4x4 Seminueva en excelente estado',
    badge: 'Seminuevo Certificado',
    availableColors: ['Plata Metalizado'],
    specs: [
      { label: 'Año / Km', value: '2021 / 45.000 km' },
      { label: 'Motor', value: '4.0L V6 Gasolina' },
      { label: 'Transmisión', value: 'Automática 6 Vel. 4x4' },
      { label: 'Condición', value: 'Único dueño, servicios al día' },
    ],
  },
  {
    id: 'used-ford-explorer-2020',
    brand: 'Ford',
    model: 'Explorer XLT 2.3 EcoBoost',
    type: 'SUV Familiar 3 Filas',
    priceDisplay: '$39.900',
    priceNote: 'Año 2020 • 52.000 km',
    imageUrl: '', // Placeholder activo para agregar luego
    imageAlt: 'Ford Explorer XLT Seminueva',
    badge: 'Inspección 100 Puntos',
    availableColors: ['Negro Brillante'],
    specs: [
      { label: 'Año / Km', value: '2020 / 52.000 km' },
      { label: 'Motor', value: '2.3L Turbo EcoBoost (300 HP)' },
      { label: 'Transmisión', value: 'Automática 10 Velocidades' },
      { label: 'Equipamiento', value: 'Cuero, Techo Panorámico, SYNC 3' },
    ],
  },
  {
    id: 'used-jeep-grand-cherokee-2022',
    brand: 'Jeep',
    model: 'Grand Cherokee Laredo 4x4',
    type: 'SUV Premium 4x4',
    priceDisplay: '$54.000',
    priceNote: 'Año 2022 • 28.000 km',
    imageUrl: '', // Placeholder activo para agregar luego
    imageAlt: 'Jeep Grand Cherokee Seminueva',
    badge: 'Garantía Concesionario',
    availableColors: ['Gris Granito'],
    specs: [
      { label: 'Año / Km', value: '2022 / 28.000 km' },
      { label: 'Motor', value: '3.6L Pentastar V6' },
      { label: 'Tracción', value: 'Quadra-Trac I 4WD' },
      { label: 'Condición', value: 'Como nueva, historial completo' },
    ],
  },
];

// ==========================================
// DATOS DE EJEMPLO: PARA EMPRESAS / FLOTAS
// ==========================================
export const COMMERCIAL_VEHICLES_DATA: Vehicle[] = [
  {
    id: 'comm-zxauto-terralord-chasis',
    brand: 'ZXAuto',
    model: 'Terralord Chasis Cabina 4x4',
    type: 'Vehículo Comercial / Flota',
    priceDisplay: 'Consultar Flotilla',
    priceNote: 'Precios especiales por volumen corporativo',
    imageUrl: '', // Placeholder activo
    imageAlt: 'ZXAuto Terralord Chasis Cabina para empresas',
    badge: 'Flotas & Empresas',
    availableColors: ['Blanco Corporativo', 'Plata'],
    specs: [
      { label: 'Motor', value: 'Isuzu 2.5L Turbo Diésel' },
      { label: 'Transmisión', value: 'Manual 6 Vel. Heavy Duty' },
      { label: 'Capacidad', value: '1.500 kg de carga útil' },
      { label: 'Garantía Flota', value: '3 años / 100.000 km' },
    ],
  },
  {
    id: 'comm-zxauto-grandlion-work',
    brand: 'ZXAuto',
    model: 'Grandlion Work Edition 4x4',
    type: 'Pickup Utilitaria Minera / Petrolera',
    priceDisplay: 'Cotización B2B',
    priceNote: 'Equipamiento especial disponible',
    imageUrl: '', // Placeholder activo
    imageAlt: 'ZXAuto Grandlion Work Edition para trabajo pesado',
    badge: 'Uso Rudo / Industrial',
    availableColors: ['Blanco', 'Gris'],
    specs: [
      { label: 'Motor', value: 'Mitsubishi 2.0L Turbo Diésel' },
      { label: 'Tracción', value: '4x4 Electrónica con Bloqueo' },
      { label: 'Equipamiento', value: 'Barra antivuelco, gancho tiro' },
      { label: 'Entrega', value: 'Inmediata para empresas' },
    ],
  },
  {
    id: 'comm-van-carga-express',
    brand: 'Venucia',
    model: 'Panel Van Carga Express',
    type: 'Furgón de Reparto Urbano',
    priceDisplay: 'Consultar',
    priceNote: 'Financiamiento directo para empresas',
    imageUrl: '', // Placeholder activo
    imageAlt: 'Panel Van Utilitaria para transporte de mercancía',
    badge: 'Logística & Carga',
    availableColors: ['Blanco'],
    specs: [
      { label: 'Volumen Carga', value: '6.5 m³ espacio útil' },
      { label: 'Motor', value: '1.6L Gasolina Eficiente' },
      { label: 'Transmisión', value: 'Manual 5 Velocidades' },
      { label: 'Carga Máxima', value: '1.200 kg' },
    ],
  },
];

type CatalogCategory = '0KM' | 'USADOS' | 'EMPRESAS';

interface CatalogPageProps {
  onBackToHome?: () => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ onBackToHome }) => {
  const [catalogCategory, setCatalogCategory] = useState<CatalogCategory>('0KM');
  const [brandFilter, setBrandFilter] = useState<string>('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNewVehicles = useMemo(() => {
    if (brandFilter === 'Todos') return NEW_VEHICLES_DATA;
    return NEW_VEHICLES_DATA.filter((v) => v.brand.toLowerCase() === brandFilter.toLowerCase());
  }, [brandFilter]);

  const whatsappGeneralNumber = '584140000000'; // TODO: Confirmar número del cliente

  const handleBack = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div className="min-h-screen bg-[#141416] text-white py-8 sm:py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Barra superior de navegación / Volver al inicio */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-800">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-brand-accent" />
            <span>Volver al Inicio</span>
          </button>

          <span className="text-xs uppercase tracking-widest text-neutral-400 font-heading font-semibold hidden sm:inline-block">
            VeneCars Motors • Concesionario Oficial
          </span>
        </div>

        {/* Encabezado del Catálogo */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Catálogo de Vehículos
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-body">
            Explora nuestro inventario completo de 0km oficiales, seminuevos certificados con peritaje y soluciones comerciales para empresas.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3 BLOQUES DESTACADOS (NEW SPECIALS, PRE-OWNED SPECIALS, SERVICE SPECIALS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16">
          
          {/* Card 1: NEW SPECIALS */}
          <div className="relative h-72 sm:h-80 lg:h-96 bg-neutral-900 border border-neutral-800 overflow-hidden group flex flex-col justify-end p-6 sm:p-7 shadow-lg">
            <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-2 text-neutral-400 group-hover:text-white transition-colors">
                <Car className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-heading font-bold tracking-widest text-neutral-400">
                [ Placeholder Imagen ]
              </span>
              <span className="text-[11px] text-neutral-500 mt-1">
                Vehículos 0km
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
            <div className="relative z-10 text-left">
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-white uppercase tracking-wider mb-3">
                NEW SPECIALS
              </h2>
              <button
                type="button"
                onClick={() => setCatalogCategory('0KM')}
                className="inline-block px-4 py-2 text-xs font-heading font-bold uppercase tracking-widest text-white border border-white hover:bg-white hover:text-brand-black transition-colors duration-200"
              >
                VIEW NOW
              </button>
            </div>
          </div>

          {/* Card 2: PRE-OWNED SPECIALS */}
          <div className="relative h-72 sm:h-80 lg:h-96 bg-neutral-900 border border-neutral-800 overflow-hidden group flex flex-col justify-end p-6 sm:p-7 shadow-lg">
            <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-2 text-neutral-400 group-hover:text-white transition-colors">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-heading font-bold tracking-widest text-neutral-400">
                [ Placeholder Imagen ]
              </span>
              <span className="text-[11px] text-neutral-500 mt-1">
                Seminuevos Certificados
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
            <div className="relative z-10 text-left">
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-white uppercase tracking-wider mb-3">
                PRE-OWNED SPECIALS
              </h2>
              <button
                type="button"
                onClick={() => setCatalogCategory('USADOS')}
                className="inline-block px-4 py-2 text-xs font-heading font-bold uppercase tracking-widest text-white border border-white hover:bg-white hover:text-brand-black transition-colors duration-200"
              >
                VIEW NOW
              </button>
            </div>
          </div>

          {/* Card 3: SERVICE SPECIALS */}
          <div className="relative h-72 sm:h-80 lg:h-96 bg-neutral-900 border border-neutral-800 overflow-hidden group flex flex-col justify-end p-6 sm:p-7 shadow-lg">
            <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-2 text-neutral-400 group-hover:text-white transition-colors">
                <Wrench className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-heading font-bold tracking-widest text-neutral-400">
                [ Placeholder Imagen ]
              </span>
              <span className="text-[11px] text-neutral-500 mt-1">
                Taller y Servicios
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
            <div className="relative z-10 text-left">
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-white uppercase tracking-wider mb-3">
                SERVICE SPECIALS
              </h2>
              <a
                href="#taller-repuestos"
                onClick={handleBack}
                className="inline-block px-4 py-2 text-xs font-heading font-bold uppercase tracking-widest text-white border border-white hover:bg-white hover:text-brand-black transition-colors duration-200"
              >
                VIEW OFFERS
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CINTA DE ORDENAMIENTO (0KM, USADOS, PARA EMPRESAS) */}
        {/* ========================================================================= */}
        <div className="bg-neutral-900/90 border border-neutral-800 p-3 sm:p-4 mb-8 sm:mb-10 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() => setCatalogCategory('0KM')}
              className={`w-full py-3 px-4 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest transition-all duration-200 text-center select-none shadow-sm ${
                catalogCategory === '0KM'
                  ? 'bg-brand-accent text-white shadow-md ring-1 ring-white/20'
                  : 'bg-white text-brand-black hover:bg-neutral-200'
              }`}
            >
              0KM
            </button>

            <button
              type="button"
              onClick={() => setCatalogCategory('USADOS')}
              className={`w-full py-3 px-4 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest transition-all duration-200 text-center select-none shadow-sm ${
                catalogCategory === 'USADOS'
                  ? 'bg-brand-accent text-white shadow-md ring-1 ring-white/20'
                  : 'bg-white text-brand-black hover:bg-neutral-200'
              }`}
            >
              USADOS
            </button>

            <button
              type="button"
              onClick={() => setCatalogCategory('EMPRESAS')}
              className={`w-full py-3 px-4 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest transition-all duration-200 text-center select-none shadow-sm ${
                catalogCategory === 'EMPRESAS'
                  ? 'bg-brand-accent text-white shadow-md ring-1 ring-white/20'
                  : 'bg-white text-brand-black hover:bg-neutral-200'
              }`}
            >
              PARA EMPRESAS
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VISTA 1: VEHÍCULOS 0KM */}
        {/* ------------------------------------------------------------- */}
        {catalogCategory === '0KM' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-neutral-800 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                  Catálogo 0km Oficial
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Modelos nuevos con garantía de fábrica y disponibilidad inmediata en showroom.
                </p>
              </div>

              {/* Filtro por Marca para 0km */}
              <div className="flex items-center gap-2">
                {['Todos', 'Venucia', 'ZXAuto'].map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setBrandFilter(brand)}
                    className={`px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                      brandFilter === brand
                        ? 'bg-white text-brand-black'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white border border-neutral-700'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Vehículos 0km */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredNewVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VISTA 2: VEHÍCULOS SEMINUEVOS / USADOS */}
        {/* ------------------------------------------------------------- */}
        {catalogCategory === 'USADOS' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-neutral-800 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                  Seminuevos Certificados
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Inventario seleccionado con peritaje técnico de 100 puntos y documentación en regla.
                </p>
              </div>
              <a
                href={`https://wa.me/${whatsappGeneralNumber}?text=${encodeURIComponent('Hola VeneCars Motors, quiero consultar el inventario completo de vehículos usados/seminuevos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-accent hover:underline"
              >
                <span>Consultar más modelos por WhatsApp</span>
              </a>
            </div>

            {/* Grid de Seminuevos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {PRE_OWNED_VEHICLES_DATA.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VISTA 3: VEHÍCULOS PARA EMPRESAS Y FLOTAS */}
        {/* ------------------------------------------------------------- */}
        {catalogCategory === 'EMPRESAS' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-neutral-800 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                  Vehículos Comerciales y Soluciones de Flota
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Pick-ups de carga pesada, chasis cabina y vans de reparto con condiciones corporativas especiales.
                </p>
              </div>
              <a
                href={`https://wa.me/${whatsappGeneralNumber}?text=${encodeURIComponent('Hola VeneCars Motors, represento a una empresa y deseo cotizar vehículos comerciales / flotas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Cotización Corporativa</span>
              </a>
            </div>

            {/* Grid de Vehículos para Empresas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {COMMERCIAL_VEHICLES_DATA.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
