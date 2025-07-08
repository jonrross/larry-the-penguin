import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { FaHeart, FaSnowflake, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Larry's Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-penguin-blue-500">
                <img
                  src="https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=100&h=100&fit=crop"
                  alt="Larry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Larry the Penguin</h3>
                <p className="text-penguin-blue-300">Las Vegas' Coolest Resident</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              From Antarctica to the Entertainment Capital of the World, Larry brings joy, laughter, and a unique perspective to the Vegas experience. Join him for unforgettable adventures!
            </p>
            <div className="flex items-center gap-2 text-vegas-gold-400">
              <FaHeart className="w-4 h-4" />
              <span className="text-sm">Made with love in Las Vegas</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 text-vegas-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Larry', href: '#about' },
                { label: 'Upcoming Shows', href: '#events' },
                { label: 'Vegas Guide', href: '#attractions' },
                { label: 'Fun Facts', href: '#facts' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-penguin-blue-300 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold text-lg mb-4 text-vegas-gold-400">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 text-desert-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Las Vegas Strip, Nevada</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaEnvelope className="w-4 h-4 text-penguin-blue-400 flex-shrink-0" />
                <span className="text-gray-300">hello@larrypenguin.vegas</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaPhone className="w-4 h-4 text-vegas-gold-400 flex-shrink-0" />
                <span className="text-gray-300">(702) PENGUIN</span>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-penguin-blue-900/50 rounded-lg border border-penguin-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <FaSnowflake className="w-4 h-4 text-penguin-blue-300" />
                <span className="text-sm font-medium text-penguin-blue-300">Larry's Tip</span>
              </div>
              <p className="text-xs text-gray-300">
                Best time to catch Larry? Early morning at the Bellagio fountains!
              </p>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Larry the Penguin. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>🐧</span>
            <span>Made with</span>
            <FaHeart className="w-3 h-3 text-red-500" />
            <span>in Sin City</span>
            <span>🎰</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;