import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    challenge: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend
    console.log(formState);
    // For demo purposes, we'll just show success message
    setIsSubmitted(true);
  };
  
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
            Book an Appointment
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-4"
          >
            Fill in these quick details to check your eligibility to work with us.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-600 mb-12"
          >
            We only onboard mortgage brokers who are serious about scaling. Let's see if we're a good fit.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Application Submitted Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in working with Vitlead. Our team will review your application and get back to you within 1-2 business days to discuss next steps.
              </p>
              <Button 
                variant="primary"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Application
              </Button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-smooth p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Ad Budget *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-15000">$10,000 - $15,000</option>
                    <option value="15000+">$15,000+</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">
                    Biggest Challenge Right Now *
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    value={formState.challenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Briefly describe the biggest challenge you're facing with lead generation..."
                  ></textarea>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto"
                  onClick={handleSubmit}
                >
                  Check My Eligibility
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Note: We review every application to ensure a mutually beneficial partnership. Only qualified applicants will be contacted.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </Section>
      
      {/* Contact Information */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have questions before applying? Contact us directly."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-smooth text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">For general inquiries:</p>
              <a href="mailto:info@vitlead.com" className="text-primary-600 hover:text-primary-700">
                info@vitlead.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-smooth text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Monday-Friday, 9AM-5PM EST:</p>
              <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-700">
                (555) 123-4567
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-smooth text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Our headquarters:</p>
              <address className="not-italic text-primary-600">
                123 Marketing St.<br />
                Suite 456<br />
                New York, NY 10001
              </address>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 mb-8">
            Still have questions? Don't hesitate to reach out to us directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-smooth">
              <h3 className="text-lg font-medium text-gray-900 mb-3">What if I don't get leads in 30 days?</h3>
              <p className="text-gray-600">
                We stand by our promise: If you don't receive at least 15 high-quality leads within your first 30 days, we'll refund your investment in full. No questions asked, no hidden conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-smooth">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Can I keep the ad creatives and funnel after the trial?</h3>
              <p className="text-gray-600">
                Absolutely! All ad creatives, copy, and funnel designs we develop for your campaign remain your property, even if you decide not to continue with our services after the trial period.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-smooth">
              <h3 className="text-lg font-medium text-gray-900 mb-3">How soon can we get started?</h3>
              <p className="text-gray-600">
                Once your application is approved and onboarding is complete, we can typically launch your campaign within 7 business days. Our streamlined process ensures we can get your ads running quickly while still maintaining the quality and targeting precision you need.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-smooth">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Do you work with all mortgage brokers?</h3>
              <p className="text-gray-600">
                We're selective about who we work with to ensure we can deliver the best results. We prefer to work with established mortgage brokers who have a clear value proposition and are ready to scale their business. Our application process helps determine if we're a good mutual fit.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;