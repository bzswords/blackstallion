import React from 'react';
// import styled from 'styled-components';

import Wrapper from './Wrapper';
import A from './A';
import Logo from 'assets/images/Logo-01.svg';

function Navigation() {
  return (
    <Wrapper>
      <A href='#'>
        <img src={Logo} alt="Black Stallion Tattoo" height="50" />
        <br />
        Menu
      </A>
    </Wrapper>
  );
}

export default Navigation;
