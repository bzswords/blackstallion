import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';
import H2 from 'components/shared/H2';
import H3 from './H3';
import Body from 'components/shared/Body';
import A from 'components/shared/A';

import Background from './images/Homepage-About.jpg';
import TattooFlashCollective from './images/Tattooflash.png'
import KingPinLogo from './images/KingPinLogo.png';

function About() {
  return (
    <PageSection background={Background}>
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
      <A href='/'>
        <img src={KingPinLogo} alt="King Pin Tattoo Supply" target="_self" height="90" />
      </A>
      <A href='/'>
        <img src={TattooFlashCollective} alt="Tatoo Flash Collective" target="_self" height="70" />
      </A>
    </PageSection>
  );
}

export default About;