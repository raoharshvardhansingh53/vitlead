import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const ResourcePage: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: "The Complete Guide to Mortgage Lead Generation in 2025",
      description: "Learn the latest strategies and tactics for generating high-quality mortgage leads in today's competitive market.",
      type: "Guide",
      image: "https://images.pexels.com/photos/4560092/pexels-photo-4560092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "5 Facebook Ad Secrets for Mortgage Brokers",
      description: "Discover the proven Facebook advertising techniques that are working right now for mortgage professionals.",
      type: "Checklist",
      image: "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "How to Qualify Mortgage Leads for Maximum Conversion",
      description: "Learn our proven system for qualifying leads and ensuring you only spend time with prospects who are ready to move forward.",
      type: "Webinar",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "The Ultimate Mortgage Broker's Follow-Up Sequence",
      description: "Get our proven follow-up sequence that turns cold leads into eager clients without being pushy or salesy.",
      type: "Template",
      image: "https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

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
            Resources
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            Explore our collection of guides, templates, and tools designed to help mortgage brokers generate more leads and close more deals.
          </motion.p>
        </div>
      </Section>
      
      {/* Featured Resources */}
      <Section className="bg-gray-50">
        <SectionHeading
          title="Featured Resources"
          subtitle="Access valuable insights and tools that can help you improve your mortgage business."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-smooth overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium mb-4">
                  {resource.type}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Educational Blog */}
      <Section>
        <SectionHeading
          title="Latest Articles"
          subtitle="Stay updated with the latest trends, strategies, and insights in mortgage lead generation."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "7 Common Mistakes Mortgage Brokers Make with Facebook Ads",
              date: "June 15, 2025",
              image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              title: "How to Create a High-Converting Landing Page for Mortgage Leads",
              date: "June 8, 2025",
              image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              title: "The Power of Testimonials in Mortgage Marketing",
              date: "May 29, 2025",
              image: "https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          ].map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-smooth overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {article.title}
                </h3>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Read Article <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline">
            View All Articles
          </Button>
        </div>
      </Section>
      
      {/* Newsletter */}
      <Section className="bg-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 p-3 rounded-full">
              <FileText className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="text-gray-700 mb-8">
            Get weekly insights, tips, and strategies delivered straight to your inbox. Stay ahead of the competition with our expert advice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium shadow-btn hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Apply What You've Learned?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Let our experts handle your Facebook ads and lead generation while you focus on closing deals and growing your business.
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

export default ResourcePage;