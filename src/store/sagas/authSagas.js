import { call, put } from 'redux-saga/effects';
import { actionTypes } from '../../utilities/constants';

function* loginSaga(params) {
    try {
        const payload = {
            user_logged_in: true
        };

        yield put({ type: actionTypes.LOGIN_SUCCESS, payload });
    } catch (error) {
        console.log('Login error: ', error);
    }
}

export {
    loginSaga
};
