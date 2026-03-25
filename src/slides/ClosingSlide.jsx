import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const ClosingSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-closing" data-index={dataIndex} style={{ zIndex: 0 }}>
      <div style={{ background: 'var(--ink)', color: 'var(--bg-paper)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: '4px', padding: '3rem', border: '5px double var(--bg-paper)' }}>
        <Reveal>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.05em', margin: 0 }}>CONCLUSIONES GENERALES</h1>
          <div style={{ width: '100px', height: '4px', background: 'var(--accent)', margin: '2rem auto' }}></div>
          <p className="article-text" style={{ textAlign: 'center', fontSize: '1.2rem', margin: '0 auto', maxWidth: '800px', lineHeight: 1.6 }}>
            La teoría (Amdahl, Flynn) y nuestra práctica empírica en C demuestran una verdad absoluta: el futuro de la computación exige pensar en paralelo. Dominar la asincronía arquitectónica y los ecosistemas distribuidos será fundamental para liderar la escalabilidad del mañana.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', marginTop: '3rem', fontSize: '1.2rem', letterSpacing: '0.1em' }}>MUCHAS GRACIAS POR LA LECTURA.</p>
        </Reveal>
      </div>
    </Slide>
  );
};

export default ClosingSlide;
