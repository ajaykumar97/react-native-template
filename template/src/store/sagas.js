import {takeLatest} from 'redux-saga/effects';

import {checkIfLoggedInSaga} from '../screens/AuthScreens/BootStrapApp/sagas';
import {CHECKED_IF_LOGGED_IN} from '../screens/AuthScreens/BootStrapApp/types';
import {loginSaga} from '../screens/AuthScreens/Login/sagas';
import {LOGIN_REQUESTED} from '../screens/AuthScreens/Login/types';
import {signupSaga} from '../screens/AuthScreens/Signup/sagas';
import {SIGNUP_REQUESTED} from '../screens/AuthScreens/Signup/types';
import {
  getAllUsersSaga,
  sessionExpiredSaga,
} from '../screens/MainAppScreens/Users/sagas';
import {
  GET_USER_REQUESTED,
  SESSION_EXPIRE_REQUESTED,
} from '../screens/MainAppScreens/Users/types';

export default function* rootSaga() {
  yield takeLatest(CHECKED_IF_LOGGED_IN, checkIfLoggedInSaga);
  yield takeLatest(SESSION_EXPIRE_REQUESTED, sessionExpiredSaga);
  yield takeLatest(LOGIN_REQUESTED, loginSaga);
  yield takeLatest(SIGNUP_REQUESTED, signupSaga);
  yield takeLatest(GET_USER_REQUESTED, getAllUsersSaga);
}
