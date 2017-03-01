import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Logo from 'assets/images/Logo-01.svg';

import A from './A';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.875em;
  padding: 0.5em 0 0.2em 0;
  background-color: #000;
  z-index: 101;
  border-bottom: ${(props) => props.menuOpen ? '1px solid white' : 'none'};

  @media (min-width: 769px) {
    display: none;
    visibility: hidden;
  }
`;

function MobileHeader({ toggleMenu, menuOpen }) {
  const text = menuOpen ? 'Close' : 'Menu';
  return (
    <Wrapper menuOpen={menuOpen}>
      <A href="#" onClick={toggleMenu}>
        <img src={Logo} alt="Black Stallion Tattoo" height="50" />
        <br />
        {text}
      </A>
    </Wrapper>
  );
}

MobileHeader.PropTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default MobileHeader;
