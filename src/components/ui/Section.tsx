import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, animate = true }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  if (animate) {
    return (
      <motion.section 
        id={id}
        className={`py-16 md:py-24 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 lg:px-8">
          {children}
        </div>
      </motion.section>
    );
  }
  
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;