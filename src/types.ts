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

