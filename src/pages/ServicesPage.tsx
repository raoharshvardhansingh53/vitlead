import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';

import { services } from '../data';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            Comprehensive solutions designed to provide end-to-end support for mortgage brokers looking to generate high-quality leads and grow their business.
          </motion.p>
        </div>
      </Section>
      
      {/* Services Grid */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </Section>
      
      {/* Featured Service */}
      <Section id="expert-ads">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vitlead Expert Ads (Done-For-You)</h2>
            <p className="text-gray-700 mb-6">
              Our flagship service provides fully managed Facebook ad campaigns specifically optimized for mortgage brokers. We handle everything from audience research to ad creation, testing, and optimization.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Targeted audience research and segmentation',
                'Custom ad creative and compelling copywriting',
                'A/B testing to maximize conversion rates',
                'Regular optimization based on performance data',
                'Compliance with financial advertising regulations',
                'Detailed reporting and ROI tracking'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button to="/contact" variant="primary">
              Get Started
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Facebook Ads Expert" 
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Sales Team Section */}
      <Section id="sales-team" className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img 
              src="https://images.pexels.com/photos/7709452/pexels-photo-7709452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sales Team" 
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trained Sales Team as Appointment Setters</h2>
            <p className="text-gray-700 mb-6">
              Our professional sales team works as an extension of your business, handling lead qualification and appointment setting to ensure you only spend time with prospects who are ready to move forward.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Professional lead qualification process',
                'Timely follow-up with all incoming leads',
                'Skilled appointment setting that respects your schedule',
                'Detailed lead notes and qualification information',
                'Seamless integration with your existing workflow',
                'Increased conversion rates from lead to client'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button to="/contact" variant="primary">
              Learn More
            </Button>
          </motion.div>
        </div>
      </Section>
      
      {/* Pricing CTA */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Transparent Pricing & Guaranteed Results"
            subtitle="We believe in being upfront about our pricing and backing our services with a solid guarantee."
            centered
            light
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary-800 p-8 rounded-lg mt-12 text-left"
          >
            <h3 className="text-2xl font-medium mb-4 text-center">Our Guarantee</h3>
            <p className="text-gray-300 mb-6 text-center">
              15 Super High-Qualified Leads in 30 Days or You Get Your Money Back (No B.S.)
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-700 p-5 rounded-lg">
                <h4 className="font-medium mb-3">What You Get:</h4>
                <ul className="space-y-2">
                  {[
                    'Custom Facebook ad campaign',
                    'Professional sales team support',
                    'Custom landing pages and funnels',
                    'A/B testing and optimization',
                    'Weekly performance reports',
                    'Dedicated account manager'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary-700 p-5 rounded-lg">
                <h4 className="font-medium mb-3">Qualification Process:</h4>
                <p className="text-gray-300 mb-4">
                  We don't work with everyone. To ensure mutual success, we have a qualification process to determine if we're a good fit.
                </p>
                <Button to="/contact" variant="secondary" size="lg" className="w-full">
                  Check Your Eligibility
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;