import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'

import reducer from './reducers/reducers'

const store = applyMiddleware(thunk, promise, multi)(createStore)(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));
serviceWorker.unregister();
