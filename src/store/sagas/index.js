import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authSagas';
import { actionTypes } from '../../utilities/constants';

export function* rootSaga() {
    yield takeLatest(actionTypes.LOGIN, loginSaga);
}
