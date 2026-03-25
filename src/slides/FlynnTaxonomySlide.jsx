import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const FlynnTaxonomySlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-flynn" data-index={dataIndex} style={{ zIndex: 7 }}>
      <Reveal as="h2" className="headline-large" style={{ textAlign: 'center', borderBottom: '2px solid var(--ink)', paddingBottom: '0.5rem' }}>
        Taxonomía Clásica de Flynn
      </Reveal>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', height: '100%', alignItems: 'start', marginTop: '1rem' }}>
        <Reveal className="technical-box" style={{ textAlign: 'center', minHeight: '80%' }}>
          <h3 className="headline-sm">SISD</h3>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Single Instruction, Single Data</p>
          <div style={{ fontSize: '0.85rem', marginTop: '1rem', lineHeight: 1.4 }}>
            La computadora clásica. Un único procesador ejecutando un único flujo de instrucciones secuencial. Sin paralelismo real.
          </div>
        </Reveal>
        <Reveal delay={0.2} className="technical-box" style={{ textAlign: 'center', borderStyle: 'solid', background: 'rgba(0,0,0,0.05)', minHeight: '80%' }}>
          <h3 className="headline-sm">SIMD</h3>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Single Instruction, Multiple Data</p>
          <div style={{ fontSize: '0.85rem', marginTop: '1rem', lineHeight: 1.4 }}>
            Perfecto para las GPUs. Una misma instrucción aplicada simultáneamente a muchos datos. (Ejemplo: procesar todos los píxeles de una imagen).
          </div>
        </Reveal>
        <Reveal delay={0.4} className="technical-box" style={{ textAlign: 'center', minHeight: '80%' }}>
          <h3 className="headline-sm">MISD</h3>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Multiple Instruction, Single Data</p>
          <div style={{ fontSize: '0.85rem', marginTop: '1rem', lineHeight: 1.4 }}>
            Poco común. Varias instrucciones se ejecutan sobre un mismo dato, usualmente para detectar fallos copiando redundancia (Sistemas espaciales).
          </div>
        </Reveal>
        <Reveal delay={0.6} className="technical-box" style={{ textAlign: 'center', borderStyle: 'solid', background: 'rgba(0,0,0,0.05)', minHeight: '80%' }}>
          <h3 className="headline-sm">MIMD</h3>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Multiple Instruction, Multiple Data</p>
          <div style={{ fontSize: '0.85rem', marginTop: '1rem', lineHeight: 1.4 }}>
            El núcleo de la computación moderna. Múltiples procesadores haciendo múltiples cosas diferentes a la vez. (Tu Ryzen 7 opera así).
          </div>
        </Reveal>
      </div>

      <div className="photo-frame" style={{ position: 'absolute', bottom: '-22vh', right: '5vw', width: '500px', zIndex: 20 }}>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Supercomputadora" style={{ width: '100%', border: '4px solid var(--bg-paper)' }} />
      </div>
    </Slide>
  );
};
export default FlynnTaxonomySlide;
