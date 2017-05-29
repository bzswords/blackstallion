import React from 'react';

import StrikethroughHeading from './../../shared/StrikethroughHeading';
import PageSection from './../../shared/PageSection';
import PageSectionHeader from './../../shared/PageSectionHeader';
import Body from './Body';

import messages from './messages';

function Policy() {
  return (
    <PageSection background="#1b1b1b">
      <PageSectionHeader>
        <StrikethroughHeading text="Booking Policy"></StrikethroughHeading>
      </PageSectionHeader>
      <Body>
        <span>{messages.policy}</span>
      </Body>
    </PageSection>
  );
}

export default Policy;
