import React from 'react';
import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { BrandsSection } from './sections/BrandsSection';
import { CatalogSection } from './sections/CatalogSection';
import { ConsignmentSection } from './sections/ConsignmentSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { FinancingSection } from './sections/FinancingSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-brand-dark">
      {/* Header Sticky (Spec 001) */}
      <Header />

      {/* Main Content Sections (Orden estricto de constitution.md) */}
      <main className="flex-grow">
        <HeroSection />
        <BrandsSection />
        <CatalogSection />
        <ConsignmentSection />
        <ServicesSection />
        <WhyUsSection />
        <FinancingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* WhatsApp Flotante Persistente (Spec 001) */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
