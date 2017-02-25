import React from 'react';
import Grid from 'grid-styled';

import FeaturedPlaceholder from 'components/HomePage/images/featured-placeholder.png';

import FeaturedProduct from './FeaturedProduct';

function FeaturedProductGrid() {
  return (
    <div>
      <Grid sm={1 / 3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
      <Grid sm={1 / 3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
      <Grid sm={1 / 3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
    </div>
  );
}

export default FeaturedProductGrid;
