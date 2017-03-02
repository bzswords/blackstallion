import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Logo from 'assets/images/Logo-01.svg';

import HeaderLink from './HeaderLink';
import HeaderLogo from './HeaderLogo';

const Wrapper = styled.header`
  display: none;
  visibility: hidden;
  justify-content: space-between;
  position: absolute;
  top: 0.5em;
  width: 100%;
  z-index: 100;

  @media (min-width: 769px) {
    display: flex;
    visibility: visible;
  }
`;

function DesktopHeader() {
  return (
    <Wrapper>
      <HeaderLink link="/booking" text="Book An Appointment" />
      <HeaderLink link="/travel" text="Travel" />
      <HeaderLink link="/" text="Webstore" />
      <HeaderLogo link="/" />
      <HeaderLink link="/" text="Tattoo Flash Collective" />
      <HeaderLink link="/faw" text="FAQ" />
      <HeaderLink link="/contact" text="Contact" />
    </Wrapper>
  );
}

export default DesktopHeader;
