import React from 'react';

import Form from './Form';

import StrikethroughHeading from 'components/shared/StrikethroughHeading';
import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';

function BookingForm() {
  return (
    <PageSection background="black">
      <PageSectionHeader>
        <StrikethroughHeading text="Book An Appointment"></StrikethroughHeading>
      </PageSectionHeader>
      <Form />
    </PageSection>
  );
}

export default BookingForm;
