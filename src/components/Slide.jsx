import React from 'react';


const Slide = ({ children, id, className = '', ...props }) => {
  return (
    <section className={`slide ${className}`} id={id} {...props}>
      <div className="slide-frame">
        {children}
      </div>
    </section>
  );
};

export default Slide;
