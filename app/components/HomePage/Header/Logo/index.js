import React from 'react';
import styled from 'styled-components';

import LogoImg from 'assets/images/Logo-02.svg';

import Img from './Img';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2em;

  @media (min-width: 1050px) {
    left: 65%;
    bottom: 5em;
  }

`;

function Logo() {
  return (
    <Wrapper>
      <Img src={LogoImg} />
    </Wrapper>
  );
}

export default Logo;
