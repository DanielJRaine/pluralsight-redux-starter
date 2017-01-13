import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ]; // spread operator. Spreads the array. Returns new instance of our array.
    
    default:
      return state;
  }
}