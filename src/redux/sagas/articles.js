import { put, takeLatest, call } from 'redux-saga/effects';
import {
  setArticlesList,
  failArticlesList,
  GET_ARTICLES_LIST,
} from '~/redux/actions';
import { getArticleDataPerPage } from '~/utils/api';

function* getArticlesListSaga({ perPage }) {
  try {
    const list = yield call(getArticleDataPerPage, perPage);
    yield put(setArticlesList(list));
  } catch ({ errors }) {
    yield put(failArticlesList(errors));
  }
}

export default takeLatest(GET_ARTICLES_LIST, getArticlesListSaga);
