const fs = require('fs');

const replaces = [
  {
    file: 'src/slides/CoverSlide.jsx',
    replacements: [
      [/EL HERALDO COMPUTACIONAL/g, 'SEMINARIO DE ARQUITECTURA'],
      [/LA REVOLUCIÓN DE LA ESCALA MASIVA/g, 'COMPUTACIÓN MASIVA: PARALELISMO Y DISTRIBUCIÓN'],
      [/EN ESTA EDICIÓN/g, 'CONTENIDO GENERAL']
    ]
  },
  {
    file: 'src/slides/AmdahlSlide.jsx',
    replacements: [
      [/La Ley de Amdahl: La Dura Verdad del Multihilo/g, 'Ley de Amdahl: Limitaciones del Paralelismo'],
      [/EL MITO DEL HARDWARE/g, 'LÍMITE TEÓRICO']
    ]
  },
  {
    file: 'src/slides/ClosingSlide.jsx',
    replacements: [
      [/FIN DE LA EDICIÓN/g, 'CONCLUSIONES GENERALES']
    ]
  },
  {
    file: 'src/slides/WorkshopIntroSlide.jsx',
    replacements: [
      [/Cacería de Números Primos en Paralelo/g, 'Cálculo Paralelo de Números Primos'],
      [/El Desafío Empírico/g, 'Objetivos del Taller'],
      [/Herramientas Operativas Interactivas/g, 'Entorno de Ejecución']
    ]
  },
  {
    file: 'src/slides/WorkshopResultsSlide.jsx',
    replacements: [
      [/Métricas Finales Recolectadas del Hardware Local/g, 'Resultados Experimentales en Entorno Local'],
      [/Aceleración Efectiva Resultante del Sistema \(Net Speedup\)/g, 'Análisis de Speedup (Aceleración)'],
      [/Sustrato de Ejecución Directo \(Comandos Locales Corridos\)/g, 'Comandos de Ejecución'],
      [/Compilación a Metales Nativos Binaria GCC/g, 'Proceso de Compilación']
    ]
  },
  {
    file: 'src/slides/DistributedSlide.jsx',
    replacements: [
      [/La Red como Computadora/g, 'Sistemas Distribuidos']
    ]
  },
  {
    file: 'src/slides/ParallelismSlide.jsx',
    replacements: [
      [/Divide y Vencerás: El Arte del Procesamiento Simultáneo/g, 'Principios del Procesamiento Simultáneo']
    ]
  },
  {
    file: 'src/slides/FutureSlide.jsx',
    replacements: [
      [/EL MAÑANA DE LA COMPUTACIÓN/g, 'FUTURO DE LA COMPUTACIÓN']
    ]
  }
];

replaces.forEach(({file, replacements}) => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([regex, replace]) => {
    content = content.replace(regex, replace);
  });
  fs.writeFileSync(file, content);
});

console.log('Done!');
