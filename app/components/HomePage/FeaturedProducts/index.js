import React from 'react';
import Grid from 'grid-styled';

import FeaturedProductGrid from './FeaturedProductGrid';

import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';
import StrikethroughHeading from 'components/shared/StrikethroughHeading';

import FeaturedPlaceholder from 'components/HomePage/images/featured-placeholder.png'

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