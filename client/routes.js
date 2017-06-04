import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { NotFound } from './components/App.js';
import { App } from './components/App/index.js';
import { HomePage } from './components/HomePage/index.js';
import { Booking } from './components/Booking/index.js';
import { Travel } from './components/Travel/index.js';
import { Faq } from './components/Faq/index.js';
import { Contact } from './components/Contact/index.js';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute title='Black Stallion Tattoo' component={HomePage} />
    <Route path='travel' title='Black Stallion Tattoo - Travel' component={Travel} />
    <Route path='booking' title='Black Stallion Tattoo - Book an Appointment' component={Booking} />
    <Route path='faq' title='Black Stallion Tattoo - FAQ' component={Faq} />
    <Route path='contact' title='Black Stallion Tattoo - Contact' component={Contact} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
