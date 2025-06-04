import React, { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-neutral-800 hover:text-primary-500 font-medium px-4 py-2 transition-colors duration-200"
  >
    {children}
  </a>
);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <Truck size={32} className="text-primary-500" />
          <span className="text-2xl font-bold text-primary-500">NOORZAM</span>
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
            className="ml-2 bg-accent-500 hover:bg-accent-600 text-neutral-900 font-medium px-5 py-2 rounded-md transition-colors duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800 hover:text-primary-500 focus:outline-none"
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
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-neutral-800 hover:text-primary-500 font-medium py-2" onClick={toggleMenu}>Home</a>
              <a href="#services" className="text-neutral-800 hover:text-primary-500 font-medium py-2" onClick={toggleMenu}>Services</a>
              <a href="#fleet" className="text-neutral-800 hover:text-primary-500 font-medium py-2" onClick={toggleMenu}>Fleet</a>
              <a href="#about" className="text-neutral-800 hover:text-primary-500 font-medium py-2" onClick={toggleMenu}>About Us</a>
              <a href="#team" className="text-neutral-800 hover:text-primary-500 font-medium py-2" onClick={toggleMenu}>Team</a>
              <a href="#contact" className="text-neutral-800 hover:text-primary-500 font-medium py-2" onClick={toggleMenu}>Contact</a>
              <a 
                href="#quote" 
                className="bg-accent-500 hover:bg-accent-600 text-neutral-900 font-medium px-5 py-2 rounded-md text-center transition-colors duration-200"
                onClick={toggleMenu}
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