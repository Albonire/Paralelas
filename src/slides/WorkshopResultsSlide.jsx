import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const WorkshopResultsSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-workshop-results" data-index={dataIndex} style={{ zIndex: 0 }}>
      <Reveal as="h2" className="headline-large" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Métricas Finales Recolectadas del Hardware Local</Reveal>
      
      <div className="columns" style={{ marginTop: '1rem' }}>
        <div className="col-main">
          <table className="comparison-table" style={{ fontSize: '1.2rem', width: '100%', background: 'white' }}>
            <thead>
              <tr>
                <th>Paradigma Estructural y Abordaje</th>
                <th>Primos Hallados Acumulados</th>
                <th>Tiempo de Proceso Nato Evaluado (sg)</th>
              </tr>
            </thead>
            <tbody>
              <Reveal as="tr" delay={0.1}>
                <td>Flujo Secuencial Típico Monolítico (For simple mono-hilo)</td>
                <td>348,513 totales</td>
                <td style={{ color: 'var(--ink-dim)', fontWeight: 'bold' }}>3.121 sg</td>
              </Reveal>
              <Reveal as="tr" delay={0.3}>
                <td style={{ background: 'rgba(196, 30, 58, 0.1)' }}>Flujo Paralelo Escindido (Ryzen a tope c/16 Hilos Lógicos)</td>
                <td style={{ background: 'rgba(196, 30, 58, 0.1)' }}>348,513 totales</td>
                <td style={{ background: 'rgba(196, 30, 58, 0.1)', color: 'var(--accent)', fontWeight: 'bold' }}>0.540 sg</td>
              </Reveal>
            </tbody>
          </table>

          <Reveal delay={0.6} style={{ marginTop: '2rem', border: '3px solid var(--ink)', padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.7)' }}>
            <h3 className="headline-med" style={{ marginBottom: '1rem' }}>Aceleración Efectiva Resultante del Sistema (Net Speedup)</h3>
            <div style={{ fontSize: '4.5rem', fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
              ~ 5.7x
            </div>
            <p className="article-text" style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Aquel programa paralizado terminó siendo cerca de seis veces más rápido al ejecutarse en la máquina local. Las implicaciones reales medibles de la ley de Amdahl quedan clarísimamente expuestas probatoriamente: no alcanzamos un speedup ideal puro y utópico y equitativo de '16x' por el mero hecho de que levantar y coordinar concurrentemente todos esos sub-hilos por cuenta del Sistema Operativo genera un overhead minúsculo estructural, ineludible e inevitable con esperas residuales estables limitativas en los semáforos de memoria (y E/S en las impresiones en consola), topando contra el cuello matemático limitante final absoluto expuesto por Gene Amdahl.
            </p>
          </Reveal>
        </div>
        
        <div className="col-side" style={{ display: 'flex', flexDirection: 'column' }}>
          <Reveal className="technical-box">
            <h4 className="headline-sm" style={{ marginBottom: '0.5rem' }}>Compilación a Metales Nativos Binaria GCC</h4>
            <code style={{ display: 'block', background: '#1e1e1e', color: '#4CAF50', padding: '0.6rem', marginTop: '0.3rem', fontSize: '0.75rem', borderRadius: '4px' }}>
              $ gcc seq.c -lm -o seq<br/><br/>
              $ gcc par.c -lm -fopenmp -o par
            </code>
          </Reveal>
          
          <Reveal delay={0.4} className="technical-box" style={{ marginTop: '1.5rem' }}>
            <h4 className="headline-sm" style={{ marginBottom: '0.5rem' }}>Sustrato de Ejecución Directo (Comandos Locales Corridos)</h4>
            <code style={{ display: 'block', background: '#1e1e1e', color: '#4CAF50', padding: '0.6rem', marginTop: '0.3rem', fontSize: '0.75rem', borderRadius: '4px' }}>
              $ ./seq<br/><br/>
              $ OMP_NUM_THREADS=16 ./par
            </code>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
};
export default WorkshopResultsSlide;
