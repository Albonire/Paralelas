import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const CoverSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-cover" data-index={dataIndex} style={{ zIndex: 10 }}>
      <div className="masthead" style={{ marginBottom: '0.5rem' }}>
        <div className="masthead-top">
          <span>EL HERALDO COMPUTACIONAL</span>
          <span>Arquitectura y Organización de Computadores</span>
          <span>Marzo 2026</span>
        </div>
        <Reveal as="h1" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>LA REVOLUCIÓN DE LA ESCALA MASIVA</Reveal>
      </div>

      <div className="columns" style={{ position: 'relative' }}>
        <div className="col-main">
          <Reveal as="h2" className="headline-large">
            Introducción a los Paradigmas de Arquitecturas Paralelas y Distribuidas
          </Reveal>
          
          <Reveal delay={0.2} as="p" className="article-text drop-cap">
            Se ha llegado al límite térmico y físico de los procesadores de núcleo único. Hoy en día, la solución tanto en la academia como en la industria es orquestar múltiples unidades trabajando en equipo. El paralelismo y la distribución se erigen como los únicos caminos hacia el futuro continuo.
          </Reveal>
          
          <Reveal delay={0.4} className="pull-quote">
            "No podemos hacer que la luz viaje más rápido en el cobre, pero sí podemos poner a miles a calcular al tiempo."
          </Reveal>

          {/* Imagen overflow estática reubicada para no tapar texto */}
          <div className="photo-frame" style={{ position: 'absolute', bottom: '-25vh', right: '-15vw', width: '50%', zIndex: -1, opacity: 0.85 }}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Hardware de servidor" style={{ width: '100%', border: '4px solid var(--bg-paper)' }} />
          </div>
        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="headline-med">EN ESTA EDICIÓN</h3>
          <ul style={{ listStyle: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '1rem' }}>I. Hardware Local</li>
            <li style={{ marginBottom: '1rem' }}>II. Intro a Paralelismo</li>
            <li style={{ marginBottom: '1rem' }}>III. Taxonomía</li>
            <li style={{ marginBottom: '1rem' }}>IV. Distribución y Red</li>
            <li style={{ marginBottom: '1rem' }}>V. Resultados Reales en PC Local</li>
          </ul>
          
          <div className="technical-box" style={{ marginTop: 'auto', background: 'var(--ink)', color: 'var(--bg-paper)' }}>
            <strong>AUTOR:</strong><br/>
            Anderson González<br/>Ingeniería de Sistemas
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default CoverSlide;
