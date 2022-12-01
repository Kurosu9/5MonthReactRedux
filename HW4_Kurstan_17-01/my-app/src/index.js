import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware } from 'redux';
import { rootReducers } from './redux/reducers';

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);