/* eslint-disable sort-keys-fix/sort-keys-fix */
import '@babel/polyfill';
import { put, takeEvery, all } from 'redux-saga/effects';
import { Increment } from '~/redux/actions';
// import { get } from '~/utils/api';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put(Increment(0));
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([incrementAsync(), watchIncrementAsync()]);
}
