#!/bin/bash

# Exercise 1
sed -i 's/>6</>8</' src/slides/Exercise1Slide.jsx
sed -i 's/>12</>16</' src/slides/Exercise1Slide.jsx
sed -i 's/6 núcleos reales/8 núcleos reales/' src/slides/Exercise1Slide.jsx
sed -i 's/12 núcleos lógicos/16 núcleos lógicos/' src/slides/Exercise1Slide.jsx
sed -i 's/p = 12/p = 16/' src/slides/Exercise1Slide.jsx
sed -i 's/1 Socket, 6 Cores, 12 Threads/1 Socket, 8 Cores, 16 Threads/' src/slides/Exercise1Slide.jsx

# Exercise 2
sed -i 's/>12</>16</' src/slides/Exercise2Slide.jsx
sed -i 's/12 núcleos de mi máquina/16 núcleos de mi máquina/' src/slides/Exercise2Slide.jsx
sed -i 's/Captura Ejecución 12 Hilos/Captura Ejecución 16 Hilos/' src/slides/Exercise2Slide.jsx

# Exercise 3
sed -i 's/p = 12/p = 16/' src/slides/Exercise3Slide.jsx
sed -i 's/f<\/i> \/ 12/f<\/i> \/ 16/' src/slides/Exercise3Slide.jsx
sed -i 's/0.5016<i>f/0.37625<i>f/' src/slides/Exercise3Slide.jsx
sed -i 's/5.5184<i>f/5.64375<i>f/g' src/slides/Exercise3Slide.jsx
sed -i 's/>5.5184</>5.64375</' src/slides/Exercise3Slide.jsx
sed -i 's/0.9096/0.8895/' src/slides/Exercise3Slide.jsx
sed -i 's/90.96%/88.95%/' src/slides/Exercise3Slide.jsx
sed -i 's/9.04%/11.05%/' src/slides/Exercise3Slide.jsx

# Exercise 4
sed -i 's/0.9096/0.8895/' src/slides/Exercise4Slide.jsx
sed -i 's/0.0904/0.1105/' src/slides/Exercise4Slide.jsx
sed -i 's/11.06/9.05/g' src/slides/Exercise4Slide.jsx
sed -i 's/9.04%/11.05%/' src/slides/Exercise4Slide.jsx

# Exercise 5
sed -i 's/12 núcleos/16 núcleos/' src/slides/Exercise5Slide.jsx

# Conclusions
sed -i 's/8 a 12 núcleos/8 a 16 núcleos/' src/slides/ConclusionsSlide.jsx
sed -i 's/9.04%/11.05%/' src/slides/ConclusionsSlide.jsx
sed -i 's/11.06x/9.05x/' src/slides/ConclusionsSlide.jsx
sed -i 's/12 núcleos/16 núcleos/' src/slides/ConclusionsSlide.jsx

