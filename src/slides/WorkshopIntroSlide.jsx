import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const WorkshopIntroSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-workshop-intro" data-index={dataIndex} style={{ zIndex: 2 }}>
      <div className="masthead">
        <Reveal as="h1" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>TALLER PRÁCTICO SEMANAL</Reveal>
        <h2 className="headline-med" style={{ marginTop: '1rem' }}>Cacería de Números Primos en Paralelo</h2>
      </div>
      <div className="columns" style={{ marginTop: '2rem', position: 'relative' }}>
        <div className="col-main">
          <Reveal as="h3" className="headline-sm">El Desafío Empírico</Reveal>
          <Reveal as="p" className="article-text">
            Encontrar exhaustivamente todos los números primos presentes hasta el límite de <strong>Cinco Millones (5,000,000)</strong> iteraciones enteras. Esta labor de repetición matemática intensa se erige como el candidato perfecto para observar empíricamente los límites de nuestro procesador Ryzen de 16 hilos y 8 núcleos en tiempo real.
          </Reveal>
          
          <Reveal delay={0.2} style={{ marginTop: '2rem' }}>
            <h3 className="headline-sm">Herramientas Operativas Interactivas</h3>
            <ul style={{ marginLeft: '1.5rem', fontFamily: 'var(--font-mono)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Lenguaje Base Estructural:</strong> C (Performance y ejecución más cerca al hardware).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Framework Multihilo:</strong> Directivas dinámicas desde OpenMP (Open Multi-Processing API).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Compilador Activo:</strong> GCC de Linux enganchado con banderas estrictas flag `-fopenmp`.</li>
            </ul>
          </Reveal>
          
          <div className="photo-frame" style={{ position: 'absolute', bottom: '-20vh', left: '1rem', width: '40%', zIndex: -1, opacity: 0.3 }}>
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713" alt="Código Matrix verde y oscuro" style={{ border: '3px solid var(--ink)' }} />
          </div>
        </div>
        
        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Reveal className="technical-box" style={{ background: 'var(--ink)', color: 'var(--bg-paper)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem', fontSize: '1.4rem' }}>METODOLOGÍA EVALUATIVA</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
              Contrastaremos los tiempos exactos de ejecución del programa. Primero, procesando la validación del algoritmo de "fuerza bruta" ocupando un solo hilo lógico de procesamiento. Luego, mediremos el mismo flujo pero esta vez asíncronamente dividido paramétricamente entre los 16 hilos computacionales del equipo.
            </p>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
};
export default WorkshopIntroSlide;
