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

import Page from 'components/shared/Page';
import Header from 'components/HomePage/Header';
import TattooPortfolio from 'components/HomePage/TattooPortfolio';
import About from 'components/HomePage/About';
import FeaturedProducts from 'components/HomePage/FeaturedProducts';

function HomePage() {
  const images = [
    { path: 'https://s3.amazonaws.com/tattoo-images/1.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/2.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/3.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/4.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/5.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/6.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/7.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/8.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/9.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/10.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/11.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/12.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/13.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/14.jpg' },
    { path: 'https://s3.amazonaws.com/tattoo-images/15.jpg' },
  ];
  return (
    <Page>
      <Header />
      <TattooPortfolio images={images} />
      <About />
      <FeaturedProducts />
    </Page>
  );
}

export default HomePage;
