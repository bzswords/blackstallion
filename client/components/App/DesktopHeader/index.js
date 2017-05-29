import React from 'react';
import styled from 'styled-components';

import HeaderLink from './HeaderLink';
import HeaderLogo from './HeaderLogo';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 85em;
  margin: auto;
`;

const Header = styled.header`
  display: none;
  visibility: hidden;
  position: absolute;
  top: 0.5em;
  width: 100%;
  z-index: 100;

  @media (min-width: 769px) {
    display: block;
    visibility: visible;
  }
`;

function DesktopHeader() {
  return (
    <Header>
      <Wrapper>
        <HeaderLink link="/booking" text="Book An Appointment" />
        <HeaderLink link="/travel" text="Travel" />
        <HeaderLink link="http://www.blackstalliontattoo.bigcartel.com/products" text="Webstore" target="_blank" />
        <HeaderLogo link="/" />
        <HeaderLink link="https://www.tattooflashcollective.com/" text="Tattoo Flash Collective" target="_blank" />
        <HeaderLink link="/faq" text="FAQ" />
        <HeaderLink link="/contact" text="Contact" />
      </Wrapper>
    </Header>
  );
}

export default DesktopHeader;
