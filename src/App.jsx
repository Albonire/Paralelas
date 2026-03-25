import React from 'react';
import NewspaperTexture from './components/NewspaperTexture';
import SlideContainer from './components/SlideContainer';
import CoverSlide from './slides/CoverSlide';
import LaptopSpecsSlide from './slides/LaptopSpecsSlide';
import ParallelismSlide from './slides/ParallelismSlide';
import FlynnTaxonomySlide from './slides/FlynnTaxonomySlide';
import DistributedSlide from './slides/DistributedSlide';
import ComparisonSlide from './slides/ComparisonSlide';
import AmdahlSlide from './slides/AmdahlSlide';
import ScalabilitySlide from './slides/ScalabilitySlide';
import WorkshopIntroSlide from './slides/WorkshopIntroSlide';
import WorkshopCodeSlide from './slides/WorkshopCodeSlide';
import WorkshopResultsSlide from './slides/WorkshopResultsSlide';
import FutureSlide from './slides/FutureSlide';
import ClosingSlide from './slides/ClosingSlide';

function App() {
  return (
    <>
      <NewspaperTexture />
      <SlideContainer>
        <CoverSlide />
        <LaptopSpecsSlide />
        <ParallelismSlide />
        <FlynnTaxonomySlide />
        <DistributedSlide />
        <ComparisonSlide />
        <AmdahlSlide />
        <ScalabilitySlide />
        <WorkshopIntroSlide />
        <WorkshopCodeSlide />
        <WorkshopResultsSlide />
        <FutureSlide />
        <ClosingSlide />
      </SlideContainer>
    </>
  );
}

export default App;
