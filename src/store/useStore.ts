import { create } from 'zustand';
import { PenguinEvent, VegasAttraction, ContactMessage, PenguinFact } from '@/types';

interface Store {
  events: PenguinEvent[];
  attractions: VegasAttraction[];
  messages: ContactMessage[];
  facts: PenguinFact[];
  addMessage: (message: Omit<ContactMessage, 'id' | 'createdAt'>) => void;
  getUpcomingEvents: () => PenguinEvent[];
  getFeaturedAttractions: () => VegasAttraction[];
}

const mockEvents: PenguinEvent[] = [
  {
    id: '1',
    title: "Larry's Magic Show Spectacular",
    description: "Watch Larry perform amazing magic tricks with fish and ice cubes!",
    date: new Date('2024-02-15T20:00:00'),
    location: 'Bellagio Fountains',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    category: 'show',
    price: 25
  },
  {
    id: '2',
    title: 'Meet & Greet with Larry',
    description: 'Get your photo taken with Las Vegas\'s most famous penguin!',
    date: new Date('2024-02-20T14:00:00'),
    location: 'Fremont Street Experience',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    category: 'meet-greet',
    price: 15
  },
  {
    id: '3',
    title: 'Penguin Pool Party',
    description: 'Join Larry for a cool pool party in the desert heat!',
    date: new Date('2024-02-25T16:00:00'),
    location: 'Flamingo Pool',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    category: 'special',
    price: 30
  },
  {
    id: '4',
    title: "Larry's Comedy Roast Night",
    description: "Larry faces the heat as Vegas comedians and his penguin pals roast him with icy jokes!",
    date: new Date('2024-03-03T19:00:00'),
    location: 'Comedy Cellar, Rio Hotel',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop',
    category: 'special',
    price: 20
  },
  {
    id: '5',
    title: 'Ice Skating Under the Stars',
    description: 'Skate with Larry on a rooftop rink, complete with disco lights and music!',
    date: new Date('2024-03-10T18:00:00'),
    location: 'The Cosmopolitan Rooftop',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop',
    category: 'special',
    price: 28
  },
  {
    id: '6',
    title: "Larry's Parade on the Strip",
    description: "Don't miss the annual Penguin Parade with Larry and friends in costumes, music, and floats!",
    date: new Date('2024-03-17T17:00:00'),
    location: 'Las Vegas Strip',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    category: 'special',
    price: 0
  }
];

const mockAttractions: VegasAttraction[] = [
  {
    id: '1',
    name: 'The Penguin Lounge',
    description: "Larry's favorite spot for fish cocktails and ice-cold entertainment.",
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
    category: 'restaurant',
    rating: 4.8,
    priceRange: '$$$',
    larryRecommended: true
  },
  {
    id: '2',
    name: 'Arctic Dreams Casino',
    description: 'The coolest casino in Vegas, literally! Temperature kept at perfect penguin comfort.',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=600&fit=crop',
    category: 'casino',
    rating: 4.5,
    priceRange: '$$',
    larryRecommended: true
  },
  {
    id: '3',
    name: 'Cirque du Penguin',
    description: 'An amazing circus show featuring Larry and his penguin friends from around the world.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop',
    category: 'show',
    rating: 4.9,
    priceRange: '$$$$',
    larryRecommended: true
  },
  {
    id: '4',
    name: 'Ice Palace Adventure',
    description: 'Explore a winter wonderland in the middle of the desert.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    category: 'attraction',
    rating: 4.7,
    priceRange: '$$$',
    larryRecommended: false
  }
];

const mockFacts: PenguinFact[] = [
  {
    id: '1',
    title: 'Larry loves slot machines',
    description: 'Larry has his own custom slot machine that pays out in fish instead of coins!',
    funLevel: 5
  },
  {
    id: '2',
    title: 'Swimming in fountains',
    description: 'Larry has special permission to swim in the Bellagio fountains during off-hours.',
    funLevel: 4
  },
  {
    id: '3',
    title: 'Desert adaptation',
    description: 'Larry wears tiny sunglasses and uses penguin-safe sunscreen to protect against the desert sun.',
    funLevel: 5
  },
  {
    id: '4',
    title: 'VIP status everywhere',
    description: 'Larry has VIP access to every major casino and restaurant on the Strip.',
    funLevel: 3
  }
];

export const useStore = create<Store>((set, get) => ({
  events: mockEvents,
  attractions: mockAttractions,
  messages: [],
  facts: mockFacts,
  
  addMessage: (message) => {
    const newMessage: ContactMessage = {
      ...message,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },
  
  getUpcomingEvents: () => {
    const now = new Date();
    return get().events.filter(event => event.date > now).sort((a, b) => a.date.getTime() - b.date.getTime());
  },
  
  getFeaturedAttractions: () => {
    return get().attractions.filter(attraction => attraction.larryRecommended);
  }
}));
