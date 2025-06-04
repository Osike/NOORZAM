import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

interface TruckType {
  id: string;
  name: string;
  image: string;
  description: string;
  capacity: string;
  features: string[];
}

const truckTypes: TruckType[] = [
  {
    id: 'articulated',
    name: 'Articulated Trucks',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Versatile trucks for long-haul transportation',
    capacity: 'Up to 44 tons',
    features: [
      'Suitable for long-distance transportation',
      'Ideal for large volume goods',
      'Flexible loading options',
      'Fuel-efficient for highway travel'
    ]
  },
  {
    id: 'rigid',
    name: 'Rigid Trucks',
    image: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Reliable transport for urban and regional deliveries',
    capacity: '3-26 tons',
    features: [
      'Perfect for urban deliveries',
      'Easy maneuverability',
      'Various body types available',
      'Ideal for medium distance routes'
    ]
  },
  {
    id: 'refrigerated',
    name: 'Refrigerated Trucks',
    image: 'https://images.pexels.com/photos/4047472/pexels-photo-4047472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Temperature-controlled transportation for perishable goods',
    capacity: '1-30 tons',
    features: [
      'Temperature-controlled environment',
      'Suitable for perishable goods',
      'Available in various sizes',
      'Real-time temperature monitoring'
    ]
  },
  {
    id: 'specialized',
    name: 'Specialized Vehicles',
    image: 'https://images.pexels.com/photos/2659155/pexels-photo-2659155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Custom solutions for unique transportation needs',
    capacity: 'Varies by type',
    features: [
      'Designed for specific cargo types',
      'Heavy-duty capabilities',
      'Enhanced safety features',
      'Customizable configurations'
    ]
  }
];

function FleetSection() {
  const [selectedTruck, setSelectedTruck] = useState<TruckType | null>(null);
  
  const openDetails = (truck: TruckType) => {
    setSelectedTruck(truck);
  };
  
  const closeDetails = () => {
    setSelectedTruck(null);
  };
  
  return (
    <section id="fleet" className="section bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Fleet" 
          subtitle="NOORZAM maintains a diverse and modern fleet of vehicles to meet any transportation need."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {truckTypes.map((truck, index) => (
            <motion.div
              key={truck.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover onClick={() => openDetails(truck)} className="cursor-pointer h-full">
                <Card.Image 
                  src={truck.image} 
                  alt={truck.name} 
                  className="h-48"
                />
                <Card.Body>
                  <Card.Title>{truck.name}</Card.Title>
                  <Card.Text>{truck.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Truck Details Modal */}
        {selectedTruck && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div 
              className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64">
                <img 
                  src={selectedTruck.image} 
                  alt={selectedTruck.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={closeDetails}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-neutral-800 hover:text-primary-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">{selectedTruck.name}</h3>
                <p className="text-neutral-600 mb-4">{selectedTruck.description}</p>
                
                <div className="mb-4">
                  <span className="font-semibold text-neutral-800">Capacity:</span> {selectedTruck.capacity}
                </div>
                
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 text-neutral-600 space-y-1">
                    {selectedTruck.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={closeDetails}
                    className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FleetSection;