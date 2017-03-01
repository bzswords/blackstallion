import React from 'react';
import styled from 'styled-components';

import BackgroundImageSection from 'components/shared/BackgroundImageSection';
import SocialMediaLinks from 'components/shared/SocialMediaLinks';

import H1 from './H1';
import MobileBackgroundImage from './images/mobile-contact-header-img.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  padding: 0 1em 1em 1em;
  height: 30em;

  h1, h3 {
    text-align: left;
  }
  h3, p {
    font-family: 'Work Sans';
  }
`;

function Header() {
  return (
    <BackgroundImageSection 
      background={MobileBackgroundImage} 
      backgroundSize='100%'
      height='30em'>
      <Wrapper>
        <h1>Contact</h1>
        <h3>Email:</h3>
        <p>info@blackstalliiontattoo.com</p>
        <h3>Schedule</h3>
        <p>xxx at Good Faith Tattoo</p>
      </Wrapper>
    </BackgroundImageSection>
  );
}

export default Header;
