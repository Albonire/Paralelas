import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TypewriterReveal = ({ text, delay = 0, className = '', as = 'div', style = {} }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;
    if (isInView) {
      setDisplayedText(""); // reset
      let i = 0;
      const typeNextChar = () => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(typeNextChar, 15); // typing speed
        }
      };
      // start after delay
      timeout = setTimeout(typeNextChar, delay * 1000);
    } else {
      setDisplayedText(""); // clear when out of view
    }
    return () => clearTimeout(timeout);
  }, [isInView, text, delay]);

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent ref={ref} className={className} style={{ ...style, whiteSpace: 'pre-wrap' }}>
      {displayedText}
      {isInView && displayedText.length < text.length && (
        <span style={{ borderRight: '2px solid var(--ink)', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
      )}
    </MotionComponent>
  );
};

export default TypewriterReveal;
