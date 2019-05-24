import ReactDOM from 'react-dom';
import React from 'react';

import './styles/screensaver.scss';
import Fluid from './components/Fluid';


const App = () => <>
  <Fluid randomSplashWeight={3000}/>
</>;

ReactDOM.render(<App/>, document.getElementById('root'));
