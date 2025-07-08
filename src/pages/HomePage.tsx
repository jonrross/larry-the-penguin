import { motion } from 'framer-motion';
import LarryHero from '@/components/LarryHero';
import EventCard from '@/components/EventCard';
import AttractionCard from '@/components/AttractionCard';
import PenguinFactCard from '@/components/PenguinFactCard';
import ContactForm from '@/components/ContactForm';
import { useStore } from '@/store/useStore';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FaCalendarAlt, FaMapMarkerAlt, FaSnowflake, FaHeart } from 'react-icons/fa';

const HomePage = () => {
  const { getUpcomingEvents, getFeaturedAttractions, facts } = useStore();
  const upcomingEvents = getUpcomingEvents();
  const featuredAttractions = getFeaturedAttractions();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <LarryHero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-penguin-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-penguin-blue-600 to-penguin-blue-800 bg-clip-text text-transparent">
              Meet Larry: From Ice to Dice
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Larry's story began in the pristine waters of Antarctica, where he dreamed of bright lights and big adventures. One day, following a school of fish that got a little too adventurous, Larry found himself in the most unlikely place for a penguin – Las Vegas!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-penguin-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSnowflake className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Antarctic Origins</h3>
                <p className="text-gray-600">Born in the icy waters of Antarctica, Larry always dreamed of warmer adventures.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-vegas-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎰</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Vegas Discovery</h3>
                <p className="text-gray-600">A wrong turn led to the right place – the entertainment capital of the world!</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-desert-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Local Celebrity</h3>
                <p className="text-gray-600">Now Vegas' most beloved resident, bringing joy to tourists and locals alike.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vegas-gold-500 to-vegas-gold-700 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss Larry's amazing shows and special appearances around Las Vegas!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
          
          {upcomingEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCalendarAlt className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No Upcoming Events</h3>
              <p className="text-gray-600 mb-6">Larry is currently planning his next amazing show. Check back soon!</p>
              <Button className="bg-penguin-blue-500 hover:bg-penguin-blue-600">
                Get Notified
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-20 bg-gradient-to-br from-desert-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-desert-orange-500 to-desert-orange-700 bg-clip-text text-transparent">
              Larry's Vegas Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Larry's favorite spots in Las Vegas – from penguin-friendly restaurants to the coolest shows in town!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredAttractions.map((attraction, index) => (
              <AttractionCard key={attraction.id} attraction={attraction} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section id="facts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-penguin-blue-500 to-penguin-blue-700 bg-clip-text text-transparent">
              Fun Facts About Larry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the quirky and amazing things about Vegas' most famous penguin!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facts.map((fact, index) => (
              <PenguinFactCard key={fact.id} fact={fact} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-vegas-gold-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vegas-gold-500 to-vegas-gold-700 bg-clip-text text-transparent">
              Get in Touch with Larry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about shows, want to book a meet & greet, or just want to say hello? Larry loves hearing from fans!
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default HomePage;