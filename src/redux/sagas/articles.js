import { put, takeLatest } from 'redux-saga/effects';
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

export default takeLatest(GET_ARTICLES_LIST, getArticlesListSaga);
