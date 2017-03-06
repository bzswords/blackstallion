import React from 'react';
import styled from 'styled-components';

import StrikethroughHeading from 'components/shared/StrikethroughHeading';
import PageSection from 'components/shared/PageSection';
import PageSectionHeader from 'components/shared/PageSectionHeader';

import Form from './Form';
import Background from './images/form-background.jpg';

const Wrapper = styled.div`
  background: url(${Background}) no-repeat;
  background-size: 265%;
  padding: 2em 0.8em 2em 0.8em;

  @media (min-width: 767px) {
    background-size: 100%;
  }

  @media (min-width: 1050px) {
    padding: 3em 0.5em 3em 0.5em;
  }
`;

function BookingForm() {
  return (
    <Wrapper>
      <PageSectionHeader>
        <StrikethroughHeading text="Book An Appointment"></StrikethroughHeading>
      </PageSectionHeader>
      <Form />
    </Wrapper>
  );
}

export default BookingForm;
