import React, { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="text-white hover:text-accent-500 font-bold px-4 py-2 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/30 backdrop-blur-md shadow-md ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="NOORZAM Hauliers Limited Logo" 
            className="h-10 w-auto"
           />
          <span className="text-xl font-bold text-primary-500 hidden sm:block">NOORZAM</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#fleet">Fleet</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a 
            href="#quote" 
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('quote');
              if (targetElement) {
                const headerHeight = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="ml-2 bg-accent-500 hover:bg-accent-600 text-neutral-900 font-medium px-5 py-2 rounded-md transition-colors duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-accent-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/30 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-accent-500 font-bold py-2" onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('home');
                if (targetElement) {
                  const headerHeight = 80;
                  const elementPosition = targetElement.offsetTop;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                toggleMenu();
              }}>Home</a>
              <a href="#services" className="text-white hover:text-accent-500 font-bold py-2" onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('services');
                if (targetElement) {
                  const headerHeight = 80;
                  const elementPosition = targetElement.offsetTop;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                toggleMenu();
              }}>Services</a>
              <a href="#fleet" className="text-white hover:text-accent-500 font-bold py-2" onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('fleet');
                if (targetElement) {
                  const headerHeight = 80;
                  const elementPosition = targetElement.offsetTop;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                toggleMenu();
              }}>Fleet</a>
              <a href="#about" className="text-white hover:text-accent-500 font-bold py-2" onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('about');
                if (targetElement) {
                  const headerHeight = 80;
                  const elementPosition = targetElement.offsetTop;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                toggleMenu();
              }}>About Us</a>
              <a href="#team" className="text-white hover:text-accent-500 font-bold py-2" onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('team');
                if (targetElement) {
                  const headerHeight = 80;
                  const elementPosition = targetElement.offsetTop;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                toggleMenu();
              }}>Team</a>
              <a href="#contact" className="text-white hover:text-accent-500 font-bold py-2" onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('contact');
                if (targetElement) {
                  const headerHeight = 80;
                  const elementPosition = targetElement.offsetTop;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                toggleMenu();
              }}>Contact</a>
              <a 
                href="#quote" 
                className="bg-accent-500 hover:bg-accent-600 text-neutral-900 font-bold px-5 py-3 rounded-md text-center transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById('quote');
                  if (targetElement) {
                    const headerHeight = 80;
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                  toggleMenu();
                }}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;