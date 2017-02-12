import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import PageSection from 'components/shared/PageSection';
import H2 from 'components/styled/H2';
import Body from 'components/styled/Body';

function About() {
  return (
    <PageSection background="grey">
      <H2>About Johannes</H2>
      <Body>
        <FormattedMessage {...messages.about} />
      </Body>
    </PageSection>
  );
}

export default About;