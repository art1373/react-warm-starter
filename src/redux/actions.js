/* eslint-disable sort-keys-fix/sort-keys-fix */
export const GET_ARTICLES_LIST = 'GET_ARTICLES_LIST';
export const SET_ARTICLES_LIST = 'SET_ARTICLES_LIST';
export const FAIL_ARTICLES_LIST = 'FAIL_ARTICLES_LIST';

export const getArticlesList = () => ({
  type: GET_ARTICLES_LIST,
});

export const setArticlesList = payload => ({
  type: SET_ARTICLES_LIST,
  payload,
});

export const failArticlesList = error => ({
  type: FAIL_ARTICLES_LIST,
  error,
});
