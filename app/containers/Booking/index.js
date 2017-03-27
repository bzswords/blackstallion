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

import MobileBackground from './images/mobile-booking-header-img.jpg';
import DesktopBackground from './images/booking-header-img.jpg';

function Booking() {
  return (
    <Page>
      <PageHeader
        title="Book An Appointment"
        mobileBackground={MobileBackground}
        desktopBackground={DesktopBackground}
        altText="Book a tattoo appointment with Johannes"
      />
      <Policy />
      <BookingForm />
    </Page>
  );
}

export default Booking;
