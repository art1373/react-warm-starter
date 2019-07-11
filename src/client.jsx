import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Index from '~/app';

hydrate(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
