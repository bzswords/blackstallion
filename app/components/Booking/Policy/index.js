import React from 'react';
import { FormattedMessage } from 'react-intl';

import StrikethroughHeading from 'components/shared/StrikethroughHeading';
import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';
import Body from './Body';

import messages from './messages';

function Policy() {
  return (
    <PageSection background="#1b1b1b">
      <PageSectionHeader>
        <StrikethroughHeading text="Booking Policy"></StrikethroughHeading>
      </PageSectionHeader>
      <Body>
        <FormattedMessage {...messages.policy} />
      </Body>
    </PageSection>
  );
}

export default Policy;
