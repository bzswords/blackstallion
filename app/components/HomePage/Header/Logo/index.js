import React from 'react';

import Wrapper from './Wrapper';
import Img from './Img';

import LogoImg from 'assets/images/Logo-02.svg';

function Logo() {
  return (
    <Wrapper>
      <Img src={LogoImg} />
    </Wrapper>  
  );
}

export default Logo;