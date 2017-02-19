import React from 'react';
import Grid from 'grid-styled';

import Wrapper from './Wrapper';
import FeaturedProduct from './FeaturedProduct';

import FeaturedPlaceholder from 'components/HomePage/images/featured-placeholder.png'

function FeaturedProductGrid() {
  return (
    <Wrapper>
      <Grid sm={1/3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
      <Grid sm={1/3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
      <Grid sm={1/3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
    </Wrapper>  
  );
}

export default FeaturedProductGrid;