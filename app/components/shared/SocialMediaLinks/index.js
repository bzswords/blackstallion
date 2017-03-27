/**
*
* SocialMediaLinks
*
*/

import React from 'react';

import Wrapper from './Wrapper';
import SocialMediaLink from './SocialMediaLink';

import Tumblr from './icons/Tumblr';
import Facebook from './icons/Facebook';
import Twitter from './icons/Twitter';
import Instagram from './icons/Instagram';

function SocialMediaLinks() {
  return (
    <Wrapper>
      <SocialMediaLink href="tumblr.com">
        <Tumblr />
      </SocialMediaLink>
      <SocialMediaLink href="facebook.com">
        <Facebook />
      </SocialMediaLink>
      <SocialMediaLink href="twitter.com">
        <Twitter />
      </SocialMediaLink>
      <SocialMediaLink href="instagram.com">
        <Instagram />
      </SocialMediaLink>
    </Wrapper>
  );
}

export default SocialMediaLinks;
