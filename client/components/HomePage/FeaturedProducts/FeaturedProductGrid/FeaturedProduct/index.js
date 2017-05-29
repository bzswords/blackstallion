import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';
import Img from './Img';

function FeaturedProduct({ img, alt, name, price, href }) {
  return (
    <Wrapper href={href} >
      <Img src={img} alt={alt} />
      <p>{name}</p>
      <p>{price}</p>
    </Wrapper>
  );
}

FeaturedProduct.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default FeaturedProduct;
