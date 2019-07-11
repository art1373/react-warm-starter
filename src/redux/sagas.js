/* eslint-disable sort-keys-fix/sort-keys-fix */
import { put, takeEvery, all } from 'redux-saga/effects';
import '@babel/polyfill';
// import { get } from '~/utils/api';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([incrementAsync(), watchIncrementAsync()]);
}
