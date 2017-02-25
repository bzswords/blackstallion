/**
*
* SocialMediaLinks
*
*/

import React from 'react';

import Wrapper from './Wrapper';
import SocialMediaLink from './SocialMediaLink';

import Tumblr from './Tumblr.svg';
import Facebook from './Facebook.svg';
import Twitter from './Twitter.svg';
import Instagram from './Instagram.svg';

function SocialMediaLinks() {
  return (
    <Wrapper>
      <SocialMediaLink src={Tumblr} href="tumblr.com" />
      <SocialMediaLink src={Facebook} href="facebook.com" />
      <SocialMediaLink src={Twitter} href="twitter.com" />
      <SocialMediaLink src={Instagram} href="instagram.com" />
    </Wrapper>
  );
}

export default SocialMediaLinks;
