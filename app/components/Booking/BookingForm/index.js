import React from 'react';

import StrikethroughHeading from 'components/shared/StrikethroughHeading';
import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';

function BookingForm() {
  return (
    <PageSection background="black">
      <PageSectionHeader>
        <StrikethroughHeading text="Booking Form"></StrikethroughHeading>
      </PageSectionHeader>
    </PageSection>
  );
}

export default BookingForm;
