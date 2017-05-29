import React from 'react';

import BackgroundImageSection from './../../shared/BackgroundImageSection';

import MobileBackgroundImage from './../../../assets/images/Contact/mobile-contact-header-img.jpg';
import DesktopBackgroundImage from './../../../assets/images/Contact/contact-header-img.jpg';
import Wrapper from './Wrapper';

function Header() {
  return (
    <BackgroundImageSection
      mobileBackground={MobileBackgroundImage}
      desktopBackground={DesktopBackgroundImage}
    >
      <Wrapper>
        <h1>Contact</h1>
        <h3>Email:</h3>
        <p>info@blackstalliiontattoo.com</p>
        <h3>Schedule:</h3>
        <p>xxx at Good Faith Tattoo</p>
      </Wrapper>
    </BackgroundImageSection>
  );
}

export default Header;
