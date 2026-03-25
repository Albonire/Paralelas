import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const AmdahlSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-amdahl" data-index={dataIndex} style={{ zIndex: 4 }}>
      <div className="columns" style={{ position: 'relative' }}>
        <div className="col-main">
          <Reveal as="h2" className="headline-large">La Ley de Amdahl: La Dura Verdad del Multihilo</Reveal>
          <Reveal as="p" className="article-text">
            No importa cuántos procesadores añadas, la velocidad de tu programa siempre estará limitada por la parte que NO se puede paralelizar. Es el cuello de botella existencial de la computación.
          </Reveal>
          <Reveal delay={0.2} className="technical-box" style={{ fontSize: '1.4rem', textAlign: 'center', margin: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>Ecuación de Speedup Teórico S(N):</span>
            <strong>S(N) = 1 / [ (1 - P) + (P / N) ]</strong>
          </Reveal>
          <Reveal as="p" delay={0.4} className="article-text">
            Donde <strong>P</strong> es la fracción paralelizable y <strong>N</strong> el número de procesadores. Si el 10% de tu código es secuencial, nunca serás más de 10 veces más rápido, aunque tengas un millón de núcleos físicos.
          </Reveal>
          
          <div className="photo-frame" style={{ position: 'absolute', bottom: '-15vh', left: '-5vw', width: '300px', zIndex: -1, opacity: 0.4 }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Fotografía macro de tecnología" style={{ border: '4px solid var(--ink)' }} />
          </div>
        </div>
        <div className="col-side" style={{ background: 'var(--ink)', color: 'var(--bg-paper)', padding: '2rem' }}>
          <h3 className="headline-med">EL MITO DEL HARDWARE</h3>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.6 }}>
            "Muchos creen erróneamente que duplicar el hardware duplica la velocidad. Gene Amdahl nos recuerda matemáticamente que la arquitectura inteligente del código es la verdadera reina de la optimización y la escala."
          </p>
          <div style={{ borderTop: '1px solid var(--bg-paper)', marginTop: '1rem', paddingTop: '1rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            Dr. Gene Amdahl, Congreso AFIPS (1967)
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default AmdahlSlide;
