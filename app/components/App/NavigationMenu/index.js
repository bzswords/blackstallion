import React, { PropTypes } from 'react';

import SocialMediaLinks from 'components/shared/SocialMediaLinks';
import Wrapper from './Wrapper';

function NavigationMenu({ show }) {
  return (
    <Wrapper show={show} >
      <ul>
        <li><a href="/" target="_self">Home</a></li>
        <li><a href="/booking" target="_self">Book An Appointment</a></li>
        <li><a href="/travel" target="_self">Travel</a></li>
        <li><a href="/">Webstore</a></li>
        <li><a href="/">Tattoo Flash Collective</a></li>
        <li><a href="/faq" target="_self">FAQ</a></li>
        <li><a href="/contact" target="_self">Contact</a></li>
        <SocialMediaLinks />
      </ul>
    </Wrapper>
  );
}

NavigationMenu.PropTypes = {
  show: PropTypes.bool.isRequired,
};

export default NavigationMenu;
