import {combineReducers} from 'redux';
import courses from './courseReducer';
import reports from './reportReducer';
// import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // courses: courses // shorthand property name, ES6 feature.
  courses,
  reports
  // ajaxCallsInProgress
});

export default rootReducer;