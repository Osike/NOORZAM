import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const managementTeam: TeamMember[] = [
  {
    name: 'NOOR OMAR',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'With over 20 years in the logistics industry,Noor founded NOORZAM with a vision to provide reliable and efficient transportation solutions across Kenya.'
  },
  {
    name: 'AHMED NOOR',
    position: 'Operations Director',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Ahmedi oversees all operational aspects of NOORZAM, ensuring smooth execution of logistics services and maintaining our high quality standards.'
  },
  {
    name: 'OMAR NOOR',
    position: 'Fleet Manager',
    image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Omi manages our diverse fleet of vehicles, implementing maintenance schedules and ensuring all vehicles meet safety and performance standards.'
  },
  {
    name: 'Abdul Shakur',
    position: 'IT & Customer Service Manager',
    image: 'https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Abdul leads our customer service team, focusing on building strong client relationships and ensuring exceptional service delivery.'
  }
];

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover className="h-full">
        <div className="relative overflow-hidden h-64">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <p className="text-accent-500 font-medium mb-3">{member.position}</p>
          <Card.Text>{member.bio}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

function DriversSection() {
  return (
    <motion.div
      className="bg-primary-50 rounded-lg p-8 mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Dedicated Drivers</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-neutral-700 mb-4">
            Our team of professional drivers is the backbone of NOORZAM Logistics. With an average of 10+ years of experience, our drivers are skilled, safety-conscious, and customer-oriented professionals.
          </p>
          <p className="text-neutral-700">
            Each driver undergoes rigorous training and certification, ensuring they maintain the highest standards of safety and service excellence. They're equipped with the latest communication tools to provide real-time updates and are committed to on-time deliveries.
          </p>
        </div>
        
        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/31745016/pexels-photo-31745016/free-photo-of-group-of-people-with-truck-at-warehouse-entrance.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="NOORZAM Professional Drivers" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-primary-800 mb-1">30+</h4>
          <p className="text-sm text-neutral-600">Professional Drivers</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-primary-800 mb-1">10+ years</h4>
          <p className="text-sm text-neutral-600">Average Experience</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-primary-800 mb-1">100%</h4>
          <p className="text-sm text-neutral-600">Safety Certified</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-primary-800 mb-1">24/7</h4>
          <p className="text-sm text-neutral-600">Service Availability</p>
        </div>
      </div>
    </motion.div>
  );
}

function TeamSection() {
  return (
    <section id="team" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Team" 
          subtitle="Meet the experienced professionals behind NOORZAM Logistics who ensure excellence in every service we provide."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {managementTeam.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
        
        <DriversSection />
      </div>
    </section>
  );
}

export default TeamSection;