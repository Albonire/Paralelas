import React from 'react';
import { motion } from 'framer-motion';

const InkReveal = ({ children, className = '' }) => {
  return (
    <div className={`ink-reveal ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {children}
      <motion.div
        initial={{ x: "0%" }}
        whileInView={{ x: "101%" }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--bg-paper)',
          zIndex: 2
        }}
      />
    </div>
  );
};

export default InkReveal;
