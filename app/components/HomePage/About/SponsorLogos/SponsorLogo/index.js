import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';
import A from 'components/shared/A';

function SponsorLogo({ img, alt, height }) {
  return (
    <Wrapper>
      <A href='/'>
        <img src={img} alt={alt} target="_self" height={height} />
      </A>
    </Wrapper>
  );
}

SponsorLogo.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default SponsorLogo;