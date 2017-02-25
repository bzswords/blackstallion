import React, { PropTypes } from 'react';

import Logo from 'assets/images/Logo-01.svg';

import Wrapper from './Wrapper';
import A from './A';

function Header({ toggleMenu }) {
  return (
    <Wrapper>
      <A href="#" onClick={toggleMenu}>
        <img src={Logo} alt="Black Stallion Tattoo" height="50" />
        <br />
        Menu
      </A>
    </Wrapper>
  );
}

Header.PropTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Header;
