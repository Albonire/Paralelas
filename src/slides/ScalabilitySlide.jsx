import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const ScalabilitySlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-scalability" data-index={dataIndex} style={{ zIndex: 3 }}>
      <div style={{ padding: '1rem', width: '100%', marginBottom: '2rem' }}>
          <Reveal as="h2" className="headline-large" style={{ textAlign: 'center' }}>Los Dos Caminos del Escalamiento Sistemático</Reveal>
      </div>
      
      <div className="columns" style={{ marginTop: '0', position: 'relative' }}>
        <div className="col-main" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingRight: '1rem' }}>
          <Reveal className="technical-box" style={{ borderStyle: 'solid', borderWidth: '3px' }}>
            <h3 style={{ color: 'var(--accent)' }}>Escalamiento VERTICAL (Scale-Up)</h3>
            <p style={{ fontSize: '1rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Aumento de capacidad en un nodo único.</p>
            <ul style={{ fontSize: '0.95rem', marginTop: '1rem', marginLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>Mejora de componentes individuales (RAM, CPU, Almacenamiento).</li>
              <li>Limitado intrínsecamente por las restricciones físicas y térmicas del silicio.</li>
              <li>Genera un Punto Único de Fallo (SPoF).</li>
            </ul>
          </Reveal>
        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '1rem' }}>
          <Reveal delay={0.2} className="technical-box" style={{ borderStyle: 'solid', borderWidth: '3px' }}>
            <h3 style={{ color: 'var(--accent)' }}>Escalamiento HORIZONTAL (Scale-Out)</h3>
            <p style={{ fontSize: '1rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Distribución de carga en múltiples nodos.</p>
            <ul style={{ fontSize: '0.95rem', marginTop: '1rem', marginLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>Integración de servidores básicos a través de red.</li>
              <li>Alta disponibilidad y tolerancia a fallos por redundancia.</li>
              <li>Complejidad sistémica: requiere orquestación (deadlocks, race conditions).</li>
            </ul>
          </Reveal>
        </div>

        {/* Imagen central cruzando las dos columnas */}
        <div style={{ position: 'absolute', bottom: '2vh', left: '25%', width: '50%', zIndex: 1, opacity: 0.9 }}>
          <img src="https://images.unsplash.com/photo-1558618047-3c8c76e6c8b3?q=80&w=2669&auto=format&fit=crop" alt="Centro de Datos" style={{ width: '100%', height: '22vh', objectFit: 'cover', border: '4px solid var(--ink)', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }} />
          <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--ink)' }}>Arreglo de servidores implementando escalamiento horizontal coordinado</div>
        </div>
      </div>
    </Slide>
  );
};
export default ScalabilitySlide;
