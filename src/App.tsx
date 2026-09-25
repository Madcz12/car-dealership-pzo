import React, { useState, useEffect } from 'react';
import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { BrandsSection } from './sections/BrandsSection';
import { CatalogSection } from './sections/CatalogSection';
import { ServicesSection } from './sections/ServicesSection';
import { FooterSection } from './sections/FooterSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CatalogPage } from './pages/CatalogPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalogo'>(() => {
    return window.location.hash === '#/catalogo' || window.location.hash.includes('catalogo-page')
      ? 'catalogo'
      : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/catalogo' || window.location.hash.includes('catalogo-page')) {
        setCurrentPage('catalogo');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = (sectionId?: string) => {
    setCurrentPage('home');
    if (sectionId) {
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToCatalog = () => {
    setCurrentPage('catalogo');
    window.location.hash = '#/catalogo';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-brand-dark">
      {/* Header Sticky (Spec 001) */}
      <Header 
        onNavigateToCatalog={navigateToCatalog} 
        onNavigateToHome={navigateToHome} 
        isCatalogPage={currentPage === 'catalogo'} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {currentPage === 'catalogo' ? (
          <CatalogPage onBackToHome={() => navigateToHome('catalogo')} />
        ) : (
          <>
            <HeroSection />
            <BrandsSection />
            <CatalogSection onNavigateToCatalog={navigateToCatalog} />
            <ServicesSection />
          </>
        )}
      </main>

      {/* Footer */}
      <FooterSection />

      {/* WhatsApp Flotante Persistente (Spec 001) */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
