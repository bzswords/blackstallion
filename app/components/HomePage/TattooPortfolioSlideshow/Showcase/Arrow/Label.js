import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ArrowImage from './ArrowImage';

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  svg {
    width: 1.5em;
  }
  span, svg {
    position: relative;
    left: -50%;
  }
  span {
    display: none;
    font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-transform: uppercase;

    @media (min-width: 769px) {
      display: inline-block;
    }
  }

`;

function Label({ text, altText, image, stepValue }) {
  if (stepValue == 1) {
    return(
      <Wrapper>
        <span>{text}</span>
        <ArrowImage direction="right" />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <ArrowImage direction="left" />
      <span>{text}</span>
    </Wrapper>
  );
}

Label.propTypes = {
  text: PropTypes.string,
  altText: PropTypes.string,
  image: PropTypes.string,
  stepValue: PropTypes.number,
}

export default Label;
