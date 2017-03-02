import React from 'react';

import BackgroundImageSection from 'components/shared/BackgroundImageSection';
import Background from './images/mobile-background.jpg';

import Img from './Img';
import Logo from './Logo';
import Foreground from './images/Desktop-Homepage-Foreground.png';

function Header() {
  return (
    <BackgroundImageSection background={Background} backgroundSize="110%">
      <Img src={Foreground} alt="Johannes Nota - World Class Boston Tattoo" />
      <Logo />
    </BackgroundImageSection>
  );
}

export default Header;
