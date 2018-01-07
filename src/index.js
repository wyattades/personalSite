import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import './styles/style.scss';

const reactRoot = document.getElementById('react-root');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    reactRoot,
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}
