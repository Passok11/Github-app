import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import App from './app';
import './css/style.css';

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]'),
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    /* eslint-disable global-require */
    const NextApp = require('./app').default;
    renderApp(NextApp);
  });
} else {
  renderApp(App);
}
