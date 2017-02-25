import React, { PropTypes } from 'react';

import NormalH1 from './../../H1';
import Wrapper from './Wrapper';

function H1({ text }) {
  return (
    <Wrapper>
      <NormalH1>{text}</NormalH1>
    </Wrapper>
  );
}

H1.propTypes = {
  text: PropTypes.string.isRequired,
};

export default H1;
