import React from 'react';
import ReactDOM from 'react-dom';
import User from './User/User'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<User />, document.getElementById('root'));
registerServiceWorker();

