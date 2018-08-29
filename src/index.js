import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';
import './styles/style.scss';

require.context('./static', true);


ReactDOM.render(<App/>, document.getElementById('root'));
