import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import type { NavItem } from '../types';

// Ítems de navegación respetando exactamente el orden de la Sección 4 de constitution.md
const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Consignación', href: '#consignacion' },
  { label: 'Taller y Repuestos', href: '#taller-repuestos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detección de scroll para aplicar elevación y estilo sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detección de sección activa basada en la posición de scroll
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú mobile está abierto y escuchar tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-brand-black ${
        isScrolled 
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3' 
          : 'border-b border-white/5 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo VeneCars Motors */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navegación Desktop (>= 768px / md) */}
          <nav 
            className="hidden md:flex items-center gap-1 lg:gap-2" 
            aria-label="Navegación principal"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                    isActive 
                      ? 'text-brand-accent font-semibold' 
                      : 'text-brand-white/85 hover:text-brand-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Principal Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="accent" 
              size="md" 
              href="#contacto"
              icon={<PhoneCall className="w-4 h-4" />}
              iconPosition="left"
            >
              Cotizar Vehículo
            </Button>
          </div>

          {/* Botón Menú Hamburguesa Mobile (< 768px) */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="accent" 
              size="sm" 
              href="#contacto"
              className="text-xs px-3 py-1.5"
            >
              Cotizar
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-brand-white hover:text-brand-accent hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Drawer / Menú Desplegable Mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-[65px] bg-brand-black border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen 
            ? 'opacity-100 scale-y-100 max-h-[calc(100vh-65px)] overflow-y-auto' 
            : 'opacity-0 scale-y-95 max-h-0 pointer-events-none overflow-hidden'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 pt-3 pb-6 space-y-1 max-w-lg mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive 
                    ? 'bg-brand-accent/20 text-brand-accent font-semibold' 
                    : 'text-brand-white/90 hover:bg-white/10 hover:text-brand-white'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-brand-gray-dark opacity-60" />
              </a>
            );
          })}

          <div className="pt-4 mt-2 border-t border-white/10">
            <Button 
              variant="accent" 
              size="lg" 
              href="#contacto"
              onClick={closeMobileMenu}
              className="w-full justify-center"
              icon={<PhoneCall className="w-5 h-5" />}
              iconPosition="left"
            >
              Cotizar o Contactar
            </Button>
            <p className="text-center text-xs text-brand-gray/60 mt-3">
              Puerto Ordaz, Edo. Bolívar • Atención inmediata
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
