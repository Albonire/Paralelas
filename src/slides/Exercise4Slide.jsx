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
            La Ley de Amdahl establece que existe un límite asintótico para el Speedup (<i>S<sub>max</sub></i>) a medida que el número de procesadores (<i>p</i>) tiende al infinito.
          </p>

          <p className="article-text" style={{ marginTop: '1rem', fontWeight: 'bold' }}>Fórmula límite:</p>
          
          <div style={{ margin: '1.5rem 0', fontFamily: 'serif', fontSize: '1.4rem', textAlign: 'center' }}>
            <i>S<sub>max</sub></i> = lim<sub><i>p</i>&rarr;&infin;</sub> 
            <span style={{ fontSize: '1.8rem', verticalAlign: 'middle', margin: '0 0.2rem' }}>[</span>
            <span style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'center'}}>
              <span style={{display: 'block', borderBottom: '1px solid var(--ink)'}}>1</span>
              <span style={{display: 'block'}}>(1 - <i>f</i>) + (<i>f</i> / <i>p</i>)</span>
            </span>
            <span style={{ fontSize: '1.8rem', verticalAlign: 'middle', margin: '0 0.2rem' }}>]</span>
            = 
            <span style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'center', marginLeft: '0.5rem'}}>
              <span style={{display: 'block', borderBottom: '1px solid var(--ink)'}}>1</span>
              <span style={{display: 'block'}}>(1 - <i>f</i>)</span>
            </span>
          </div>

          <p className="article-text" style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Cálculo con el factor <i>f</i> derivado de mi computador (0.8895):</p>
          
          <div style={{ fontFamily: 'serif', fontSize: '1.4rem', padding: '0.5rem 1rem', marginTop: '1rem' }}>
            <p style={{margin: '0.7rem 0'}}>
              <i>S<sub>max</sub></i> = 
              <span style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'center', margin: '0 0.5rem'}}>
                <span style={{display: 'block', borderBottom: '1px solid var(--ink)'}}>1</span>
                <span style={{display: 'block'}}>(1 - 0.8895)</span>
              </span>
            </p>
            <p style={{margin: '0.7rem 0'}}>
              <i>S<sub>max</sub></i> = 
              <span style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'center', margin: '0 0.5rem'}}>
                <span style={{display: 'block', borderBottom: '1px solid var(--ink)'}}>1</span>
                <span style={{display: 'block'}}>0.1105</span>
              </span>
            </p>
            <p style={{margin: '0.7rem 0', fontWeight: 'bold'}}>
              <i>S<sub>max</sub></i> &approx; 9.05
            </p>
          </div>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="technical-box">
            <h3 className="headline-small" style={{ marginBottom: '1rem', fontSize: '1.2rem', borderBottom: '1px solid var(--bg-paper)' }}>ANÁLISIS DEL LÍMITE</h3>
            <p className="article-text">
              El comportamiento de este algoritmo medido en <strong>mi equipo</strong> marca que, jamás superaré una mejora de velocidad de <strong style={{fontSize: '1.2rem'}}>9.05 veces</strong> respecto a su versión secuencial, ni siquiera si consiguiera un supercomputador con núcleos <strong style={{textDecoration: 'underline'}}>infinitos</strong>. 
            </p>
            <p className="article-text" style={{ marginTop: '1rem', opacity: 0.9 }}>
              Ese <strong>11.05%</strong> de código secuencial que observé se convierte en una barrera matemática absoluta e impenetrable para la escalabilidad.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default Exercise4Slide;
