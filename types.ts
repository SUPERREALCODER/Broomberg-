
export enum ServiceCategory {
  CLEANING = 'Cleaning',
  PEST_CONTROL = 'Pest Control',
  SANITIZATION = 'Sanitization',
  PAINTING = 'Painting',
  INTERIORS = 'Interiors'
}

export interface PricingTier {
  id: string;
  name: 'Basic' | 'Deep' | 'Premium';
  price: number;
  features: string[];
  duration: string;
}

export interface Service {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  image: string;
  tiers: PricingTier[];
  rating: number;
  reviewCount: number;
}

export interface BookingSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface CartItem {
  serviceId: string;
  serviceTitle: string;
  tier: PricingTier;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'completed';
  date: string;
  slot: string;
}
