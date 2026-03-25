import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const ParallelismSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-parallelism" data-index={dataIndex} style={{ zIndex: 8 }}>
      <header className="masthead-top">
        <span>CONCEPTOS CLAVE</span>
        <span>COMPUTACIÓN PARALELA</span>
      </header>
      <div className="columns" style={{ position: 'relative' }}>
        <div className="col-side" style={{ display: 'flex', flexDirection: 'column' }}>
          <Reveal className="svg-icon" as="svg" viewBox="0 0 24 24">
            <path d="M13,3H11V7H13V3M13,17H11V21H13V17M21,11V13H17V11H21M7,11V13H3V11H7M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12M3,3V5H5V3H3M21,3V5H19V3H21M3,21V19H5V21H3M21,21V19H19V21H21Z"/>
          </Reveal>
          <Reveal as="h3" delay={0.2} className="headline-med">¿Qué es?</Reveal>
          <Reveal as="p" delay={0.4} className="article-text">
            Consiste en dividir un problema computacional complejo en partes más pequeñas que la máquina puede resolver de forma concurrente. Es equivalente a tener múltiples operarios ensamblando distintas piezas del mismo reloj.
          </Reveal>
        </div>
        
        <div className="col-main" style={{ position: 'relative' }}>
          <Reveal as="h2" className="headline-large">Divide y Vencerás: El Arte del Procesamiento Simultáneo</Reveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <Reveal delay={0.2}>
              <h4 className="headline-sm">A Nivel de Datos</h4>
              <p className="article-text">Una misma instrucción se ejecuta iterativamente sobre múltiples datos de manera conjunta. Este es el principio de funcionamiento nativo de las Tarjetas Gráficas modernas (VRAM pura).</p>
            </Reveal>
            <Reveal delay={0.4}>
              <h4 className="headline-sm">A Nivel de Tareas</h4>
              <p className="article-text">Diferentes hilos lógicos de código corriendo rutinas de programación completamente distintas operando al unísono. Este caso exprime al máximo tus 16 Hilos del Ryzen 7.</p>
            </Reveal>
          </div>
          
          <Reveal delay={0.6} className="pull-quote" style={{ fontSize: '1.4rem' }}>
            "En el verdadero paralelismo todos los núcleos comparten físicamente la misma memoria RAM y el reloj de la placa base."
          </Reveal>

          {/* Sin animación estática en overflow, corregido z-index */}
          <div className="photo-frame" style={{ position: 'absolute', top: '-10vh', right: '-5vw', width: '250px', zIndex: -1, transform: 'rotate(4deg)', opacity: 0.6 }}>
            <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea" alt="CPU Macro Wafer" style={{ border: '4px solid var(--ink)' }} />
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default ParallelismSlide;
