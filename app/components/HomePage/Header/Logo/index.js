import React from 'react';

import LogoImg from 'assets/images/Logo-02.svg';

import Wrapper from './Wrapper';
import Img from './Img';

function Logo() {
  return (
    <Wrapper>
      <Img src={LogoImg} />
    </Wrapper>
  );
}

export default Logo;
