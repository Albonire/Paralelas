import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';
import LaptopModel from '../components/LaptopModel';

const SpecCallout = ({ delay, icon, title, details, style, motionProps = {} }) => {
  return (
    <motion.div 
      className="spec-callout" 
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.4, delay }}
      {...motionProps}
    >
      <div className="spec-icon">
        <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="spec-line" />
      <div className="spec-text">
        <strong>{title}</strong>
        {details}
      </div>
    </motion.div>
  );
};

const LaptopSpecsSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-specs" data-index={dataIndex} style={{ zIndex: 9 }}>
      <header className="masthead-top">
        <span>LABORATORIO DE PRUEBAS</span>
        <span>EQUIPO LOCAL (LSCPU)</span>
      </header>
      
      <div style={{ position: 'relative', height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', zIndex: 10 }}>
          <Reveal as="h2" className="headline-large" style={{ borderBottom: 'none', marginBottom: '0.5rem' }}>
            Arquitectura del Portátil de Pruebas
          </Reveal>
          <Reveal as="p" className="article-text" style={{ textAlign: 'center', marginBottom: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Para comprender el rendimiento de los ejercicios, debemos conocer el hardware subyacente de nuestra máquina local usada en el taller. Comandos de revisión como <code>lscpu</code> revelaron lo siguiente:
          </Reveal>
        </div>

        <div style={{ flex: 1, position: 'relative', width: '100%' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 45 }}>
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6} adjustCamera={1.2}>
                  <LaptopModel />
                </Stage>
              </Suspense>
              <OrbitControls enablePan={false} enableZoom={true} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </div>
          
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <SpecCallout 
              delay={0.2}
              style={{ top: '15%', left: '10%' }}
              title="CPU MAIN"
              details={<>AMD Ryzen 7 5700U<br/>8 Núcleos Físicos<br/>16 Hilos (Threads)</>}
              icon="<path d='M17,17H7V7H17M21,11V9H19V7C19,5.89 18.1,5 17,5H15V3H13V5H11V3H9V5H7C5.89,5 5,5.89 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11M13,13H11V11H13V13Z' />"
            />
            <SpecCallout 
              delay={0.4}
              style={{ top: '15%', right: '10%', flexDirection: 'row-reverse' }}
              title="MEMORIA RAM"
              details={<>12 GB DDR4</>}
              icon="<path d='M2,7H4.5V17H3V8.5H2M22,7V16H14V17H7V16H6V7M10,9H8V12H10M13,9H11V12H13M20,9H15V14H20V9Z' />"
              motionProps={{ style: { flexDirection: 'row-reverse' } }} 
            />
            <SpecCallout 
              delay={0.6}
              style={{ bottom: '25%', left: '10%' }}
              title="GRÁFICOS INTEGRADOS"
              details={<>Radeon Graphics</>}
              icon="<path d='M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5M11,10V14H13V10H11M6,10V14H8V10H6M16,10V14H18V10H16Z' />"
            />
            <SpecCallout 
              delay={0.8}
              style={{ bottom: '25%', right: '10%', flexDirection: 'row-reverse' }}
              title="MODELO"
              details={<>Lenovo IdeaPad Slim 3 14ALC6</>}
              icon="<path d='M4,6H20V16H4M4,4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4Z' />"
            />
          </div>
        </div>
      </div>
      
    </Slide>
  );
};
export default LaptopSpecsSlide;
