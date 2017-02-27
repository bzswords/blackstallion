import React, { PropTypes } from 'react';

import Logo from 'assets/images/Logo-01.svg';

import Wrapper from './Wrapper';
import A from './A';

function Header({ toggleMenu, menuOpen }) {
  const text = menuOpen ? 'Close' : 'Menu';
  return (
    <Wrapper>
      <A href="#" onClick={toggleMenu}>
        <img src={Logo} alt="Black Stallion Tattoo" height="50" />
        <br />
        {text}
      </A>
    </Wrapper>
  );
}

Header.PropTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default Header;
