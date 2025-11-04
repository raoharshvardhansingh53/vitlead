import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialType } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const { name, role, company, content, image } = testimonial;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-smooth border border-gray-100"
    >
      <Quote className="h-8 w-8 text-primary-200 mb-4" />
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;