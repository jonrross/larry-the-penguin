import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { VegasAttraction } from '@/types';
import { FaStar, FaDollarSign, FaHeart } from 'react-icons/fa';

interface AttractionCardProps {
  attraction: VegasAttraction;
  index: number;
}

const AttractionCard = ({ attraction, index }: AttractionCardProps) => {
  const getCategoryColor = (category: VegasAttraction['category']) => {
    switch (category) {
      case 'casino':
        return 'bg-vegas-gold-500 text-black';
      case 'restaurant':
        return 'bg-desert-orange-500 text-white';
      case 'show':
        return 'bg-penguin-blue-500 text-white';
      case 'attraction':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCategoryLabel = (category: VegasAttraction['category']) => {
    switch (category) {
      case 'casino':
        return 'Casino';
      case 'restaurant':
        return 'Restaurant';
      case 'show':
        return 'Show';
      case 'attraction':
        return 'Attraction';
      default:
        return 'Venue';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-penguin-blue-400">
        <div className="relative">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getCategoryColor(attraction.category)}>
              {getCategoryLabel(attraction.category)}
            </Badge>
          </div>
          {attraction.larryRecommended && (
            <div className="absolute top-4 right-4 bg-red-500 rounded-full p-2 animate-pulse">
              <FaHeart className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
            {attraction.name}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-gray-600 mb-4 line-clamp-3">{attraction.description}</p>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-1">
              <FaStar className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold text-gray-700">{attraction.rating}</span>
              <span className="text-sm text-gray-500">/5</span>
            </div>
            <div className="flex items-center gap-1 text-green-600 font-semibold">
              <FaDollarSign className="w-4 h-4" />
              <span>{attraction.priceRange}</span>
            </div>
          </div>
          
          {attraction.larryRecommended && (
            <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700 font-medium flex items-center gap-2">
                <FaHeart className="w-3 h-3" />
                Larry's Personal Recommendation!
              </p>
            </div>
          )}
          
          <Button className="w-full bg-penguin-blue-500 hover:bg-penguin-blue-600 text-white font-semibold">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AttractionCard;