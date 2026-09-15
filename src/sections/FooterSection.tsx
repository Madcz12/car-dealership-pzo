import React from 'react';
import { Logo } from '../components/Logo';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-brand-navy-dark text-brand-gray border-t border-brand-navy-light/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Logo isLight={true} />
        <p className="text-xs text-brand-gray/70 text-center sm:text-right">
          © {new Date().getFullYear()} VeneCars Motors C.A. Todos los derechos reservados.<br />
          Puerto Ordaz, Estado Bolívar, Venezuela.
        </p>
      </div>
    </footer>
  );
};
