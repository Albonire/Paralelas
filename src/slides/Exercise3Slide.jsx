import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const Exercise3Slide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-content" data-index={dataIndex}>
      <Reveal as="h2" className="headline-med">
        Ejercicio 3: Fracción Paralelizable y Serial
      </Reveal>
      
      <div className="columns" style={{ marginTop: '1.5rem', height: 'calc(100% - 6rem)', overflowY: 'auto' }}>
        <div className="col-main">
          <p className="article-text">La fórmula general del Speedup según Amdahl es:</p>
          
          <div style={{ margin: '1.5rem 0', fontFamily: 'serif', fontSize: '1.4rem', textAlign: 'center' }}>
            <i>S</i> = <span style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'center'}}>
              <span style={{display: 'block', borderBottom: '1px solid var(--ink)'}}>1</span>
              <span style={{display: 'block'}}>(1 - <i>f</i>) + (<i>f</i> / <i>p</i>)</span>
            </span>
          </div>

          <p className="article-text" style={{ marginBottom: '1.5rem' }}>Donde:<br/>
          <strong style={{fontStyle: 'italic'}}>f</strong> es la fracción del código que sí puede paralelizarse.<br/>
          <strong style={{fontStyle: 'italic'}}>(1 - f)</strong> es la fracción serial irreductible.
          </p>

          <p className="article-text">Despejando matemáticamente <em style={{fontWeight:'bold'}}>f</em> con base en los datos experimentales que obtuve en <strong>mi computador</strong> (<strong style={{fontStyle: 'italic'}}>p = 16, S = 6.02</strong>):</p>

          <div style={{ fontFamily: 'serif', fontSize: '1.3rem', padding: '0.5rem 1rem', marginTop: '1rem' }}>
            <p style={{margin: '0.5rem 0'}}>6.02 = <span style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'center'}}><span style={{display: 'block', borderBottom: '1px solid var(--ink)'}}>1</span><span style={{display: 'block'}}>(1 - <i>f</i>) + (<i>f</i> / 16)</span></span></p>
            <p style={{margin: '0.5rem 0'}}>6.02 &times; (1 - <i>f</i> + <i>f</i> / 16) = 1</p>
            <p style={{margin: '0.5rem 0'}}>6.02 - 6.02<i>f</i> + 0.37625<i>f</i> = 1</p>
            <p style={{margin: '0.5rem 0'}}>6.02 - 5.64375<i>f</i> = 1</p>
            <p style={{margin: '0.5rem 0'}}>5.02 = 5.64375<i>f</i></p>
            <p style={{margin: '0.5rem 0'}}><i>f</i> = <span style={{display: 'inline-block', verticalAlign: 'middle', textAlign: 'center'}}><span style={{display: 'block', borderBottom: '1px solid var(--ink)'}}>5.02</span><span style={{display: 'block'}}>5.64375</span></span> &approx; <strong>0.8895</strong></p>
          </div>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="technical-box" style={{ border: '2px dashed var(--ink)' }}>
            <h3 className="headline-small" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>ANÁLISIS DEL EXPERIMENTO</h3>
            <p className="article-text">
              Como se evidenció en la consola de <strong>mi máquina</strong>, esto demuestra que el <strong>88.95%</strong> de mi algoritmo (cálculo de primos) se está ejecutando eficientemente en paralelo gracias a mis núcleos físicos y lógicos, mientras que un <strong>11.05%</strong> pertenece a la inicialización, combinación de hilos y la sincronización (overhead) que en mi computador debe ocurrir secuencialmente obligatoriamente.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default Exercise3Slide;
