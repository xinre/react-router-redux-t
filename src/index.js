import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Apps from './apps.js'


ReactDOM.render(<Apps />, document.getElementById('root'));
registerServiceWorker();
