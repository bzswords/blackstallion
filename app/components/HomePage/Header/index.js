import React from 'react';

import BackgroundImageSection from 'components/shared/BackgroundImageSection';

import Img from './Img';
import Logo from './Logo';
import Foreground from './images/Desktop-Homepage-Foreground.png';
import Wrapper from './Wrapper';
import OpaqueLayer from './OpaqueLayer';

function Header() {
  return (
    <Wrapper>
      <OpaqueLayer>
        <Img src={Foreground} alt="Johannes Nota - World Class Boston Tattoo" />
        <Logo />
      </OpaqueLayer>
    </Wrapper>
  );
}

export default Header;
