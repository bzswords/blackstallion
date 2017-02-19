/*
 *
 * Booking
 *
 */

import React from 'react';

import Page from 'components/shared/Page';
import Header from 'components/Booking/Header';

export default class Booking extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <Header />
      </Page>
    );
  }
}
