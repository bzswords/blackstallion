import React from 'react';

import BackgroundImageSection from 'components/shared/BackgroundImageSection';

import H1 from './H1';
import BackgroundImage from './images/contact-header-img.jpg';

function Header() {
  return (
    <BackgroundImageSection background={BackgroundImage}>
      <H1 text="Contact" />
    </BackgroundImageSection>
  );
}

export default Header;
