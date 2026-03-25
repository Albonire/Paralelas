import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const ScalabilitySlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-scalability" data-index={dataIndex} style={{ zIndex: 3 }}>
      <Reveal as="h2" className="headline-large" style={{ textAlign: 'center' }}>Los Dos Caminos del Escalamiento Sistemático</Reveal>

      <div className="columns" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="col-main">
          <Reveal className="technical-box" style={{ borderStyle: 'solid', borderWidth: '3px' }}>
            <h3 style={{ color: 'var(--accent)' }}>Escalamiento VERTICAL (Scale-Up)</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Comprar e instalar un servidor más grande y caro.</p>
            <ul style={{ fontSize: '0.8rem', marginTop: '1rem', marginLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>Mejorar componentes (+ RAM, + Cores de CPU).</li>
              <li>Llegarás rápidamente al límite térmico y económico de la física del silicio.</li>
              <li>Punto único de fallo (SPoF): Si el servidor muere, todo el flujo cesa.</li>
            </ul>
          </Reveal>
          <Reveal delay={0.2} className="technical-box" style={{ borderStyle: 'solid', borderWidth: '3px' }}>
            <h3 style={{ color: 'var(--accent)' }}>Escalamiento HORIZONTAL (Scale-Out)</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Interconectar miles de servidores comerciales básicos.</p>
            <ul style={{ fontSize: '0.8rem', marginTop: '1rem', marginLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>Unir nodos a través de protocolos estandarizados de red.</li>
              <li>Alta disponibilidad garantizada: Si un equipo falla, hay mil más.</li>
              <li>El software general debe ser fuertemente rediseñado para soportarlo.</li>
            </ul>
          </Reveal>
        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column' }}>
          <Reveal style={{ border: '2px solid var(--ink)', padding: '1.5rem', background: 'rgba(0,0,0,0.03)' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>OFERTA LABORAL DEL FUTURO</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>SE NECESITA: Ingeniero experto en solucionar problemas distribuidos como las infames <strong>Condiciones de Carrera (Race Conditions)</strong> o bien, los indetectables bloqueos absolutos de hardware <strong>(Deadlocks inter-nodos)</strong>.</p>
          </Reveal>

          {/* Image overflowing visually without animations */}
          <div className="photo-frame" style={{ position: 'absolute', bottom: '-20vh', right: '2rem', width: '300px', zIndex: 10 }}>
            <img src="https://images.unsplash.com/photo-1558618047-3c8c76e6c8b3" alt="Racks de servidores en centro de datos" style={{ border: '3px solid var(--ink)' }} />
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default ScalabilitySlide;
