export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state,
        Object.assign({}, action.course)
      ]; // spread operator. Spreads the array. Returns new instance of our array.
    
    default:
      return state;
  }
}