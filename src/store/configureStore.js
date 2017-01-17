import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import helper from './../helpers/RestHelper.js'

export default function configureStore(initialState) {
  let reports = [];
  
  helper.get("api/reports")
  .then((data) => {
    reports = data;
    triggerListeners();
  })

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
