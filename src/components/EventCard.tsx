import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PenguinEvent } from '@/types';
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { format } from 'date-fns';

interface EventCardProps {
  event: PenguinEvent;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const getCategoryColor = (category: PenguinEvent['category']) => {
    switch (category) {
      case 'show':
        return 'bg-vegas-gold-500 text-black';
      case 'meet-greet':
        return 'bg-penguin-blue-500 text-white';
      case 'special':
        return 'bg-desert-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCategoryLabel = (category: PenguinEvent['category']) => {
    switch (category) {
      case 'show':
        return 'Show';
      case 'meet-greet':
        return 'Meet & Greet';
      case 'special':
        return 'Special Event';
      default:
        return 'Event';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-vegas-gold-400">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getCategoryColor(event.category)}>
              {getCategoryLabel(event.category)}
            </Badge>
          </div>
          {event.price && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
              <div className="flex items-center gap-1 text-sm font-bold text-green-600">
                <FaDollarSign className="w-3 h-3" />
                <span>{event.price}</span>
              </div>
            </div>
          )}
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
            {event.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaCalendarAlt className="w-4 h-4 text-penguin-blue-500" />
              <span>{format(event.date, 'PPP p')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaMapMarkerAlt className="w-4 h-4 text-desert-orange-500" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <Button className="w-full bg-vegas-gold-500 hover:bg-vegas-gold-600 text-black font-semibold">
            Get Tickets
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;