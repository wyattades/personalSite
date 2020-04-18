import ReactDOM from 'react-dom';
import React from 'react';

import './styles/screensaver.scss';
import Fluid from './components/Fluid';

const getSplashInfo = () => {
  return {
    timeout: Math.ceil(Math.random() * 2000) + 50,
    amount: Math.floor(Math.random() * 3) + 1,
    moveAmount: 5,
  };
};

const App = () => (
  <>
    <Fluid getSplashInfo={getSplashInfo} />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
