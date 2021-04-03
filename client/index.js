import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import App from './App.jsx';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
