import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      // return [...state,
      //   Object.assign({}, action.course)
      // ]; // spread operator. Spreads the array. Returns new instance of our array.
      return action.courses;
      
    default:
      return state;
  }
}