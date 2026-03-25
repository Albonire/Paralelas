import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const Exercise4Slide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-content" data-index={dataIndex}>
      <Reveal as="h2" className="headline-med">
        Ejercicio 4: Predicción Teórica del Speedup Máximo
      </Reveal>
      
      <div className="columns" style={{ marginTop: '1.5rem', height: 'calc(100% - 6rem)', overflowY: 'auto' }}>
        <div className="col-main">
          <p className="article-text">
            La Ley de Amdahl establece que existe un límite asintótico para el Speedup (<span style={{fontStyle: 'italic'}}>S<sub>max</sub></span>) a medida que el número de procesadores (<span style={{fontStyle: 'italic'}}>p</span>) tiende al infinito.
          </p>

          <p className="article-text" style={{ marginTop: '1rem', fontWeight: 'bold' }}>Fórmula límite:</p>
          <div style={{ padding: '1rem', background: 'var(--ink)', color: 'var(--bg-paper)', textAlign: 'center', margin: '1rem 0', fontFamily: 'serif', fontSize: '1.5rem' }}>
            <i>S<sub>max</sub></i> = lim<sub><i>p</i>→∞</sub> [ 1 / ( (1 - <i>f</i>) + (<i>f</i> / <i>p</i>) ) ] = 1 / (1 - <i>f</i>)
          </div>

          <p className="article-text" style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Cálculo con el factor <i>f</i> derivado de mi computador (0.9096):</p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', background: 'rgba(0,0,0,0.05)', padding: '1rem', borderLeft: '3px solid var(--ink)', marginTop: '0.5rem' }}>
            <p style={{margin: '0.5rem 0'}}><i>S<sub>max</sub></i> = 1 / (1 - 0.9096)</p>
            <p style={{margin: '0.5rem 0'}}><i>S<sub>max</sub></i> = 1 / 0.0904</p>
            <p style={{margin: '0.5rem 0'}}><i>S<sub>max</sub></i> ≈ <strong>11.06</strong></p>
          </div>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="technical-box">
            <h3 className="headline-small" style={{ marginBottom: '1rem', fontSize: '1.2rem', borderBottom: '1px solid var(--bg-paper)' }}>ANÁLISIS DEL LÍMITE</h3>
            <p className="article-text">
              El comportamiento de este algoritmo medido en <strong>mi equipo</strong> marca que, jamás superaré una mejora de velocidad de <strong style={{fontSize: '1.2rem'}}>11.06 veces</strong> respecto a su versión secuencial, ni siquiera si consiguiera un supercomputador con núcleos <strong style={{textDecoration: 'underline'}}>infinitos</strong>. 
            </p>
            <p className="article-text" style={{ marginTop: '1rem', opacity: 0.9 }}>
              Ese <strong>9.04%</strong> de código secuencial que observé se convierte en una barrera matemática absoluta e impenetrable para la escalabilidad.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default Exercise4Slide;
