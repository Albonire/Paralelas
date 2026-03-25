import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const ComparisonSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-comparison" data-index={dataIndex} style={{ zIndex: 5 }}>
      <Reveal as="h2" className="headline-large" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Comparativa Directa de Paradigmas</Reveal>
      <table className="comparison-table" style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>
        <thead>
          <tr>
            <th>Característica Base</th>
            <th style={{ background: 'rgba(0,0,0,0.05)' }}>Multiprocesamiento (Paralelo)</th>
            <th>Multicomputación (Distribuida)</th>
          </tr>
        </thead>
        <tbody>
          <Reveal as="tr" delay={0.1}>
            <td>Memoria</td>
            <td style={{ background: 'rgba(0,0,0,0.05)' }}>Compartida / Física Unificada</td>
            <td>Privada / Distante</td>
          </Reveal>
          <Reveal as="tr" delay={0.2}>
            <td>Comunicación</td>
            <td style={{ background: 'rgba(0,0,0,0.05)' }}>Bus de Sistema / Caché</td>
            <td>Mensajes en Red Externa</td>
          </Reveal>
          <Reveal as="tr" delay={0.3}>
            <td>Escalabilidad</td>
            <td style={{ background: 'rgba(0,0,0,0.05)' }}>Limitada a la Placa Base</td>
            <td>Virtualmente Infinita (Nodos)</td>
          </Reveal>
          <Reveal as="tr" delay={0.4}>
            <td>Sistema Operativo</td>
            <td style={{ background: 'rgba(0,0,0,0.05)' }}>Único (Centralizado)</td>
            <td>Múltiples SO Independientes</td>
          </Reveal>
        </tbody>
      </table>
      
      <Reveal delay={0.6} className="pull-quote" style={{ fontSize: '1.3rem', margin: '2rem 10%' }}>
        "El paralelismo nació para optimizar radicalmente el <strong>Rendimiento</strong> de la tarea; la distribución nació para optimizar la <strong>Disponibilidad y Conectividad</strong> de los servicios ante los fallos físicos."
      </Reveal>
      
      {/* Overflow image static */}
      <div className="photo-frame" style={{ position: 'absolute', bottom: '-15vh', left: '10vw', width: '350px', zIndex: 20 }}>
        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8" alt="Red abstracta" style={{ border: '3px solid var(--ink)' }} />
      </div>
    </Slide>
  );
};

export default ComparisonSlide;
