import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const timeline = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'NOORZAM Logistics was established in Mombasa with a small fleet of trucks.',
  },
  {
    year: '2013',
    title: 'Regional Expansion',
    description: 'Expanded operations to cover major cities across Kenya.',
  },
  {
    year: '2015',
    title: 'Warehousing Services',
    description: 'Added comprehensive warehousing and storage facilities to our service offerings.',
  },
  {
    year: '2018',
    title: 'Fleet Expansion',
    description: 'Doubled our fleet size and added specialized vehicles to meet diverse client needs.',
  },
  {
    year: '2021',
    title: 'Technology Integration',
    description: 'Implemented advanced tracking and logistics management systems.',
  },
  {
    year: '2023',
    title: 'International Services',
    description: 'Began offering cross-border logistics services to neighboring countries.',
  },
];

function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Noorzam Hauliers" 
          subtitle="Based in Mombasa, Kenya, we're committed to providing reliable and efficient logistics solutions."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Story</h3>
            <p className="text-neutral-700 mb-4">
              Founded in 2010, NOORZAM Logistics began with a simple mission: to provide reliable and efficient transportation services in Mombasa and beyond. What started with a small fleet of trucks has grown into one of the region's most trusted logistics providers.
            </p>
            <p className="text-neutral-700 mb-4">
              Over the years, we've expanded our services to include freight forwarding, warehousing, customs clearance, and local distribution. Our growth has been fueled by our unwavering commitment to customer satisfaction and service excellence.
            </p>
            <p className="text-neutral-700">
              Today, NOORZAM operates a diverse fleet of modern vehicles and employs a team of experienced professionals dedicated to meeting the logistics needs of businesses across Kenya and East Africa.
            </p>
          </motion.div>
          
          {/* Values & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Values & Mission</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 text-accent-500">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Reliability</h4>
                  <p className="text-neutral-700">
                    We understand that timely delivery is critical to your business. Our commitment to reliability means you can count on us to deliver your cargo safely and on schedule, every time.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-accent-500">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Excellence</h4>
                  <p className="text-neutral-700">
                    We strive for excellence in every aspect of our operations. From our well-maintained fleet to our professional staff, we maintain the highest standards of quality and service.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-accent-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Efficiency</h4>
                  <p className="text-neutral-700">
                    Our efficient processes and experienced team ensure that your logistics needs are handled with maximum effectiveness and minimum hassle, saving you time and resources.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center">Our Journey</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <h4 className="text-xl font-bold text-primary-700">{item.title}</h4>
                    <p className="text-neutral-600 mt-1">{item.description}</p>
                  </div>
                  
                  {/* Year Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shadow-md z-10">
                      <span className="text-xs font-bold text-white">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;