import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const ConclusionsSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-content" data-index={dataIndex}>
      <Reveal as="h2" className="headline-large" style={{ fontSize: '3rem', borderBottom: '2px solid var(--ink)', paddingBottom: '1rem', marginBottom: '2rem' }}>
        Conclusiones del Estudio
      </Reveal>
      
      <div className="columns" style={{ marginTop: '1.5rem', height: 'calc(100% - 7rem)', overflowY: 'auto' }}>
        <div className="col-main" style={{ paddingRight: '2rem' }}>
          
          <Reveal delay={0.1} as="div" className="article-text" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
            <ol style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dotted var(--ink)' }}>
                <strong>Diagnóstico Preciso:</strong> La Ley de Amdahl demostró ser una herramienta altamente precisa para diagnosticar cuellos de botella y evaluar la eficiencia de algoritmos paralelos ejecutados en hardware real.
              </li>
              <li style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dotted var(--ink)' }}>
                <strong>Rendimientos Decrecientes:</strong> Comprobamos empíricamente que el crecimiento en núcleos (recursos de hardware) sufre de rendimientos decrecientes; pasar de 1 a 2 núcleos casi duplicó la velocidad, pero pasar de 8 a 16 núcleos lógicos solo mejoró el tiempo marginalmente.
              </li>
              <li style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dotted var(--ink)' }}>
                <strong>La Barrera del 9%:</strong> El <strong>11.05%</strong> de fracción serial (compuesto por el overhead, la gestión del sistema operativo y la sección inherentemente secuencial del algoritmo) dicta el techo infranqueable del sistema, estableciendo un <em>Speedup Máximo</em> matemático de <strong>9.05x</strong>.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Limitaciones del Hyper-Threading:</strong> Los núcleos lógicos simulados mediante "Hyper-threading" ofrecen beneficios tangibles de rendimiento, pero no deben confundirse ni igualarse con la potencia de los núcleos físicos reales. El <em>overhead</em> en la contención y gestión de los hilos se hace severamente evidente al tratar de saturar los 16 núcleos del sistema.
              </li>
            </ol>
          </Reveal>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid var(--ink)', paddingLeft: '2rem' }}>
          <div className="technical-box" style={{ background: 'var(--ink)', color: 'var(--bg-paper)' }}>
            <h3 style={{ borderBottom: '1px solid var(--bg-paper)', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase' }}>Cita Final</h3>
            <blockquote style={{ fontStyle: 'italic', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              "El esfuerzo computacional en el diseño de algoritmos rara vez es infinito; el límite lo establecen las partes que exigen que esperemos."
            </blockquote>
          </div>
          
          <div style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.6, fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
            <p>FIN DEL REPORTE TÉCNICO</p>
            <p>Ley de Amdahl · Validación Empírica</p>
            <p>2026</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default ConclusionsSlide;
