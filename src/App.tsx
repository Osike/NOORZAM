import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import FleetSection from './components/sections/FleetSection';
import TeamSection from './components/sections/TeamSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import QuoteSection from './components/sections/QuoteSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FleetSection />
        <AboutSection />
        <TeamSection />
        <QuoteSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;