/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Page from 'components/styled/Page';
import Header from 'components/HomePage/Header/Header';
import TattooPortfolio from 'components/HomePage/TattooPortfolio';
import About from 'components/HomePage/About';
import FeaturedProducts from 'components/HomePage/FeaturedProducts';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <Header />
        <TattooPortfolio />
        <About />
        <FeaturedProducts />
      </Page>
    );
  }
}
