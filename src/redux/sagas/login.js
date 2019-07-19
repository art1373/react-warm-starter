import { put, takeLatest, call } from 'redux-saga/effects';
import {
  successFulLogin,
  failLoginData,
  revertFailAction,
  SEND_LOGIN_DATA,
} from '~/redux/actions';
import { post } from '~/utils/api';
import url from '~/utils/api/urls';

function* sendLoginDataSaga({ user }) {
  try {
    const data = yield call(post, url.auth.login, { user });
    console.log('login is sucessfull', data);
    yield put(successFulLogin());
  } catch ({ errors }) {
    yield put(failLoginData(errors));
    yield put(revertFailAction());
  }
}

export default takeLatest(SEND_LOGIN_DATA, sendLoginDataSaga);
