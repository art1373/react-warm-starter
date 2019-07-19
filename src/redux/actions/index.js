/* eslint-disable sort-keys-fix/sort-keys-fix */

// article actions
import {
  getArticlesList,
  failArticlesList,
  setArticlesList,
  GET_ARTICLES_LIST,
  FAIL_ARTICLES_LIST,
  SET_ARTICLES_LIST,
} from './articles';
// login actions
import {
  sendLoginData,
  failLoginData,
  revertFailAction,
  SEND_LOGIN_DATA,
  FAIL_LOGIN_DATA,
  REVERT_FAIL_ACTION,
} from './login';
// register actions
import {
  sendRegisterData,
  successfulRegister,
  failRegisterData,
  revertFailAction as revertFailActionForRegister,
  SEND_REGISTER_DATA,
  SUCCESSFUL_REGISTER,
  FAIL_REGISTER_DATA,
  REVERT_FAIL_ACTION as REVERT_FAIL_ACTION_FOR_REGISTER,
} from './register';

export {
  // export article actions
  getArticlesList,
  failArticlesList,
  setArticlesList,
  GET_ARTICLES_LIST,
  FAIL_ARTICLES_LIST,
  SET_ARTICLES_LIST,
  // export login actions
  sendLoginData,
  failLoginData,
  revertFailAction,
  SEND_LOGIN_DATA,
  FAIL_LOGIN_DATA,
  REVERT_FAIL_ACTION,
  // export register actions
  sendRegisterData,
  successfulRegister,
  revertFailActionForRegister,
  failRegisterData,
  SEND_REGISTER_DATA,
  SUCCESSFUL_REGISTER,
  FAIL_REGISTER_DATA,
  REVERT_FAIL_ACTION_FOR_REGISTER,
};
