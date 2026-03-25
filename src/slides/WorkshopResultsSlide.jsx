import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const WorkshopResultsSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-results" data-index={dataIndex} style={{ zIndex: 0 }}>
      {/* Añadimos div scrollable para que quepa todo sin cortarse */}
      <div style={{ height: '100%', overflowY: 'auto', paddingRight: '1rem', paddingBottom: '3rem' }}>
        <Reveal as="h2" className="headline-large" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Resolución del Taller Semana 4
        </Reveal>

        <div className="columns" style={{ position: 'relative', marginTop: 0 }}>
          <div className="col-main" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '1rem' }}>
            
            <Reveal className="technical-box">
              <h3 className="headline-sm" style={{ color: 'var(--accent)' }}>Ejercicio 1: Cores Físicos vs Lógicos</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Comando en PowerShell: <code>Get-CimInstance Win32_Processor | Select-Object NumberOfCores, NumberOfLogicalProcessors</code></p>
              <ul style={{ fontSize: '0.9rem', marginLeft: '1.2rem' }}>
                <li><strong>Interpretación:</strong> La CPU posee 8 núcleos físicos reales, pero 16 núcleos lógicos gracias al Hyper-Threading (SMT). Cada núcleo físico maneja instrucciones de 2 hilos simultáneos.</li>
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="technical-box">
              <h3 className="headline-sm" style={{ color: 'var(--accent)' }}>Ejercicio 2: Speedup Experimental (S)</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Cálculo de S = T_secuencial / T_paralelo</p>
              <ul style={{ fontSize: '0.9rem', marginLeft: '1.2rem' }}>
                <li>Tiempo Secuencial (T<sub>s</sub>) = ~1.20s</li>
                <li>Tiempo Paralelo (T<sub>p</sub>) usando 12 hilos = ~0.25s</li>
                <li><strong>S<sub>exp</sub> = 1.20 / 0.25 = 4.8x</strong>. El algoritmo es 4.8 veces más rápido empíricamente.</li>
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="technical-box">
              <h3 className="headline-sm" style={{ color: 'var(--accent)' }}>Ejercicio 3: Fracción Paralelizable (P)</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Uso algebraico invertido de Amdahl para deducir P.</p>
              <div style={{ background: '#f5f5f5', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                P = [ N(S - 1) ] / [ S(N - 1) ]<br/>
                Para N=12, S=4.8:<br/>
                P = [ 12(4.8 - 1) ] / [ 4.8(12 - 1) ] = 45.6 / 52.8 ≈ <strong>0.863 (86.3%)</strong>
              </div>
            </Reveal>

          </div>

          <div className="col-side" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1rem' }}>
            <Reveal delay={0.3} className="technical-box">
              <h3 className="headline-sm" style={{ color: 'var(--accent)' }}>Ej. 4: Predicción Teórica (P=0.85)</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>S(N) = 1 / [ (1 - 0.85) + (0.85 / N) ]</p>
              <table className="comparison-table" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
                <thead>
                  <tr><th>N Hilos</th><th>S(N) Predicho</th></tr>
                </thead>
                <tbody>
                  <tr><td>N = 1</td><td>1.00x</td></tr>
                  <tr><td>N = 2</td><td>1.74x</td></tr>
                  <tr><td>N = 4</td><td>2.76x</td></tr>
                  <tr><td>N = 6</td><td>3.43x</td></tr>
                  <tr><td>N = 12</td><td><strong>4.53x</strong></td></tr>
                  <tr style={{ background: 'rgba(0,0,0,0.05)' }}><td>N = ∞</td><td>S<sub>max</sub> = 6.66x</td></tr>
                </tbody>
              </table>
            </Reveal>

            <Reveal delay={0.4} className="technical-box" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 className="headline-sm">Ej. 5: Comparación Teórica vs Práctica</h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                En N=12, el resultado práctico (4.8x) es sumamente cercano al valor teórico predicho para P=0.85 (4.53x). La limitación se debe directamente al 14% del tiempo secuencial en la instanciación de dependencias (Ej. escritura atómica, gestión de memoria). Asimismo, la superación de núcleos lógicos (&gt;8) genera sobrecarga por cambios de contexto, mermando el incremento ideal en hardware.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default WorkshopResultsSlide;
