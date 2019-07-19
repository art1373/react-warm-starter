import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  failLoginData,
  revertFailAction,
  SEND_LOGIN_DATA,
} from '~/redux/actions';
import { post } from '~/utils/api';
import url from '~/utils/api/urls';

const createBlaBla = payload => axios.post(url.auth.login, payload);

function* sendLoginDataSaga({ user }) {
  try {
    const data = yield call(createBlaBla, { user });
    //const data = yield call(post, url.auth.login, { user });
    console.log(data);
  } catch (e) {
    console.log(e);
    yield put(failLoginData(e));
    // yield put(revertFailAction());
  }
}

export default takeLatest(SEND_LOGIN_DATA, sendLoginDataSaga);
