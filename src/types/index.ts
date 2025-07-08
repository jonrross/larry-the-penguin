export interface PenguinEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  image: string;
  category: 'show' | 'meet-greet' | 'special';
  price?: number;
}

export interface VegasAttraction {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'casino' | 'restaurant' | 'show' | 'attraction';
  rating: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  larryRecommended: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface PenguinFact {
  id: string;
  title: string;
  description: string;
  funLevel: 1 | 2 | 3 | 4 | 5;
}