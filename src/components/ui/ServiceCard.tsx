import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, MessageSquare, FileCheck, Layout, BarChart, PenTool, Brain } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const getIcon = () => {
    switch (icon) {
      case 'LineChart':
        return <LineChart className="h-6 w-6 text-primary-600" />;
      case 'MessageSquare':
        return <MessageSquare className="h-6 w-6 text-primary-600" />;
      case 'FileCheck':
        return <FileCheck className="h-6 w-6 text-primary-600" />;
      case 'Layout':
        return <Layout className="h-6 w-6 text-primary-600" />;
      case 'BarChart':
        return <BarChart className="h-6 w-6 text-primary-600" />;
      case 'PenTool':
        return <PenTool className="h-6 w-6 text-primary-600" />;
      case 'Brain':
        return <Brain className="h-6 w-6 text-primary-600" />;
      default:
        return <LineChart className="h-6 w-6 text-primary-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-smooth hover:shadow-md transition-shadow duration-300 border border-gray-100"
    >
      <div className="mb-4 p-3 bg-primary-50 inline-flex rounded-lg">
        {getIcon()}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;