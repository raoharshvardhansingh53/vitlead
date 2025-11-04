import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, ThumbsUp } from 'lucide-react';

import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Vitlead</h1>
            <p className="text-lg text-gray-700 mb-6">
              We're a team of digital marketing specialists dedicated to helping mortgage brokers generate high-quality leads and grow their businesses.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience in the mortgage industry and digital marketing, we understand the unique challenges faced by mortgage brokers in today's competitive landscape.
            </p>
            
            <Button to="/contact" variant="primary">
              Work With Us
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Vitlead Team" 
              className="w-full h-auto rounded-lg shadow-smooth"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Mission Section */}
      <Section className="bg-gray-50">
        <SectionHeading
          title="Our Mission"
          subtitle="At Vitlead, our mission is to empower mortgage brokers with cutting-edge digital marketing strategies that deliver tangible results."
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-700 mb-6"
          >
            We focus on generating high-quality leads through targeted Facebook advertising, ensuring our clients achieve consistent growth without unnecessary expenditure.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-smooth"
            >
              <div className="mb-4 p-3 bg-primary-50 inline-flex rounded-lg">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Our Focus</h3>
              <p className="text-gray-600">
                We focus exclusively on the mortgage industry, allowing us to develop specialized strategies that generate qualified leads for brokers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-smooth"
            >
              <div className="mb-4 p-3 bg-primary-50 inline-flex rounded-lg">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Our Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced marketers, copywriters, designers, and sales professionals who understand the mortgage industry inside and out.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-smooth"
            >
              <div className="mb-4 p-3 bg-primary-50 inline-flex rounded-lg">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Our Approach</h3>
              <p className="text-gray-600">
                We believe in transparency, accountability, and results. Our money-back guarantee reflects our confidence in delivering exceptional results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-smooth"
            >
              <div className="mb-4 p-3 bg-primary-50 inline-flex rounded-lg">
                <ThumbsUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Our Promise</h3>
              <p className="text-gray-600">
                We promise to deliver high-quality leads that convert into closed deals, helping you grow your mortgage business consistently.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* About Harry Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Founder</h2>
            <p className="text-gray-700 mb-4">
              Vitlead was founded by Harry, a digital marketing expert with over a decade of experience in lead generation for the financial services industry.
            </p>
            <p className="text-gray-600 mb-4">
              After seeing countless mortgage brokers waste thousands of dollars on ineffective advertising campaigns, Harry decided to create a service specifically tailored to the needs of mortgage professionals.
            </p>
            <p className="text-gray-600 mb-4">
              His approach combines deep industry knowledge with cutting-edge digital marketing techniques to deliver leads that actually convert.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img 
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Founder" 
              className="w-full h-auto rounded-lg shadow-smooth"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Mortgage Business?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join the growing number of mortgage brokers who are experiencing consistent growth with our lead generation strategies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button to="/contact" variant="secondary" size="lg">
              Check Your Eligibility
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;