import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

function SectionTitle({ 
  title, 
  subtitle, 
  centered = true, 
  className = '' 
}: SectionTitleProps) {
  const alignClasses = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-12 ${alignClasses} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-primary-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionTitle;