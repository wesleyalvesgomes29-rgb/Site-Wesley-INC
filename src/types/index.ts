export interface FloorPlanInfo {
  id: string;
  name: string;
  area: string; // e.g. "41,20m²"
  bedrooms: string;
  description: string;
  highlights: string[];
  image?: string;
  badge?: string;
}

export interface LeisureItem {
  id: string;
  title: string;
  tagline: string;
  category: 'esporte' | 'convivencia' | 'natureza' | 'familia';
  icon: string;
  image?: string;
  number?: number;
}

export interface LocationLandmark {
  name: string;
  time: string; // e.g. "4 min"
  type: 'transporte' | 'lazer' | 'educacao' | 'comercio' | 'aeroporto';
  confirmed: boolean;
}

export interface DevelopmentInfo {
  id: 'jardim-do-sol' | 'park-espanha';
  name: string;
  subtitle: string;
  tagline: string;
  location: {
    neighborhood: string;
    city: string;
    region?: string;
    addressDescription: string;
    accessStreets?: string[];
  };
  status: 'Lançamento' | 'Em Obras' | 'Breve Lançamento' | 'Últimas Unidades';
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
    iconName?: string;
    isPending?: boolean;
    confirmed?: boolean;
  }[];
  floorPlans?: FloorPlanInfo[];
  leisureItems?: LeisureItem[];
  landmarks?: LocationLandmark[];
  featuresPrepared: string[];
  ctaText: string;
}

export interface ConsultantConfig {
  name: string;
  role: string;
  company: string;
  city: string;
  phoneFormatted: string;
  whatsappNumber: string; // E.g. '5534999999999' or configurable
  whatsappDefaultMessage: string;
  instagramUrl: string;
  simulatorUrl: string;
  avatarImage: string;
}

export interface LeadFormData {
  name: string;
  whatsapp: string;
  city: string;
  developmentInterest: 'Park Jardim do Sol' | 'Park Espanha' | 'Ainda não sei';
  monthlyIncome: string;
  hasFgts: 'Sim' | 'Não' | 'Não tenho certeza';
  message: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

