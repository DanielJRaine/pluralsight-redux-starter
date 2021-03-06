import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadReports} from './actions/reportActions';
import './styles/styles.css'; //Webpack can import CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); // for SSR, pass an initial state here
store.dispatch(loadReports());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
