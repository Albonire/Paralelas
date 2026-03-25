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
          
          <div style={{ padding: '1rem', background: 'var(--ink)', color: 'var(--bg-paper)', textAlign: 'center', margin: '1.5rem 0', fontFamily: 'serif', fontSize: '1.5rem' }}>
            <i>S</i> = 1 / ( (1 - <i>f</i>) + (<i>f</i> / <i>p</i>) )
          </div>

          <p className="article-text" style={{ marginBottom: '1.5rem' }}>Donde:<br/>
          <strong style={{fontStyle: 'italic'}}>f</strong> es la fracción del código que sí puede paralelizarse.<br/>
          <strong style={{fontStyle: 'italic'}}>(1-f)</strong> es la fracción serial irreductible.
          </p>

          <p className="article-text">Despejando matemáticamente <em style={{fontWeight:'bold'}}>f</em> con base en los datos experimentales que obtuve en <strong>mi computador</strong> (<strong style={{fontStyle: 'italic'}}>p = 12, S = 6.02</strong>):</p>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', background: 'rgba(0,0,0,0.05)', padding: '1rem', borderLeft: '3px solid var(--ink)' }}>
            <p style={{margin: '0.5rem 0'}}>6.02 = 1 / ( (1 - <i>f</i>) + (<i>f</i> / 12) )</p>
            <p style={{margin: '0.5rem 0'}}>6.02 × (1 - <i>f</i> + <i>f</i> / 12) = 1</p>
            <p style={{margin: '0.5rem 0'}}>6.02 - 6.02<i>f</i> + 0.5016<i>f</i> = 1</p>
            <p style={{margin: '0.5rem 0'}}>6.02 - 5.5184<i>f</i> = 1</p>
            <p style={{margin: '0.5rem 0'}}>5.02 = 5.5184<i>f</i></p>
            <p style={{margin: '0.5rem 0'}}><i>f</i> = 5.02 / 5.5184 ≈ <strong>0.9096</strong></p>
          </div>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="technical-box" style={{ border: '2px dashed var(--ink)' }}>
            <h3 className="headline-small" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>ANÁLISIS DEL EXPERIMENTO</h3>
            <p className="article-text">
              Como se evidenció en la consola de <strong>mi máquina</strong>, esto demuestra que el <strong>90.96%</strong> de mi algoritmo (cálculo de primos) se está ejecutando eficientemente en paralelo gracias a mis núcleos físicos y lógicos, mientras que un <strong>9.04%</strong> pertenece a la inicialización, combinación de hilos y la sincronización (overhead) que en mi computador debe ocurrir secuencialmente obligatoriamente.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default Exercise3Slide;
