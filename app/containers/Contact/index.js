/*
 *
 * Contact
 *
 */

import React from 'react';

import Page from 'components/shared/Page';
import Header from 'components/Contact/Header';

export default class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <Header />
      </Page>
    );
  }
}
