import React from 'react';

import H1 from 'components/shared/H1';
import BackgroundImageSection from 'components/shared/BackgroundImageSection';

import BackgroundImage from './images/background-header.jpg'

function Header() {
  return (
    <BackgroundImageSection background={BackgroundImage}>
      <H1>Book An Appointment</H1>
    </BackgroundImageSection>  
  );
}

export default Header;