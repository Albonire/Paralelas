const fs = require('fs');

// Fix ComparisonSlide image overlapping text
let comparison = fs.readFileSync('src/slides/ComparisonSlide.jsx', 'utf8');
comparison = comparison.replace(
  '<div className="photo-frame" style={{ position: \'absolute\', bottom: \'-15vh\', left: \'10vw\', width: \'350px\', zIndex: 20 }}>',
  '<div className="photo-frame" style={{ position: \'absolute\', top: \'-8vh\', right: \'5vw\', width: \'300px\', zIndex: 2, opacity: 0.9 }}>'
);
fs.writeFileSync('src/slides/ComparisonSlide.jsx', comparison);

// Fix Amdahl slide image cut off in side column
let amdahl = fs.readFileSync('src/slides/AmdahlSlide.jsx', 'utf8');
amdahl = amdahl.replace(
  '<div className="photo-frame" style={{ marginTop: \'2rem\', width: \'100%\' }}>\n            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2574&auto=format&fit=crop" alt="Patrón matemático - Ley de Amdahl" style={{ width: \'100%\', height: \'20vh\', objectFit: \'cover\' }} />\n          </div>',
  '<div className="photo-frame" style={{ marginTop: \'2rem\', width: \'100%\' }}>\n            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2574&auto=format&fit=crop" alt="Patrón matemático - Ley de Amdahl" style={{ width: \'100%\', height: \'auto\', display: \'block\' }} />\n          </div>'
);
fs.writeFileSync('src/slides/AmdahlSlide.jsx', amdahl);

// Fix Scalability slide image overlapping
let scalability = fs.readFileSync('src/slides/ScalabilitySlide.jsx', 'utf8');
scalability = scalability.replace(
  '<div style={{ position: \'absolute\', bottom: \'-15vh\', left: \'25%\', width: \'50%\', zIndex: 10 }}>',
  '<div style={{ position: \'absolute\', bottom: \'2vh\', left: \'25%\', width: \'50%\', zIndex: 1, opacity: 0.9 }}>'
);
fs.writeFileSync('src/slides/ScalabilitySlide.jsx', scalability);

// Fix LaptopSpecsSlide animation issues
let laptop = fs.readFileSync('src/slides/LaptopSpecsSlide.jsx', 'utf8');
laptop = laptop.replace(
  'initial={{ opacity: 0, scale: 0.5, y: 100 }}\n            whileInView={{ opacity: 1, scale: 1, y: 0 }}\n            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}\n            style={{ position: \'absolute\', inset: 0 }}',
  'initial={{ opacity: 0 }}\n            whileInView={{ opacity: 1 }}\n            transition={{ duration: 2, ease: "easeInOut" }}\n            style={{ position: \'absolute\', inset: 0 }}'
);
fs.writeFileSync('src/slides/LaptopSpecsSlide.jsx', laptop);

console.log('Fixed slides');
