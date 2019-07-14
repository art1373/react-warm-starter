import { combineReducers } from 'redux';

const articlesList = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_ARTICLES_LIST':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  articlesList,
});
