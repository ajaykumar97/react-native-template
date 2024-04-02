import Axios, {AxiosRequestConfig} from 'axios';
import {t} from 'i18next';

import {ACCESS_TOKEN, SCREEN_NAMES, URLS} from './constants';
import {removeSecuredData} from './helperFunctions/localStorage';
import {replace} from './navigationService';

export const axios = Axios.create({
  baseURL: URLS.baseUrl,
  validateStatus: status => {
    if (status === 200 || status === 401) {
      return true;
    }
    return false;
  },
});

export const request = (config: AxiosRequestConfig) =>
  axios(config).then(response => {
    if (response.status === 401) {
      replace(SCREEN_NAMES.AuthNavigator);
      removeSecuredData(ACCESS_TOKEN);

      return Promise.reject({
        response: {
          data: {error: {message: t('sessionExpired')}},
        },
      });
    }
    return response;
  });
