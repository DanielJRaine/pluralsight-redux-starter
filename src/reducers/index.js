import {combineReducers} from 'redux';
import courses from './courseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // courses: courses // shorthand property name, ES6 feature.
  courses,
  ajaxCallsInProgress
});

export default rootReducer;