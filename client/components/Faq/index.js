/*
 *
 * Faq
 *
 */

import React from 'react';

import Page from './../shared/Page';
import PageHeader from './../shared/PageHeader';
import Questions from './../Faq/Questions';

import MobileBackground from './../../assets/images/Faq/mobile-faq-header-img.jpg';
import DesktopBackground from './../../assets/images/Faq/faq-header-img.jpg';

const questions = [
  {
    question: 'How much do you charge?',
    answer: 'Pricing is dependent on many variables (such as size, placement, and subject matter). Certain larger tattoos may be priced using an hourly rate, while others may be priced by design.',
  },
  {
    question: 'How far out are you booked?',
    answer: 'Although bookings are subject to change, I am generally booked out 3 weeks in advance for large pieces and one week out for smaller designs.',
  },
  {
    question: 'Do you do walk-ins?',
    answer: 'Yes. Tuesdays are reserved for walk-in tattoos. If you have a smaller piece you would like to get in (or pick some flash off the wall!), please come in early on Tuesday. Walk-ins are on a first come, first served basis.',
  },
  {
    question: 'What styles do you like to do?',
    answer: 'I enjoy tattooing a variety of styles. Some of my stylistic preferences include Americana and Western traditional, Japanese traditional, and bold black and grey. I do not do portraits, photorealism, or biomechanical.',
  },
  {
    question: 'I can\'t travel to Boston. Will you be working in my area?',
    answer: 'You can find my upcoming conventions and guest spots listed under the travel section on this site.',
  },
  {
    question: 'Where can I buy your products?',
    answer: 'Black Stallion Tattoo products can be found at my webstore or at Tattoo Flash Collective.',
  },
];

export class Faq extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <PageHeader
          title="FAQ"
          mobileBackground={MobileBackground}
          desktopBackground={DesktopBackground}
          altText="Frequently asked questions about Johannes and tattoos"
        />
        <Questions questions={questions} />
      </Page>
    );
  }
}
