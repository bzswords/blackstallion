import React from 'react';

import PageSectionHeader from './../../shared/PageSectionHeader';
import H2 from './../../shared/H2';
import Body from './../../shared/Body';

import messages from './messages';

import Wrapper from './Wrapper';
import H3 from './H3';
import SponsorLogos from './SponsorLogos';
import OpaqueLayer from './OpaqueLayer';

function About() {
  return (
    <Wrapper>
      <OpaqueLayer>
        <PageSectionHeader>
          <H2>About Johannes</H2>
        </PageSectionHeader>

        <Body>
          <span>{messages.about1}</span>
          <br /><br />
          <span>{messages.about2}</span>
          <br /><br />
          <span>{messages.about3}</span>
        </Body>

        <H3>Sponsors</H3>
        <SponsorLogos />
      </OpaqueLayer>
    </Wrapper>
  );
}

export default About;
