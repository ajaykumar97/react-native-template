import Axios, {AxiosRequestConfig} from 'axios';

import {urls} from './constants';
import UserMethodsObj from '../screens/MainAppScreens/Users/userMethods';
import strings from '../localization';

export const axios = Axios.create({
  baseURL: urls.baseUrl,
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
      UserMethodsObj.instance.props.logout({showAlert: true});

      return Promise.reject({
        response: {
          data: {error: {message: strings.sessionExpired}},
        },
      });
    }
    return response;
  });
