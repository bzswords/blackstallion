import React, { PropTypes } from 'react';

import A from 'components/shared/A';

import Wrapper from './Wrapper';

function SponsorLogo({ img, alt, height }) {
  return (
    <Wrapper>
      <A href="/">
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
