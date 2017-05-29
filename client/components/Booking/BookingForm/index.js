import React, { PropTypes } from 'react';
import styled from 'styled-components';

import StrikethroughHeading from './../../shared/StrikethroughHeading';
import PageSectionHeader from './../../shared/PageSectionHeader';

import Form from './Form';
import Background from './../../../assets/images/Booking/form-background.jpg';

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

function BookingForm({ onSubmitForm }) {
  return (
    <Wrapper>
      <PageSectionHeader>
        <StrikethroughHeading
          text="Book An Appointment"
        />
      </PageSectionHeader>
      <Form
        onSubmitForm={onSubmitForm}
      />
    </Wrapper>
  );
}

BookingForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

export default BookingForm;
