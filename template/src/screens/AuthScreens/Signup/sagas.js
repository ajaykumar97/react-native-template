import {put} from 'redux-saga/effects';

import {screenNames} from '../../../utilities/constants';
import {
  getAPIError,
  setLocalUserData,
  showErrorMessage,
} from '../../../utilities/helperFunctions';
import logger from '../../../utilities/logger';
import {replace} from '../../../utilities/navigationService';
import {SIGNUP_FAILED, SIGNUP_SUCCEEDED} from './types';

export function* signupSaga({params}) {
  try {
    logger.data('signup params are: ', params);

    /*
    const config = {
      url: urls.register,
      method: 'POST',
      data: params.data,
    };

    const response = yield request(config);

    // logger.data('signup response is: ', response);

    const data = extractUserDataFromDBResponse(response.data.data);
    */

    const data = params;
    logger.data('usedData to be saved is: ', data);

    yield setLocalUserData(data);

    yield put({
      type: SIGNUP_SUCCEEDED,
      payload: data,
    });

    replace(screenNames.MainNavigator);
  } catch (error) {
    logger.apiError('signup error: ', error);
    showErrorMessage(getAPIError(error));
    yield put({type: SIGNUP_FAILED});
  }
}
