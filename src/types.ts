export interface NavItem {
  label: string;
  href: string;
}

export interface WhatsAppConfig {
  phoneNumber: string;
  defaultMessage: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  whatsappNumber: string;
  instagramHandle: string;
  address: string;
  city: string;
  state: string;
}

export interface PromoVehicle {
  modelName: string;
  brand?: string;
  category?: string;
  imageUrl: string;
  altText: string;
}

export interface PromoSlide {
  id: string;
  badge: string;
  validity?: string;
  title: string;
  highlightedText?: string;
  description: string;
  disclaimer?: string;
  ctaText: string;
  ctaLink: string;
  ctaExternal?: boolean;
  vehicles: PromoVehicle[];
}

export interface ServiceCard {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  isExternal?: boolean;
}

export interface BrandLogo {
  id: string;
  name: string;
  logoUrl?: string;
  altText: string;
  description?: string;
}

export interface VehicleSpec {
  label: string;
  value: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  type: string;
  priceDisplay: string;
  priceNote?: string;
  imageUrl: string;
  imageAlt: string;
  specs: VehicleSpec[];
  badge?: string;
  availableColors?: string[];
}

export interface FinancingStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  roleOrVehicle: string;
  initials: string;
}

export interface ConsignmentBenefit {
  id: string;
  title: string;
  description: string;
  badge?: string;
}






