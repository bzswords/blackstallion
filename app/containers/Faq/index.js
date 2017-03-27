/*
 *
 * Faq
 *
 */

import React from 'react';

import Page from 'components/shared/Page';
import PageHeader from 'components/shared/PageHeader';
import Questions from 'components/Faq/Questions';

import MobileBackground from './images/mobile-faq-header-img.jpg';
import DesktopBackground from './images/faq-header-img.jpg';

const questions = [
  {
    question: 'How much do you charge?',
    answer: 'Pricing is dependent on many variables (such as size, placement, and subject matter). Certain larger tattoos may be priced using an hourly rate, while others may be priced by design.',
  },
  {
    question: 'How far out are you booked?',
    answer: 'Very, very far.',
  },
];

export default class Faq extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
