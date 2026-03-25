import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const MotionComponent = motion[as] || motion.div;
  
  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default Reveal;
