import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const Exercise2Slide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-content" data-index={dataIndex}>
      <Reveal as="h2" className="headline-med">
        Ejercicio 2: Speedup Experimental
      </Reveal>
      
      <div className="columns" style={{ marginTop: '1.5rem', height: 'calc(100% - 6rem)', overflowY: 'auto' }}>
        <div className="col-main">
          <p className="article-text">
            Primero evalué el programa en <strong>mi computador</strong> de forma secuencial puro (<span style={{fontStyle: 'italic'}}>T<sub>s</sub></span>) y posteriormente varié el número de hilos de forma incremental para obtener los diferentes Tiempos Paralelos (<span style={{fontStyle: 'italic'}}>T<sub>p(n)</sub></span>). 
            Los tiempos registrados por mi equipo y el <em>Speedup</em> real (<span style={{fontStyle: 'italic'}}>S = T<sub>s</sub> / T<sub>p(n)</sub></span>) están resumidos en la siguiente tabla:
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem', marginBottom: '1.5rem', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--ink)', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Hilos en mi PC (p)</th>
                <th style={{ padding: '0.5rem' }}>Tiempo (Tp) en ms</th>
                <th style={{ padding: '0.5rem' }}>Speedup (S = Ts / Tp)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>1 (Ts)</td>
                <td style={{ padding: '0.5rem' }}>295</td>
                <td style={{ padding: '0.5rem' }}>1.0x (Base)</td>
              </tr>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>2</td>
                <td style={{ padding: '0.5rem' }}>164</td>
                <td style={{ padding: '0.5rem' }}>1.80x</td>
              </tr>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>4</td>
                <td style={{ padding: '0.5rem' }}>96</td>
                <td style={{ padding: '0.5rem' }}>3.07x</td>
              </tr>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>6</td>
                <td style={{ padding: '0.5rem' }}>72</td>
                <td style={{ padding: '0.5rem' }}>4.10x</td>
              </tr>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>8</td>
                <td style={{ padding: '0.5rem' }}>59</td>
                <td style={{ padding: '0.5rem' }}>5.00x</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>16</td>
                <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>49</td>
                <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>6.02x</td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="article-text" style={{ fontSize: '1.05rem', fontStyle: 'italic', borderLeft: '3px solid var(--ink)', paddingLeft: '1rem' }}>
            A medida que añadí núcleos lógicos para la ejecución, el tiempo decrece, pero el Speedup dictado por mi procesador <strong style={{fontWeight:'bold'}}>no creció de forma estrictamente lineal</strong>. Esto evidencia la existencia de un cuello de botella. Al final, con los 16 núcleos de mi máquina, pasé de 295 ms a 49 ms, obteniendo mi tiempo récord.
          </p>
          
          <figure style={{ width: '100%', margin: '2rem 0 0 0' }}>
            <img src="/Ejercicio 2.png" alt="Captura Ejecución 16 Hilos" style={{ width: '100%', border: '1px solid var(--ink)' }} />
            <figcaption style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', borderTop: '1px solid var(--ink)', paddingTop: '0.5rem' }}>
              <strong>Fig 2.</strong> Salida real capturada en mi computador evidenciando los tiempos por iteración.
            </figcaption>
          </figure>
        </div>
      </div>
    </Slide>
  );
};
export default Exercise2Slide;
