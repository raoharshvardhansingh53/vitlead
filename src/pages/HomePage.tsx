import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import FaqItem from '../components/ui/FaqItem';
import SectionHeading from '../components/ui/SectionHeading';

import { services, testimonials, faqs } from '../data';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary-50 to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              We Help Mortgage Brokers Grow with Facebook Ads
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 mb-8"
            >
              Get super high-quality leads without wasting thousands of dollars.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-smooth mb-10"
            >
              <p className="text-lg md:text-xl font-medium text-primary-600 mb-0">
                15 Super High-Qualified Leads in 30 Days or You Get Your Money Back (No B.S.)
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button to="/contact" variant="primary" size="lg" className="mr-4">
                Book an Appointment
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions designed to help mortgage brokers generate high-quality leads and grow their business."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/services" variant="outline">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-primary-900 text-white">
        <SectionHeading
          title="Why Mortgage Brokers Choose Us"
          subtitle="We understand the unique challenges faced by mortgage brokers in today's digital landscape."
          centered
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-medium mb-4">Results-Driven Approach</h3>
            <ul className="space-y-3">
              {[
                'Money-back guarantee ensures we\'re committed to your success',
                'Focus on qualified leads that convert, not just traffic',
                'Transparent reporting on campaign performance',
                'Continuous optimization based on real-time data'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-medium mb-4">Industry Expertise</h3>
            <ul className="space-y-3">
              {[
                'Specialized in mortgage industry advertising',
                'Deep understanding of compliance requirements',
                'Proven strategies that work specifically for mortgage brokers',
                'Stay ahead of industry trends and algorithm changes'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          title="Success Stories"
          subtitle="Don't just take our word for it. Here's what our clients have to say."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-accent-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Ready to Transform Your Mortgage Business?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Stop wasting money on unqualified leads. Start working with clients who are ready to close deals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button to="/contact" variant="primary" size="lg">
              Check My Eligibility <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our services and guarantees."
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;