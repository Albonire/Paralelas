import React, { useState, useEffect, useRef } from 'react';

const SlideContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesCount = React.Children.count(children);

  const scrollToSlide = React.useCallback((index) => {
    if (containerRef.current) {
      const slides = containerRef.current.querySelectorAll('.slide');
      if (slides[index]) {
        slides[index].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Handle intersection observer to update active dot
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const slides = containerRef.current.querySelectorAll('.slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      slides.forEach((slide) => observer.unobserve(slide));
    };
  }, [children]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      let newIndex = activeIndex;
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        newIndex = Math.min(activeIndex + 1, slidesCount - 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        newIndex = Math.max(activeIndex - 1, 0);
      }

      if (newIndex !== activeIndex) {
        scrollToSlide(newIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, slidesCount, scrollToSlide]);

  // Handle tap/click navigation for tablets & mobile
  const handleContainerClick = (e) => {
    // Ignore if clicking interactive elements or the nav dots
    if (e.target.closest('a') || e.target.closest('.nav-dots') || window.getSelection().toString().length > 0) {
      return;
    }

    const screenWidth = window.innerWidth;
    const clickX = e.clientX;

    // Tap on the right 50% = Next, Tap on the left 50% = Previous
    if (clickX > screenWidth / 2) {
      const newIndex = Math.min(activeIndex + 1, slidesCount - 1);
      if (newIndex !== activeIndex) scrollToSlide(newIndex);
    } else {
      const newIndex = Math.max(activeIndex - 1, 0);
      if (newIndex !== activeIndex) scrollToSlide(newIndex);
    }
  };

  return (
    <>
      <nav className="nav-dots">
        {Array.from({ length: slidesCount }).map((_, i) => (
          <div
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToSlide(i)}
            title={`Slide ${i + 1}`}
          />
        ))}
      </nav>
      
      <div className="presentation-container" ref={containerRef} onClick={handleContainerClick}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { 'data-index': index });
          }
          return child;
        })}
      </div>
    </>
  );
};

export default SlideContainer;
