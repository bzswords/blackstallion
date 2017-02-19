import React from 'react';

import Img from './Img';
import Logo from './Logo';
import Wrapper from './Wrapper';

import BackgroundImageSection from 'components/shared/BackgroundImageSection';

import Background from 'assets/images/background.jpg';
import Foreground from './images/Desktop-Homepage-Foreground.png'

function Header() {
  return (
    <Wrapper>
      <BackgroundImageSection background={Background}>
        <Img src={Foreground} alt="Johannes Nota - World Class Boston Tattoo"/>
        <Logo />
      </BackgroundImageSection>
    </Wrapper>  
  );
}

export default Header;