sed -i 's/grid-template-columns: repeat(3, 1fr);/grid-template-columns: repeat(2, 1fr);/g' src/index.css
sed -i 's/gap: 2rem;/gap: 6rem;/g' src/index.css
sed -i 's/.col-main { grid-column: span 2; }/.col-main { grid-column: span 1; }/g' src/index.css
sed -i 's/.col-side { grid-column: span 1; padding-left: 2rem; }/.col-side { grid-column: span 1; padding-left: 0; }/g' src/index.css
sed -i 's/.columns::before { left: 33.33%; }/.columns::before { display: none; }/g' src/index.css
sed -i 's/.columns::after  { left: 66.66%; }/.columns::after { display: none; }/g' src/index.css
