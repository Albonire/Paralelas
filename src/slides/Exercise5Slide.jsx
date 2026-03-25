import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const Exercise5Slide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-content" data-index={dataIndex}>
      <Reveal as="h2" className="headline-med">
        Ejercicio 5: Ley de Amdahl - Teórico vs Real
      </Reveal>
      
      <div className="columns" style={{ marginTop: '1.5rem', height: 'calc(100% - 6rem)', overflowY: 'auto' }}>
        <div className="col-main">
          <p className="article-text">
            Desarrollé un modelo predictivo calculando los tiempos teóricos esperados asumiendo un hardware ideal sin contención (línea verde en la gráfica), y lo comparé contra los tiempos producidos por el hardware de <strong>mi propio computador</strong> medidos experimentalmente (línea azul).
          </p>

          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }} className="article-text">
            <li style={{ marginBottom: '0.8rem' }}>
              A <strong>1, 2 y 4 núcleos</strong>, ambas curvas son virtualmente idénticas en mi equipo, demostrando gran eficiencia inicial.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              A partir de los <strong>6 y 8 núcleos</strong>, la curva ideal continúa descendiendo de forma más pronunciada, separándose de la realidad empírica de mi procesador.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              A los <strong>16 núcleos</strong> la diferencia es palpable: existe un "overhead" real en mi máquina (cambios de contexto, fallos de caché, sincronización del bus de sistema) que impide que el hardware opere al mismo nivel de perfección que el modelo matemático puro.
            </li>
          </ul>

        </div>

        <div className="col-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <figure style={{ width: '100%', margin: 0 }}>
            {/* Sin filtros de colores para mantener el original */}
            <img src="/Ejericio 5.png" alt="Curva de Rendimiento Amdahl" style={{ width: '100%', border: '1px solid var(--ink)' }} />
            <figcaption style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', borderTop: '1px solid var(--ink)', paddingTop: '0.5rem' }}>
              <strong>Fig 3.</strong> Gráfica comparativa de mi computador: Tiempo vs Número de Hilos. Se observa la divergencia entre el modelo matemático (Ideal) y el Hardware.
            </figcaption>
          </figure>
        </div>
      </div>
    </Slide>
  );
};
export default Exercise5Slide;
