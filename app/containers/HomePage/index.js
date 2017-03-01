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
    { path: 'http://tattoo-journal.com/wp-content/uploads/2015/08/armband-tattoo-2.jpg' },
    { path: 'http://tattoo-journal.com/wp-content/uploads/2015/08/armband-tattoo-2.jpg' },
    { path: 'http://tattoo-journal.com/wp-content/uploads/2015/08/armband-tattoo-2.jpg' },
    { path: 'http://tattoo-journal.com/wp-content/uploads/2015/08/armband-tattoo-2.jpg' },
    { path: 'https://s-media-cache-ak0.pinimg.com/736x/91/59/08/915908a0c53bcc46efdea0e94a18bf35.jpg' },
    { path: 'http://tattoo-journal.com/wp-content/uploads/2015/08/armband-tattoo-2.jpg' },
    { path: 'http://tattoo-journal.com/wp-content/uploads/2015/08/armband-tattoo-2.jpg' },
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
