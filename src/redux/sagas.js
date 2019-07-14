/* eslint-disable sort-keys-fix/sort-keys-fix */
import '@babel/polyfill';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  setArticlesList,
  failArticlesList,
  GET_ARTICLES_LIST,
} from '~/redux/actions';
import { get } from '~/utils/api';
import url from '~/utils/api/urls';

function* getArticlesListSaga() {
  try {
    const list = yield get(url.articles.list);
    yield put(setArticlesList(list));
  } catch (e) {
    yield put(failArticlesList(e));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_ARTICLES_LIST, getArticlesListSaga)]);
}
