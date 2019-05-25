import ReactDOM from 'react-dom';
import React from 'react';

import './styles/screensaver.scss';
import Fluid from './components/Fluid';


const App = () => <>
  <Fluid getRandTimeout={() => Math.ceil(Math.random() * 3000) + 500}/>
</>;

ReactDOM.render(<App/>, document.getElementById('root'));
