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
      <SocialMediaLink href="http://blackstalliontattoo.tumblr.com/">
        <Tumblr />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.facebook.com/BlackStallionTattooing/">
        <Facebook />
      </SocialMediaLink>
      <SocialMediaLink href="https://twitter.com/bstattooing">
        <Twitter />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.instagram.com/blackstalliontattoo/">
        <Instagram />
      </SocialMediaLink>
    </Wrapper>
  );
}

export default SocialMediaLinks;
