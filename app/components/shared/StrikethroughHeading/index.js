/**
*
* StrikethroughHeading
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import H2 from 'components/shared/H2';
import Strikethrough from './Strikethrough';

const Wrapper = styled.div`
  position: relative;
  width: 85%;
  margin: auto;
  max-width: 20em;

  @media (min-width: 500px) {
    max-width: 30em;
  }
`;

function StrikethroughHeading({ text }) {
  return (
    <Wrapper>
      <Strikethrough />
      <H2>{text}</H2>
    </Wrapper>
  );
}

StrikethroughHeading.propTypes = {
  text: PropTypes.string,
};

export default StrikethroughHeading;
