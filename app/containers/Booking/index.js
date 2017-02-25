/*
 *
 * Booking
 *
 */

import React from 'react';

import Page from 'components/shared/Page';
import PageHeader from 'components/shared/PageHeader';
import Policy from 'components/Booking/Policy';
import BookingForm from 'components/Booking/BookingForm';

import BackgroundImage from './images/booking-header-img.jpg';

export default class Booking extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <PageHeader title="Book An Appointment" backgroundImage={BackgroundImage} />
        <Policy />
        <BookingForm />
      </Page>
    );
  }
}
