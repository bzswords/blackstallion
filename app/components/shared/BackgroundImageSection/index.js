import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

import Wrapper from './Wrapper';

const props = {
  mobileBackground: PropTypes.string.isRequired,
  desktopBackground: PropTypes.string.isRequired,
  backgroundSize: PropTypes.string,
  altText: PropTypes.string,
}

function BackgroundImageSection(props) {
  return (
    <Wrapper {...props}>
      <picture>
        <source media="(max-width: 767px)" srcSet={props.mobileBackground} />
        <img src={props.desktopBackground} alt={props.altText} />
      </picture>
      {props.children}
    </Wrapper>
  );
}

BackgroundImageSection.propTypes = props;

export default BackgroundImageSection;
