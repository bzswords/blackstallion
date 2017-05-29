import React, { PropTypes } from 'react';

import PageSection from './../shared/PageSection';
import PageSectionHeader from './../shared/PageSectionHeader';
import StrikethroughHeading from './../shared/StrikethroughHeading';

import TattooPortfolioSlideshow from './TattooPortfolioSlideshow';

function TattooPortfolio({ images }) {
  return (
    <PageSection background="black">
      <PageSectionHeader>
        <StrikethroughHeading text="Tattoo Portfolio"></StrikethroughHeading>
      </PageSectionHeader>
      <TattooPortfolioSlideshow images={images} />
    </PageSection>
  );
}

TattooPortfolio.propTypes = {
  images: PropTypes.array.isRequired,
};

export default TattooPortfolio;
