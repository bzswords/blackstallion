import React from 'react';
import { FormattedMessage } from 'react-intl';

import PageSectionHeader from 'components/shared/PageSectionHeader';
import H2 from 'components/shared/H2';
import Body from 'components/shared/Body';

import messages from './messages';

import Wrapper from './Wrapper';
import H3 from './H3';
import SponsorLogos from './SponsorLogos';

function About() {
  return (
    <Wrapper>
      <PageSectionHeader>
        <H2>About Johannes</H2>
      </PageSectionHeader>

      <Body>
        <FormattedMessage {...messages.about1} />
        <br /><br />
        <FormattedMessage {...messages.about2} />
        <br /><br />
        <FormattedMessage {...messages.about3} />
      </Body>

      <H3>Sponsors</H3>
      <SponsorLogos />
    </Wrapper>
  );
}

export default About;
