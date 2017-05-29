import React from 'react';

import PageSection from './../../shared/PageSection';
import PageSectionHeader from './../../shared/PageSectionHeader';
import StrikethroughHeading from './../../shared/StrikethroughHeading';

import FeaturedProductGrid from './FeaturedProductGrid';

function FeaturedProducts() {
  return (
    <PageSection background="#000">
      <PageSectionHeader>
        <StrikethroughHeading text="Featured Products"></StrikethroughHeading>
      </PageSectionHeader>
      <FeaturedProductGrid />
    </PageSection>
  );
}

export default FeaturedProducts;
