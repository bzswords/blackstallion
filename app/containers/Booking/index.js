/*
 *
 * Booking
 *
 */

import React from 'react';
import 'whatwg-fetch';

import Page from 'components/shared/Page';
import PageHeader from 'components/shared/PageHeader';
import Policy from 'components/Booking/Policy';
import BookingForm from 'components/Booking/BookingForm';

import MobileBackground from './images/mobile-booking-header-img.jpg';
import DesktopBackground from './images/booking-header-img.jpg';

export default class Booking extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  constructor() {
    super();
    this.sendMail = this.sendMail.bind(this);
  }

  sendMail(evt) {
    evt.preventDefault();
    fetch('https://api.mailgun.net/v3/sandboxb7fceb5c07604926bbd885b9fb1b8019.mailgun.org/messages',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        auth: {
          'api': 'key-3725739f16a1061db8b6fa19c5888bb8'
        },
        body: JSON.stringify({
          from: 'Excited User <mailgun@sandboxb7fceb5c07604926bbd885b9fb1b8019.mailgun.org>',
          to: 'bryan.s@drizly.com',
          subject: 'Hello',
          text: 'Testing some Mailgun sweetness'
        })
      }
    );
  }

  render() {
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
}
