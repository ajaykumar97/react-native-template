import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { actionTypes, urls } from '../../utilities/constants';
import { request } from '../../utilities/APIs';

function* getUsersSaga(params) {
    try {
        const config = {
            url: urls.getUsers,
            method: 'GET',
            data: {},
        };

        let { data } = yield call(request, config);

        data = data.map((user) => {
            user.key = String(user.id);
            return user;
        });

        const payload = {
            users: data,
        };

        console.log('payload is: ', data);

        yield put({ type: actionTypes.GET_USERS_SUCCESS, payload });
    } catch (error) {
        console.log('Get users error: ', error);
        const errorMessage = error.message || 'Something went wrong. Please try again later.';

        Alert.alert('Error!', errorMessage);

        yield put({ type: actionTypes.STOP_USERS_LOADING });
    }
}

export {
    getUsersSaga,
};
