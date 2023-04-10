/**
 * Main app module, not meant to be changed.
 */
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './_router';

const root = document.getElementById('root');

if (root) {
  ReactDOMClient.hydrateRoot(
    root,
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
