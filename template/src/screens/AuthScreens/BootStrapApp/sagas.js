import {put} from 'redux-saga/effects';
import RNBootSplash from 'react-native-bootsplash';

import {screenNames} from '../../../utilities/constants';
import {getLocalUserData} from '../../../utilities/helperFunctions';
import logger from '../../../utilities/logger';
import {replace} from '../../../utilities/navigationService';
import {LOGIN_SUCCEEDED} from '../Login/types';

export function* checkIfLoggedInSaga() {
  try {
    const userData = yield getLocalUserData();
    logger.log('userData is: ', userData);

    if (!userData) {
      const error = 'User data not found';
      throw error;
    }

    yield put({
      type: LOGIN_SUCCEEDED,
      payload: userData,
    });

    replace(screenNames.MainNavigator);

    setTimeout(() => {
      RNBootSplash.hide({duration: 250});
    }, 300);
  } catch (error) {
    logger.error('checkIfLoggedIn error: ', error);
    replace(screenNames.AuthNavigator);
    setTimeout(() => {
      RNBootSplash.hide({duration: 250});
    }, 300);
  }
}
