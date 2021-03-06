import React from 'react';

import Logo from './../../../assets/images/Logo-02.svg';
import SocialMediaLinks from '../../shared/SocialMediaLinks';

import Wrapper from './Wrapper';
import A from './A';
import Copyright from './Copyright';

function Footer() {
  return (
    <Wrapper>
      <SocialMediaLinks />
      <A href="/">
        <img src={Logo} alt="Black Stallion Tattoo" target="_self" />
      </A>
      <Copyright>&copy;Black Stallion Tattoo</Copyright>
    </Wrapper>
  );
}

export default Footer;
