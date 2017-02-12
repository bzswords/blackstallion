import React from 'react';
// import styled from 'styled-components';

import Wrapper from './Wrapper';
import A from './A';
import Logo from 'assets/images/Logo-02.svg';
import SocialMediaLinks from 'components/shared/SocialMediaLinks';
import Copyright from './Copyright';

function Footer() {
  return (
    <Wrapper>
      <SocialMediaLinks />
      <A href='/'>
        <img src={Logo} alt="Black Stallion Tattoo" target="_self" height="50" />
      </A>
      <Copyright>&copy;Black Stallion Tattoo</Copyright>
    </Wrapper>
  );
}

export default Footer;
