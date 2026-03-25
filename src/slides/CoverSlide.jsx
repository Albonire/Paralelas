import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const CoverSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-cover" data-index={dataIndex} style={{ zIndex: 10 }}>
      <div className="masthead" style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
        <div className="masthead-top">
          <span>UNIVERSIDAD DE PAMPLONA</span>
          <span>INGENIERÍA DE SISTEMAS</span>
          <span>2026-1</span>
        </div>
        <Reveal as="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', padding: '0 1rem', lineHeight: '1.1' }}>
          Ley de Amdahl: Validación Experimental en Hardware Real
        </Reveal>
      </div>

      <div className="columns" style={{ position: 'relative', marginTop: '1.5rem', height: 'calc(100% - 7rem)', overflowY: 'auto' }}>
        <div className="col-main" style={{ paddingRight: '2rem' }}>
          
          <div className="technical-box" style={{ background: 'transparent', color: 'var(--ink)', border: 'none', padding: 0 }}>
            <Reveal as="h2" className="headline-large" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Detalles del Reporte
            </Reveal>
            
            <Reveal delay={0.2} as="div" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
              <p style={{ marginBottom: '0.8rem' }}><strong>Materia:</strong> Computación Masiva</p>
              <p style={{ marginBottom: '0.8rem' }}><strong>Universidad:</strong> Universidad de Pamplona</p>
              <p style={{ marginBottom: '0.8rem' }}><strong>Programa:</strong> Ingeniería de Sistemas</p>
              
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--ink)', color: 'var(--bg-paper)' }}>
                <strong>PRESENTADO POR:</strong><br/>
                <span style={{ fontSize: '1.3rem' }}>Anderson Fabian Gonzalez</span><br/>
                <span style={{ fontSize: '1.3rem' }}>Javier Niño</span>
              </div>
              
              <p style={{ fontSize: '0.95rem', marginTop: '1.5rem', fontStyle: 'italic', borderLeft: '4px solid var(--ink)', paddingLeft: '1rem' }}>
                Nota importante: Todos los experimentos, métricas, y compilaciones detalladas en esta presentación fueron ejecutadas <strong>exclusivamente en mi computador personal</strong> para aislar el entorno de medición.
              </p>
            </Reveal>
          </div>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', paddingTop: '0.5rem' }}>
          <h3 className="headline-med" style={{ fontSize: '1.3rem' }}>FASES DEL ESTUDIO EN MI COMPUTADOR</h3>
          <ul style={{ listStyle: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '1rem', borderBottom: '1px dotted var(--ink)', paddingBottom: '0.4rem' }}><span>Ej 1.</span> Hardware (Mi equipo)</li>
            <li style={{ marginBottom: '1rem', borderBottom: '1px dotted var(--ink)', paddingBottom: '0.4rem' }}><span>Ej 2.</span> Speedup Experimental</li>
            <li style={{ marginBottom: '1rem', borderBottom: '1px dotted var(--ink)', paddingBottom: '0.4rem' }}><span>Ej 3.</span> Fracción Paralelizable</li>
            <li style={{ marginBottom: '1rem', borderBottom: '1px dotted var(--ink)', paddingBottom: '0.4rem' }}><span>Ej 4.</span> Predicción Teórica</li>
            <li style={{ marginBottom: '1rem', borderBottom: '1px dotted var(--ink)', paddingBottom: '0.4rem' }}><span>Ej 5.</span> Comparativa y Fenómenos</li>
          </ul>
        </div>
        
        <div style={{ position: 'absolute', bottom: '-20vh', left: '20%', width: '60%', zIndex: -1, opacity: 0.85 }}>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2669&auto=format&fit=crop" alt="Supercomputador" style={{ width: '100%', height: '30vh', objectFit: 'cover', border: '5px solid var(--bg-paper)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
        </div>
      </div>
    </Slide>
  );
};
export default CoverSlide;
