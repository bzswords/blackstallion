/*
 *
 * Travel
 *
 */

import React from 'react';

import Page from 'components/shared/Page';
import PageHeader from 'components/shared/PageHeader';
import Schedule from 'components/Travel/Schedule';

import MobileBackground from './images/mobile-travel-header-img.jpg';
import DesktopBackground from './images/travel-header-img.jpg';

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

export default class Travel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
