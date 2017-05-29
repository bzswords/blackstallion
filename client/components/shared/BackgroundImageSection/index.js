import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

const propTypes = {
  children: PropTypes.node,
  mobileBackground: PropTypes.string.isRequired,
  desktopBackground: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

function BackgroundImageSection(props) {
  return (
    <Wrapper
      desktopBackground={props.desktopBackground}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={props.mobileBackground} />
        <img src={props.desktopBackground} alt={props.altText} />
      </picture>
      {props.children}
    </Wrapper>
  );
}

BackgroundImageSection.propTypes = propTypes;

export default BackgroundImageSection;
