import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';

const FutureSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-future" data-index={dataIndex} style={{ zIndex: 0 }}>
      <div className="masthead">
        <Reveal as="h1" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>EL MAÑANA DE LA COMPUTACIÓN</Reveal>
      </div>
      <div className="columns" style={{ marginTop: '2rem' }}>
        <div className="col-main">
          <h2 className="headline-med">Hacia la Computación Edge y Ubicua</h2>
          <Reveal as="p" className="article-text" style={{ marginBottom: '1rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
            El futuro ya no se fundamenta únicamente en super ordenadores gigantescos ni en centros de datos inabarcables en las frías bases de silicio lejano ubicados en tierras remotas y aisladas; sino en el <strong>Edge Computing (Borde de Red)</strong> y <strong>procesamientos limítrofes</strong>. Consiste en llevar todo ese colosal poder computacional distribuido en la mano general colectiva general: la lámpara inteligente del poste público, el coche inteligente, tu tableta. Miles de millones dispersos calculando armónicamente un puzzle general invisible y descentralizado constante y permanentemente de forma interactiva y veloz.
          </Reveal>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <Reveal delay={0.2} style={{ flex: 1 }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent)' }}>Computación Cuántica Integrada</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.5, marginTop: '0.5rem' }}>El pináculo y santo grial ansiado del paralelismo material subatómico: manipular miles de estadios de partículas fluctuantes cuánticamente súper-apuestas a un mismo tiempo y subrogadas mutuamente sin demoras transaccionales de bus local.</p>
            </Reveal>
            <Reveal delay={0.4} style={{ flex: 1 }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent)' }}>IA Completamente Distribuida</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.5, marginTop: '0.5rem' }}>Entrenar en modo asíncrono y disperso mediante el concepto disruptor de redes complejas Federadas (Modelos Llama/GPT alimentándose colaborativamente en miles de millones y diminutos procesadores móviles y embebidos domésticos ocultos).</p>
            </Reveal>
          </div>
        </div>
        <div className="col-side" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Reveal delay={0.6} className="photo-frame" style={{ width: '100%', maxWidth: '320px', zIndex: 10 }}>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" alt="Hardware de supercomputador y fibra óptica" style={{ border: '3px solid var(--ink)' }} />
            <p className="caption">Figura 6.1: Vislumbrando las entrañas abstractas lógicas atadas a infraestructura de conmutadores modernos. Unsplash.</p>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
};

export default FutureSlide;
