import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, BarChart, TrendingUp, Users } from 'lucide-react';

import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import TestimonialCard from '../components/ui/TestimonialCard';

import { testimonials } from '../data';

const CaseStudyPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
          >
            Case Studies
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 text-center"
          >
            See how we've helped mortgage brokers transform their lead generation and grow their business.
          </motion.p>
        </div>
      </Section>

      {/* Featured Case Study */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-smooth overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <div className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                  Featured Case Study
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  How Elite Mortgage Solutions Generated 45 Qualified Leads in 60 Days
                </h2>
                <p className="text-gray-600 mb-6">
                  Elite Mortgage Solutions was struggling with lead generation despite spending $5,000 monthly on various marketing channels. See how we transformed their approach and delivered exceptional results.
                </p>
                
                <Button href="#full-case-study" variant="primary">
                  Read Full Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Elite Mortgage Solutions Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Full Case Study */}
      <Section id="full-case-study">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Elite Mortgage Solutions Success Story"
            subtitle="A comprehensive breakdown of how we transformed their lead generation strategy."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-smooth text-center"
            >
              <BarChart className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">45</h3>
              <p className="text-gray-600">Qualified Leads</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-smooth text-center"
            >
              <TrendingUp className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">385%</h3>
              <p className="text-gray-600">ROI</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-smooth text-center"
            >
              <Users className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">17</h3>
              <p className="text-gray-600">Closed Deals</p>
            </motion.div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h3>The Challenge</h3>
            <p>
              Elite Mortgage Solutions came to us with a common problem: they were spending thousands of dollars on digital advertising each month but weren't seeing a satisfactory return on investment. Their main challenges included:
            </p>
            <ul>
              <li>High cost per lead with low conversion rates</li>
              <li>Difficulty targeting the right audience</li>
              <li>Poor ad copy and creative that failed to engage potential clients</li>
              <li>Ineffective follow-up processes resulting in lost opportunities</li>
            </ul>
            
            <h3 className="mt-8">Our Approach</h3>
            <p>
              We implemented our comprehensive lead generation strategy:
            </p>
            <ol>
              <li>
                <strong>In-depth audience research</strong> - We identified the most profitable segments within their target market and created detailed buyer personas.
              </li>
              <li>
                <strong>Compelling ad creative and copy</strong> - We developed ad creatives and copy that spoke directly to the pain points and desires of their ideal clients.
              </li>
              <li>
                <strong>Optimized landing pages</strong> - We designed conversion-focused landing pages specific to each campaign.
              </li>
              <li>
                <strong>Professional follow-up system</strong> - We implemented our trained sales team to qualify leads and set appointments.
              </li>
            </ol>
            
            <h3 className="mt-8">The Results</h3>
            <p>
              Within 60 days of implementing our strategy, Elite Mortgage Solutions saw remarkable results:
            </p>
            <ul>
              <li>Generated 45 highly qualified mortgage leads</li>
              <li>Reduced cost per lead by 62%</li>
              <li>Achieved a 385% return on ad spend</li>
              <li>Closed 17 new mortgage deals directly attributed to our campaigns</li>
              <li>Established a consistent, predictable lead flow</li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Client Testimonials */}
      <Section className="bg-gray-50">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Hear directly from mortgage brokers who have experienced our results."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
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
            Ready to Be Our Next Success Story?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We're ready to help you achieve similar results for your mortgage business. Let's start with a conversation about your goals.
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

export default CaseStudyPage;