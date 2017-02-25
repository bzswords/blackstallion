import React from 'react';

import BackgroundImageSection from 'components/shared/BackgroundImageSection';
import Background from 'assets/images/background.jpg';

import Img from './Img';
import Logo from './Logo';
import Wrapper from './Wrapper';
import Foreground from './images/Desktop-Homepage-Foreground.png';

function Header() {
  return (
    <Wrapper>
      <BackgroundImageSection background={Background}>
        <Img src={Foreground} alt="Johannes Nota - World Class Boston Tattoo" />
        <Logo />
      </BackgroundImageSection>
    </Wrapper>
  );
}

export default Header;
