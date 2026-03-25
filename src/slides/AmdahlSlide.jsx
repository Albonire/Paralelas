import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const AmdahlSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-amdahl" data-index={dataIndex} style={{ zIndex: 4 }}>
      <div className="columns" style={{ position: 'relative' }}>
        <div className="col-main" style={{ paddingRight: '2rem' }}>
          <Reveal as="h2" className="headline-large">Ley de Amdahl: Análisis Desempeño vs Recursos</Reveal>
          
          <Reveal as="p" className="article-text" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            La formulación establece que la ganancia de velocidad máxima de un algoritmo (speedup) se halla estrictamente limitada por la porción de código que debe ejecutarse de forma secuencial, independientemente del número de procesadores concurrentes.
          </Reveal>
          
          <Reveal delay={0.2} className="technical-box" style={{ fontSize: '1.4rem', textAlign: 'center', margin: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>Ecuación Teórica de Speedup Constante:</span>
            <strong>S(N) = 1 / [ (1 - P) + (P / N) ]</strong>
          </Reveal>
          
          <Reveal as="p" delay={0.4} className="article-text" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            Donde <strong>P</strong> representa la fracción estrictamente paralelizable y <strong>N</strong> el número total de unidades de procesamiento activas.
          </Reveal>
        </div>
        
        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2rem' }}>
          <div style={{ background: 'var(--ink)', color: 'var(--bg-paper)', padding: '2rem' }}>
            <h3 className="headline-med" style={{ color: 'var(--bg-paper)' }}>LÍMITE ASINTÓTICO</h3>
            <p style={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              "La cantidad de esfuerzo requerido para desarrollar código paralelo rara vez resulta en un decremento lineal del tiempo de ejecución. La arquitectura secuencial subyacente es la que finalmente dicta el rendimiento tope a escala."
            </p>
            <div style={{ borderTop: '1px solid var(--bg-paper)', paddingTop: '1rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
              Congreso AFIPS, 1967
            </div>
          </div>
          
          <div className="photo-frame" style={{ marginTop: '2rem', width: '100%' }}>
            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2574&auto=format&fit=crop" alt="Patrón matemático - Ley de Amdahl" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default AmdahlSlide;
