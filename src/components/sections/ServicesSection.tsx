import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Warehouse, FileText, Package, ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

const services: ServiceProps[] = [
  {
    icon: <Truck size={40} />,
    title: 'Freight Forwarding',
    description: 'Expert freight transportation across Kenya and East Africa',
    details: 'Our freight forwarding services provide end-to-end logistics solutions. We handle all aspects of the shipping process, from pickup to delivery, with real-time tracking and status updates. Our established carrier network ensures competitive rates and reliable service for both domestic and international shipments.'
  },
  {
    icon: <Warehouse size={40} />,
    title: 'Warehousing',
    description: 'Secure storage facilities with inventory management',
    details: 'NOORZAM offers modern warehousing solutions with advanced inventory management systems. Our facilities feature 24/7 security, climate control options, and flexible storage terms. We provide value-added services including cross-docking, picking and packing, labeling, and distribution to streamline your supply chain.'
  },
  {
    icon: <FileText size={40} />,
    title: 'Customs Clearance',
    description: 'Efficient customs documentation and clearance services',
    details: 'Our customs clearance experts navigate complex regulations and documentation requirements to ensure smooth import and export processes. We handle all necessary paperwork, duty calculations, and compliance issues, minimizing delays and avoiding penalties. Our team stays updated on changing customs regulations to provide accurate guidance.'
  },
  {
    icon: <Package size={40} />,
    title: 'Local Distribution',
    description: 'Reliable last-mile delivery throughout Mombasa and beyond',
    details: "NOORZAM's local distribution network covers Mombasa and surrounding regions with reliable and timely delivery services. We offer scheduled deliveries, route optimization, and flexible delivery options to meet your specific business needs. Our experienced drivers ensure safe handling and on-time delivery of your goods."
  }
];

function ServiceCard({ service }: { service: ServiceProps }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card hover className="h-full">
        <Card.Body>
          <div className="text-accent-500 mb-4">{service.icon}</div>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text className="mb-4">{service.description}</Card.Text>
          
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-neutral-600 mb-4">{service.details}</p>
          </motion.div>
          
          <button
            onClick={toggleExpand}
            className="flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Read Less</span>
                <ChevronUp size={16} className="ml-1" />
              </>
            ) : (
              <>
                <span>Read More</span>
                <ChevronDown size={16} className="ml-1" />
              </>
            )}
          </button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="NOORZAM Logistics provides comprehensive transportation and supply chain solutions tailored to your business needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;