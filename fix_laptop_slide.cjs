const fs = require('fs');

let content = fs.readFileSync('src/slides/LaptopSpecsSlide.jsx', 'utf8');

// Replace standard Canvas wrapper with motion.div for entry animation.
content = content.replace(
  '<div style={{ position: \'absolute\', inset: 0 }}>',
  '<motion.div \n            initial={{ opacity: 0, scale: 0.5, y: 100 }}\n            whileInView={{ opacity: 1, scale: 1, y: 0 }}\n            transition={{ duration: 1.5, type: \"spring\", bounce: 0.4 }}\n            style={{ position: \'absolute\', inset: 0 }}\n          >'
);

content = content.replace(
  '</Canvas>\n          </div>',
  '</Canvas>\n          </motion.div>'
);

fs.writeFileSync('src/slides/LaptopSpecsSlide.jsx', content);
console.log('Fixed laptop slide');
