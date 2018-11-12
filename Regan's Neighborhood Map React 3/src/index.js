import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import AppBase from './components/AppBase';

ReactDOM.render(<AppBase></AppBase>, document.getElementById('root'));
registerServiceWorker();
