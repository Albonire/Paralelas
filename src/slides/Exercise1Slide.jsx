import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const Exercise1Slide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-content" data-index={dataIndex}>
      <Reveal as="h2" className="headline-med">
        Ejercicio 1: Identificación del Hardware (lscpu)
      </Reveal>
      
      <div className="columns" style={{ marginTop: '1.5rem', height: 'calc(100% - 6rem)', overflowY: 'auto' }}>
        <div className="col-main">
          <p className="article-text">
            Utilizando el comando <code style={{background: 'var(--ink)', color: 'var(--bg-paper)', padding: '0.1rem 0.3rem'}}>lscpu</code> en mi instancia de Linux, procedí a identificar la arquitectura física y lógica subyacente de <strong>mi propio computador personal</strong>. Los resultados obtenidos describen el esquema de procesamiento del sistema en el que trabajé:
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem', marginBottom: '1.5rem', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--ink)', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Parámetro</th>
                <th style={{ padding: '0.5rem' }}>Valor en mi equipo</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>Sockets</td>
                <td style={{ padding: '0.5rem' }}>1</td>
              </tr>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>Cores por Socket</td>
                <td style={{ padding: '0.5rem' }}>8</td>
              </tr>
              <tr style={{ borderBottom: '1px dotted var(--ink)' }}>
                <td style={{ padding: '0.5rem' }}>Hilos por Core</td>
                <td style={{ padding: '0.5rem' }}>2</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>Núcleos Lógicos (Total)</td>
                <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>16</td>
              </tr>
            </tbody>
          </table>

          <p className="article-text">
            Esta configuración indica que <strong>mi computador</strong> cuenta con un único procesador físico dotado de 8 núcleos reales. Gracias a la tecnología de hyper-threading, cada núcleo real puede manejar 2 hilos simultáneamente, arrojando un total de 16 núcleos lógicos. A efectos de la ejecución del algoritmo de paralelización posterior, dispuse de <strong style={{fontStyle: 'italic'}}>p = 16</strong> hilos de procesamiento de hardware en mi máquina.
          </p>
        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <figure style={{ width: '100%', margin: 0 }}>
            {/* Se elimina el filtro para mantener el color original como se solicitó */}
            <img src="/Ejericicio1.png" alt="Captura de lscpu" style={{ width: '100%', border: '1px solid var(--ink)' }} />
            <figcaption style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', borderTop: '1px solid var(--ink)', paddingTop: '0.5rem' }}>
              <strong>Fig 1.</strong> Salida por consola revelando la topología de la CPU de mi computador (1 Socket, 8 Cores, 16 Threads).
            </figcaption>
          </figure>
        </div>
      </div>
    </Slide>
  );
};
export default Exercise1Slide;
