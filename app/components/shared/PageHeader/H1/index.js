import React, { PropTypes } from 'react';
import styled from 'styled-components';

import NormalH1 from './../../H1';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20.625em;
  background: rgba(0,0,0,0.2);

  h1 {
    max-width: 10em;
    text-shadow: 3px 3px 10px #222;
    white-space: normal;
    letter-spacing: 0.01em;
  }
`;

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
