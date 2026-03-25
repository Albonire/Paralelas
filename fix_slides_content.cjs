const fs = require('fs');

const appContent = `import React from 'react';
import NewspaperTexture from './components/NewspaperTexture';
import SlideContainer from './components/SlideContainer';
import CoverSlide from './slides/CoverSlide';
import LaptopSpecsSlide from './slides/LaptopSpecsSlide';
import Exercise1Slide from './slides/Exercise1Slide';
import Exercise2Slide from './slides/Exercise2Slide';
import Exercise3Slide from './slides/Exercise3Slide';
import Exercise4Slide from './slides/Exercise4Slide';
import Exercise5Slide from './slides/Exercise5Slide';
import AnalysisSlide from './slides/AnalysisSlide';
import ConclusionsSlide from './slides/ConclusionsSlide';

function App() {
  return (
    <>
      <NewspaperTexture />
      <SlideContainer>
        <CoverSlide />
        <LaptopSpecsSlide />
        <Exercise1Slide />
        <Exercise2Slide />
        <Exercise3Slide />
        <Exercise4Slide />
        <Exercise5Slide />
        <AnalysisSlide />
        <ConclusionsSlide />
      </SlideContainer>
    </>
  );
}

export default App;
`;
fs.writeFileSync('src/App.jsx', appContent);

console.log("App.jsx updated");
