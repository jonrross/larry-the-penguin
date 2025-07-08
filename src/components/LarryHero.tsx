import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const LarryHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Vegas Lights Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="vegas-gradient opacity-20 absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Larry's Image */}
          <motion.div
            className="mb-8 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-vegas-gold-400 shadow-2xl waddle">
              <img
                src="https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400&h=400&fit=crop"
                alt="Larry the Penguin"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -top-4 -right-4 bg-vegas-gold-400 text-black p-3 rounded-full neon-glow"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaStar className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-vegas-gold-300 via-vegas-gold-400 to-vegas-gold-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet Larry
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl mb-4 text-penguin-blue-200 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Las Vegas' Most Famous Penguin
          </motion.p>

          {/* Location Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaMapMarkerAlt className="text-desert-orange-400" />
            <span className="text-lg font-medium">Living it up in Sin City</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            From the icy Antarctic to the blazing Nevada desert, Larry traded snowflakes for slot machines and became Vegas' most beloved resident. Join him for unforgettable adventures in the Entertainment Capital of the World!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="bg-vegas-gold-500 hover:bg-vegas-gold-600 text-black font-bold px-8 py-4 text-lg neon-glow"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Larry's Shows
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg backdrop-blur-sm"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-vegas-gold-400 text-4xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ❄️
        </motion.div>
        <motion.div
          className="absolute top-32 right-16 text-desert-orange-400 text-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        >
          🎰
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-penguin-blue-400 text-5xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        >
          🐧
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default LarryHero;