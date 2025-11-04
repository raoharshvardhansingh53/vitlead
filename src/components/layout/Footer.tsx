import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../../data';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo-dark.png"
                alt="Vitlead" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              We Get The Leads, You Get The Deals. Helping mortgage brokers grow with highly-qualified Facebook leads.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services#expert-ads" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Expert Facebook Ads
                </a>
              </li>
              <li>
                <a href="/services#sales-team" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Appointment Setting
                </a>
              </li>
              <li>
                <a href="/services#copywriting" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Conversion Copywriting
                </a>
              </li>
              <li>
                <a href="/services#growth" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Growth Strategies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              Ready to grow your mortgage business? Get in touch with us today.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {year} Vitlead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;