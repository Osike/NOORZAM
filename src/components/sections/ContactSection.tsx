import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

function ContactSection() {
  return (
    <section id="contact" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Get in touch with our team for any inquiries or to learn more about our services."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-card p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-primary-100 rounded-full p-3 text-primary-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-neutral-700">
                      <a href="tel:+254123456789" className="hover:text-primary-500 transition-colors">+254 123 456 789</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-primary-100 rounded-full p-3 text-primary-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-neutral-700">
                      <a href="mailto:info@noorzam.com" className="hover:text-primary-500 transition-colors">info@noorzam.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-primary-100 rounded-full p-3 text-primary-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-neutral-700">
                      123 Business Road<br />
                      Mombasa, Mombasa County<br />
                      Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-primary-100 rounded-full p-3 text-primary-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <p className="text-neutral-700">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-500 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-500 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-500 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-500 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-card p-8 h-full">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Our Location</h3>
              
              <div className="rounded-lg overflow-hidden h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127242.36856231569!2d39.5899397271483!3d-4.050429899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c15%3A0xcb618bbc35d0db5a!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2sus!4v1654812345678!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NOORZAM Logistics Location"
                ></iframe>
              </div>
              
              <div className="mt-6">
                <p className="text-neutral-700">
                  Located in the heart of Mombasa, our office is easily accessible from major highways and transportation routes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Contact Form */}
        <motion.div
          className="mt-16 bg-white rounded-lg shadow-card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-6">Send Us a Message</h3>
          
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="input"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="input"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="input"
                  placeholder="+254 123 456 789"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="input"
                  placeholder="How can we help you?"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={6} 
                className="input resize-none"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;