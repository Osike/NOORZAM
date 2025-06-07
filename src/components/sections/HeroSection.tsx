import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Logistics transportation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Your Reliable Partner
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xl mb-8 text-neutral-100">
              NOORZAM Hauliers provides reliable transportation and freight solutions across Kenya. 
              With our experienced team and modern fleet, we ensure your cargo reaches its destination safely and on time.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="#quote">
            <Button 
              variant="accent" 
              size="lg"
              icon={<ChevronRight size={20} />}
            >
              Get a Quote
            </Button>
            </a>
            <a href="#about">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 focus:ring-white"
              icon={<ArrowRight size={20} />}
            >
              Learn More
            </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;