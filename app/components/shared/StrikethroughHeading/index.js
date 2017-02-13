/**
*
* StrikethroughHeading
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import Wrapper from './Wrapper';
import H2 from 'components/shared/H2';
import Strikethrough from './Strikethrough';


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
