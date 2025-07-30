import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../ui/Button';

function HeroSection() {
  // Array of background images
  const backgroundImages = [
    '/20250526_130907.png',
    '/20250526_130909.png',
    '/20250701_130029.png',
    '/20250717_104048.png',
    '/20250717_104130.png',
    '/20250717_104304.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt="Logistics transportation"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0 
            }}
            transition={{ duration: 1 }}
          />
        ))}
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

      {/* Image Indicators */}
      <div className="absolute bottom-20 right-8 z-10 flex flex-col space-y-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-accent-500 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;