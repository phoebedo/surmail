// this file for data layer control
//Redux store
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index.js';
import App from './components/App';

//createStore(reducer)
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

