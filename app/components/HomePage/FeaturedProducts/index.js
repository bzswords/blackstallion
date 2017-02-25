import React from 'react';

import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';
import StrikethroughHeading from 'components/shared/StrikethroughHeading';

import FeaturedProductGrid from './FeaturedProductGrid';

function FeaturedProducts() {
  return (
    <PageSection background="#1b1b1b">
      <PageSectionHeader>
        <StrikethroughHeading text="Featured Products"></StrikethroughHeading>
      </PageSectionHeader>
      <FeaturedProductGrid />
    </PageSection>
  );
}

export default FeaturedProducts;
