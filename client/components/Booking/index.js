/*
 *
 * Booking
 *
 */

import React from 'react';

import Page from './../shared/Page';
import PageHeader from './../shared/PageHeader';
import Policy from './../Booking/Policy';
import BookingForm from './../Booking/BookingForm';

import MobileBackground from './../../assets/images/Booking/mobile-booking-header-img.jpg';
import DesktopBackground from './../../assets/images/Booking/booking-header-img.jpg';

export function Booking() {
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
