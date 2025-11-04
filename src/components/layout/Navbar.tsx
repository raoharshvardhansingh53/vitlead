import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-smooth py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo-light.png"
              alt="Vitlead" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                      location.pathname === item.path
                        ? 'text-primary-600'
                        : scrolled
                        ? 'text-gray-800'
                        : 'text-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-2.5 text-sm font-medium text-white shadow-btn hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all"
            >
              Book Appointment
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white"
        >
          <div className="px-4 py-3 space-y-1 border-t">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full mt-4 text-center rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700"
              onClick={toggleMenu}
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;