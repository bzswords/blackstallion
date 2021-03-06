import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ArrowImage from './ArrowImage';

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transition: .2s;
  -webkit-transition: .2s;

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

function Label({ text, stepValue }) {
  if (stepValue === 1) {
    return (
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
  stepValue: PropTypes.number,
};

export default Label;
