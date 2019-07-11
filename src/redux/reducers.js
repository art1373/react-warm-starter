import { combineReducers } from 'redux';

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.value,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.value,
      };
    default:
      return state;
  }
};

export default combineReducers({
  counter,
});
