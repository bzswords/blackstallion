import React, { PropTypes } from 'react';

import Logo from './../../../assets/images/Logo-01.svg';

import A from './A';
import Wrapper from './Wrapper';

const propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

function MobileHeader(props) {
  const text = props.menuOpen ? 'Close' : 'Menu';
  return (
    <Wrapper menuOpen={props.menuOpen}>
      <A onClick={props.toggleMenu}>
        <img src={Logo} alt="Black Stallion Tattoo" height="50" />
        <br />
        {text}
      </A>
    </Wrapper>
  );
}

MobileHeader.propTypes = propTypes;

export default MobileHeader;
