import React from 'react';
import styled from 'styled-components';
import Grid from 'grid-styled';

import FeaturedProduct from './FeaturedProduct';

const Wrapper = styled.div`
  max-width: 70em;
  margin: auto;
`;

function FeaturedProductGrid() {
  return (
    <Wrapper>
      <Grid sm={1 / 3}>
        <FeaturedProduct
          img="https://s3.amazonaws.com/blackstallion-product-images/flash1.jpg"
          alt="Purchase Tatoo Flash #100"
          name="Tatoo Flash #100"
          price="$9.99"
          href="http://www.blackstalliontattoo.bigcartel.com/product/tattoo-flash-100"
        />
      </Grid>
      <Grid sm={1 / 3}>
        <FeaturedProduct
          img="https://s3.amazonaws.com/blackstallion-product-images/flash2.jpg"
          alt="Purchase Tatoo Flash #98"
          name="Tatoo Flash #98"
          price="$9.99"
          href="http://www.blackstalliontattoo.bigcartel.com/product/tattoo-flash-98"
        />
      </Grid>
      <Grid sm={1 / 3}>
        <FeaturedProduct
          img="https://s3.amazonaws.com/blackstallion-product-images/flash3.jpg"
          alt="Purchase Tatoo Flash #99"
          name="Tatoo Flash #99"
          price="$9.99"
          href="http://www.blackstalliontattoo.bigcartel.com/product/tattoo-flash-99"
        />
      </Grid>
    </Wrapper>
  );
}

export default FeaturedProductGrid;
