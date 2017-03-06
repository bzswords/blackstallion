import React from 'react';
import styled from 'styled-components';
import Grid from 'grid-styled';

import FeaturedPlaceholder from 'components/HomePage/images/featured-placeholder.png';

import FeaturedProduct from './FeaturedProduct';

const Wrapper = styled.div`
  max-width: 70em;
  margin: auto;
`;

function FeaturedProductGrid() {
  return (
    <Wrapper>
      <Grid sm={1 / 3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
      <Grid sm={1 / 3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
      <Grid sm={1 / 3}>
        <FeaturedProduct img={FeaturedPlaceholder} alt="placeholder" name="Placeholder" price="$19.99" />
      </Grid>
    </Wrapper>
  );
}

export default FeaturedProductGrid;
