import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Conponents/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

var {Provider} = require('react-redux');
var store = require('./store.js');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();