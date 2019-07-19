import { combineReducers } from 'redux';
import articles from './articles';
import login from './login';

export default combineReducers({
  articles,
  login,
});
