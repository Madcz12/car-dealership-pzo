import React from 'react';

export const CatalogSection: React.FC = () => {
  return (
    <section id="catalogo" className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl text-brand-navy mb-4">Catálogo de Vehículos</h2>
        <p className="text-brand-dark/70 max-w-xl mx-auto">Explora nuestros modelos 0km y vehículos en consignación garantizados.</p>
      </div>
    </section>
  );
};
