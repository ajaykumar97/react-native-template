import {call, put} from 'redux-saga/effects';
import strings from '../../../localization';
import {screenNames, urls} from '../../../utilities/constants';

import {
  deleteUserDataFromLocal,
  getAPIError,
  showErrorMessage,
} from '../../../utilities/helperFunctions';
import logger from '../../../utilities/logger';
import {replace} from '../../../utilities/navigationService';
import {request} from '../../../utilities/request';
import {GET_USERS_FAILED, GET_USERS_SUCCEEDED, SESSION_EXPIRED} from './types';

export function* getAllUsersSaga() {
  try {
    const config = {
      url: urls.getUsers,
      method: 'GET',
    };

    let {data} = yield call(request, config);

    logger.data('getUsers response is: ', data, true);

    data = data.map(user => {
      user.key = String(user.id);
      return user;
    });

    const payload = {
      users: data,
    };

    yield put({type: GET_USERS_SUCCEEDED, payload});
  } catch (error) {
    logger.error('getAllUsers error: ', error);
    showErrorMessage(getAPIError(error));
    yield put({type: GET_USERS_FAILED});
  }
}

export function* sessionExpiredSaga({params: {showAlert} = {}}) {
  try {
    /*
    const config = {
        url: urls.logout,
        method: 'PUT',
        data: params.data,
    };

    const response = yield call(request, config);

    logger.data('logout response is: ', response.data);
    */

    if (showAlert) {
      showErrorMessage(strings.sessionExpired);
    }

    yield deleteUserDataFromLocal();
    replace(screenNames.AuthNavigator);
    yield put({type: SESSION_EXPIRED});
  } catch (error) {
    logger.error('Logout user error: ', error);
    yield deleteUserDataFromLocal();
    replace(screenNames.AuthNavigator);
    yield put({type: SESSION_EXPIRED});
  }
}
