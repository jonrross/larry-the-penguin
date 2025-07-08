import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PenguinFact } from '@/types';
import { FaSnowflake } from 'react-icons/fa';

interface PenguinFactCardProps {
  fact: PenguinFact;
  index: number;
}

const PenguinFactCard = ({ fact, index }: PenguinFactCardProps) => {
  const getFunLevelColor = (level: number) => {
    switch (level) {
      case 5:
        return 'text-vegas-gold-500';
      case 4:
        return 'text-desert-orange-500';
      case 3:
        return 'text-penguin-blue-500';
      case 2:
        return 'text-green-500';
      case 1:
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="h-full bg-gradient-to-br from-penguin-blue-50 to-white border-2 border-penguin-blue-200 hover:border-penguin-blue-400 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-penguin-blue-500 rounded-full flex items-center justify-center">
                <FaSnowflake className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {fact.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {fact.description}
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-700">Fun Level:</span>
                {[...Array(5)].map((_, i) => (
                  <FaSnowflake
                    key={i}
                    className={`w-4 h-4 ${
                      i < fact.funLevel ? getFunLevelColor(fact.funLevel) : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PenguinFactCard;