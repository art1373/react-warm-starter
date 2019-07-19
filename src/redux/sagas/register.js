import { put, takeLatest, call } from 'redux-saga/effects';
import {
  successfulRegister,
  failRegisterData,
  revertFailActionForRegister,
  SEND_REGISTER_DATA,
  SUCCESSFUL_REGISTER,
} from '~/redux/actions';
import { post } from '~/utils/api';
import url from '~/utils/api/urls';

function* sendRegisterDataSaga({ user }) {
  try {
    const data = yield call(post(url.auth.register, { user }));
    console.log(data);
  } catch (e) {
    yield put(failRegisterData(e));
    yield put(revertFailActionForRegister());
  }
}

function* successfulRegisterSaga() {
  yield put(successfulRegister());
}

export default [
  takeLatest(SEND_REGISTER_DATA, sendRegisterDataSaga),
  takeLatest(SUCCESSFUL_REGISTER, successfulRegisterSaga),
];
