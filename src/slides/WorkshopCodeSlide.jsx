import React from 'react';
import Slide from '../components/Slide';
import Reveal from '../components/Reveal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const seqCode = `#include <stdio.h>
#include <math.h>
#include <time.h>

#define N 5000000

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i <=sqrt(n); i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    clock_t startTime = clock();
    int counterPrimes = 0;

    for (int i = 2; i <= N; i++) {
        if (isPrime(i)) 
            counterPrimes++;
    }

    double t = (double)(clock()-startTime)/CLOCKS_PER_SEC;
    printf("Primes: %d\\nTime: %.3fsg\\n", counterPrimes, t);
}`;

const parCode = `#include <stdio.h>
#include <math.h>
#include <time.h>
#include <omp.h>

#define N 5000000

int isPrime(int n) { /* Misma comprobación matemática */ }

int main() {
    double startTime = omp_get_wtime();
    int counterPrimes = 0;

    /* Magia OpenMP: Paralelizando el búcle for */
    #pragma omp parallel for reduction(+:counterPrimes)
    for (int i = 2; i <= N; i++) {
        if (isPrime(i))
            counterPrimes++;
    }

    double t = omp_get_wtime() - startTime;
    printf("Primes: %d\\nTime: %.3fsg\\n", counterPrimes, t);
}`;

const WorkshopCodeSlide = ({ 'data-index': dataIndex }) => {
  return (
    <Slide className="slide-workshop-code" data-index={dataIndex} style={{ zIndex: 1 }}>
      <header className="masthead-top" style={{ marginBottom: '1rem' }}>
        <span>ANÁLISIS DE CÓDIGO FUENTE (C)</span>
        <span>LABORATORIO SEMANA 4</span>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', height: '100%', minHeight: 0 }}>
        
        <Reveal className="code-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="code-label">FLUJO SECUENCIAL (1 NÚCLEO FÍSICO)</div>
          <div style={{ flex: 1, overflow: 'auto', background: '#1e1e1e' }}>
            <SyntaxHighlighter language="c" style={vscDarkPlus} customStyle={{ margin: 0, padding: '0.6rem', background: 'transparent', fontSize: '0.65rem' }}>
              {seqCode}
            </SyntaxHighlighter>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="code-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="code-label" style={{ background: 'var(--accent)' }}>FLUJO PARALELIZADO MULTIHILO CON OPENMP</div>
          <div style={{ flex: 1, overflow: 'auto', background: '#1e1e1e' }}>
            <SyntaxHighlighter language="c" style={vscDarkPlus} customStyle={{ margin: 0, padding: '0.6rem', background: 'transparent', fontSize: '0.65rem' }} wrapLines={true} lineProps={lineNumber => {
              let style = { display: 'block' };
              if (lineNumber === 4 || lineNumber === 15) {
                style.backgroundColor = 'rgba(196, 30, 58, 0.3)';
                style.borderLeft = '3px solid var(--accent)';
              }
              return { style };
            }}>
              {parCode}
            </SyntaxHighlighter>
          </div>
          <div style={{ padding: '0.5rem', background: '#2c2c2c', color: 'white', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', borderTop: '2px solid var(--ink)', lineHeight: 1.3 }}>
            <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>El "Pragma" clave:</span> La directiva a GCC exige forzar una repartición asíncrona del iterador `for`. Se adjunta inteligentemente un `reduction` para gestionar el conteo seguro, evitando así re-escribir simultáneamente sobre `counterPrimes` (Evitando Race Conditions letales de compartimiento de memoria simultánea).
          </div>
        </Reveal>
      </div>
    </Slide>
  );
};

export default WorkshopCodeSlide;
