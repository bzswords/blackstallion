/*
 *
 * Travel
 *
 */

import React from 'react';

import Page from './../shared/Page';
import PageHeader from './../shared/PageHeader';
import Schedule from './../Travel/Schedule';

import MobileBackground from './../../assets/images/Travel/mobile-travel-header-img.jpg';
import DesktopBackground from './../../assets/images/Travel/travel-header-img.jpg';

const entries = [
  {
    dateString: 'December 10-13',
    placeName: 'Seven Swords Tattoo',
    address: 'Philadelphia, PA',
  },
  {
    dateString: 'December 21-24',
    placeName: 'Coast To Coast Tattoo',
    address: 'Charlotte, NC',
  },
];

export class Travel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <PageHeader
          title="Travel"
          mobileBackground={MobileBackground}
          desktopBackground={DesktopBackground}
          altText="Coming to a tattoo convention or shop near you soon"
        />
        <Schedule entries={entries} />
      </Page>
    );
  }
}
