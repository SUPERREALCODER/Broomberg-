
import { Service, ServiceCategory } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    category: ServiceCategory.CLEANING,
    title: 'Full Home Deep Cleaning',
    description: 'Transform your living space with our signature deep cleaning service. We cover every inch from ceiling fans to floor scrubbing using industrial machines.',
    image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviewCount: 1240,
    tiers: [
      { id: 't1', name: 'Basic', price: 2999, duration: '4-5 Hours', features: ['Floor Mopping', 'Dusting', 'Kitchen Surface Cleaning'] },
      { id: 't2', name: 'Deep', price: 4999, duration: '7-8 Hours', features: ['Window Panes', 'Ceiling Fans', 'Cabinet Interiors', 'Basic + Machine Scrubbing'] },
      { id: 't3', name: 'Premium', price: 7499, duration: '10-12 Hours', features: ['Deep + Steam Sterilization', 'Sofa Shampooing', 'Bathroom Descaling'] },
    ]
  },
  {
    id: 's2',
    category: ServiceCategory.CLEANING,
    title: 'Sofa & Upholstery Cleaning',
    description: 'Breathe new life into your furniture. Our injection-extraction technology removes deep-seated dust and stains effectively.',
    image: 'https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewCount: 850,
    tiers: [
      { id: 't4', name: 'Basic', price: 499, duration: '1 Hour', features: ['Dry Vacuuming', 'Spot Treatment'] },
      { id: 't5', name: 'Deep', price: 999, duration: '2 Hours', features: ['Wet Shampooing', 'Machine Extraction'] },
      { id: 't6', name: 'Premium', price: 1499, duration: '3 Hours', features: ['Steam Sanitization', 'Fabric Protection Coating'] },
    ]
  },
  {
    id: 's3',
    category: ServiceCategory.PEST_CONTROL,
    title: 'Cockroach & Ant Control',
    description: 'Advanced odorless gel treatment and residual spray to eliminate pests. Safe for pets and kids with no need to empty the kitchen.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1200',
    rating: 4.7,
    reviewCount: 2100,
    tiers: [
      { id: 't7', name: 'Basic', price: 899, duration: '30 Mins', features: ['Gel Treatment (Kitchen Only)'] },
      { id: 't8', name: 'Deep', price: 1499, duration: '1 Hour', features: ['Whole House Gel + Spray', 'Drain Cleaning'] },
      { id: 't9', name: 'Premium', price: 2499, duration: '2 Hours', features: ['Deep + 6 Month Warranty', 'Follow-up visit included'] },
    ]
  },
  {
    id: 's4',
    category: ServiceCategory.SANITIZATION,
    title: 'Virus & Bacteria Shield',
    description: 'Hospital-grade ULV cold fogging that eliminates 99.9% of germs, viruses, and bacteria. Essential for a healthy home environment.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewCount: 520,
    tiers: [
      { id: 't10', name: 'Basic', price: 1299, duration: '1 Hour', features: ['High-Touch Point Sanitization'] },
      { id: 't11', name: 'Deep', price: 2499, duration: '2 Hours', features: ['Whole House Fogging', 'Antiviral Coating'] },
      { id: 't12', name: 'Premium', price: 3999, duration: '3 Hours', features: ['Fogging + Manual Surface Wipe', 'Air Purification Treatment'] },
    ]
  }
];

export const BOOKING_SLOTS = [
  "08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"
];
