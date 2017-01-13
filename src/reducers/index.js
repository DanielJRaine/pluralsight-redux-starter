import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  // courses: courses // shorthand property name, ES6 feature.
  courses
});

export default rootReducer;