import React from 'react';

import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/styled/PageSectionHeader';
import StrikethroughHeading from 'components/shared/StrikethroughHeading';

function FeaturedProducts() {
  return (
    <PageSection background="black">
      <PageSectionHeader>
        <StrikethroughHeading text="Featured Products"></StrikethroughHeading>
      </PageSectionHeader>
    </PageSection>  
  );
}

export default FeaturedProducts;