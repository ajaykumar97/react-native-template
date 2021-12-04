import {put} from 'redux-saga/effects';

import {screenNames} from '../../../utilities/constants';
import {
  getAPIError,
  setLocalUserData,
  showErrorMessage,
} from '../../../utilities/helperFunctions';
import logger from '../../../utilities/logger';
import {replace} from '../../../utilities/navigationService';
import {LOGIN_FAILED, LOGIN_SUCCEEDED} from './types';

export function* loginSaga({params}) {
  try {
    logger.data('login params are: ', params);

    /*
      const config = {
        url: urls.login,
        method: 'POST',
        data: params.data,
      };

      const response = yield request(config);
      logger.data('login response is: ', response);

      const data = extractUserDataFromDBResponse(response.data.data);
    */

    const data = params;
    logger.data('usedData to be saved is: ', data);

    yield setLocalUserData(data);

    yield put({
      type: LOGIN_SUCCEEDED,
      payload: data,
    });

    replace(screenNames.MainNavigator);
  } catch (error) {
    logger.apiError('login error: ', error);
    showErrorMessage(getAPIError(error));
    yield put({type: LOGIN_FAILED});
  }
}
