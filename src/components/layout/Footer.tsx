import React from 'react';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Truck size={28} className="text-accent-500" />
              <span className="text-xl font-bold">NOORZAM</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Your trusted logistics partner in Mombasa, Kenya. Providing reliable transport solutions since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-300 hover:text-accent-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-accent-500 transition-colors">Services</a></li>
              <li><a href="#fleet" className="text-neutral-300 hover:text-accent-500 transition-colors">Our Fleet</a></li>
              <li><a href="#about" className="text-neutral-300 hover:text-accent-500 transition-colors">About Us</a></li>
              <li><a href="#team" className="text-neutral-300 hover:text-accent-500 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-neutral-300 hover:text-accent-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-neutral-300 hover:text-accent-500 transition-colors">Freight Forwarding</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-accent-500 transition-colors">Warehousing</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-accent-500 transition-colors">Customs Clearance</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-accent-500 transition-colors">Local Distribution</a></li>
              <li><a href="#quote" className="text-neutral-300 hover:text-accent-500 transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">123 Business Road, Mombasa, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent-500 mr-3 flex-shrink-0" />
                <a href="tel:+254123456789" className="text-neutral-300 hover:text-accent-500 transition-colors">+254 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@noorzam.com" className="text-neutral-300 hover:text-accent-500 transition-colors">info@noorzam.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-neutral-400 text-sm text-center">
          <p>© {currentYear} NOORZAM. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-accent-500 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-accent-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;