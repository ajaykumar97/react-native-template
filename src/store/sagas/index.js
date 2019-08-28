import { takeLatest } from 'redux-saga/effects';
import { getUsersSaga } from './userSagas';
import { actionTypes } from '../../utilities/constants';

export default function* rootSaga() {
    yield takeLatest(actionTypes.GET_USERS, getUsersSaga);
}
