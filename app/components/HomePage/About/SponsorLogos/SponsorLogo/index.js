import React, { PropTypes } from 'react';

import A from 'components/shared/A';

import Wrapper from './Wrapper';

function SponsorLogo({ link, img, alt, height }) {
  return (
    <Wrapper>
      <A href={link} target="_blank">
        <img src={img} alt={alt} target="_self" height={height} />
      </A>
    </Wrapper>
  );
}

SponsorLogo.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default SponsorLogo;
