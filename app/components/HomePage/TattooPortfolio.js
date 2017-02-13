import React from 'react';

import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';
import StrikethroughHeading from 'components/shared/StrikethroughHeading';

function TattooPortfolio() {
  return (
    <PageSection background="black">
      <PageSectionHeader>
        <StrikethroughHeading text="Tattoo Portfolio"></StrikethroughHeading>
      </PageSectionHeader>
    </PageSection>  
  );
}

export default TattooPortfolio;