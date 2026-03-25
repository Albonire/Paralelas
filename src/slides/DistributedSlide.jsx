import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const DistributedSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-distributed" data-index={dataIndex} style={{ zIndex: 6 }}>
      <header className="masthead-top">
        <span>SECCIÓN II: DESCENTRALIZACIÓN</span>
        <span>SISTEMAS DISTRIBUIDOS</span>
      </header>
      <div className="columns" style={{ position: 'relative' }}>
        <div className="col-main">
          <Reveal as="h2" className="headline-large">Sistemas Distribuidos</Reveal>
          <Reveal as="p" className="article-text">
            A diferencia del paralelismo interno, la computación distribuida vive en la separación. Los nodos de procesamiento no comparten memoria ni reloj; operan de manera autónoma y comparten mensajes a través de una red local o mundial.
          </Reveal>
          <Reveal delay={0.2} style={{ marginTop: '2rem', border: '1px solid var(--ink)', padding: '1rem' }}>
            <h4 className="headline-sm" style={{ textTransform: 'uppercase' }}>Atributos Principales:</h4>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.8rem', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
              <li style={{ marginBottom: '0.7rem' }}><strong>Heterogeneidad:</strong> Hardware y software diferentes trabajando juntos como si fueran uno solo.</li>
              <li style={{ marginBottom: '0.7rem' }}><strong>Transparencia:</strong> El usuario final ve un único sistema computacional, aunque por debajo sean cientos de servidores orquestados.</li>
              <li style={{ marginBottom: '0.7rem' }}><strong>Tolerancia a fallos:</strong> Si un nodo (servidor físico) muere, el resto de la red dinámica asume la carga y el sistema general sobrevive impecablemente.</li>
            </ul>
          </Reveal>
        </div>
        <div className="col-side" style={{ display: 'flex', flexDirection: 'column' }}>
          <Reveal className="svg-icon" as="svg" viewBox="0 0 24 24">
            <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"/>
          </Reveal>
          <Reveal as="h3" delay={0.2} className="headline-med">Paso de Mensajes</Reveal>
          <Reveal as="p" delay={0.4} className="article-text">
            Dado que no existe una Memoria RAM compartida que una mágicamente a cada nodo de la red, la única forma de cooperar de forma asíncrona es enviar paquetes continuos de datos mediante protocolos de red.
          </Reveal>
          <Reveal delay={0.6} className="technical-box" style={{ marginTop: 'auto', border: '2px solid var(--ink)' }}>
            <strong>CUELLO DE BOTELLA:</strong><br/>
            Mientras que el paralelismo es limitado por los escasos ciclos de reloj del procesador aislado, la distribución lidia con un demonio mucho peor: <strong>la latencia inherente e imprevisibilidad estocástica de la red web.</strong>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
};
export default DistributedSlide;
