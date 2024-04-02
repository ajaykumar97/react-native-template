import {showMessage} from 'react-native-flash-message';
import {scale} from 'react-native-size-matters';

import {fontsFamily} from '../../commonComponents/TextComponents';
import {LAYOUT} from '../constants';

export const getAPIError = (error: {
  response: {data: {message: string; error: {message: string}}};
  data: {error: {message: string}};
}) => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.response?.data?.error?.message) {
    return error.response.data.error.message;
  }
  if (error?.data?.error?.message) {
    return error.data.error.message;
  }

  return 'Something went wrong. Please try again later.';
};

export const flashMessageConfig = {
  floating: true,
  duration: 5000,
  style: {marginTop: LAYOUT.isiOS ? 0 : scale(20)},
  textStyle: {fontFamily: fontsFamily.arialRegular},
  titleStyle: {fontFamily: fontsFamily.arialRegular},
};

const showFlashMessage = (message: string, options = {}) => {
  return showMessage({
    message,
    ...flashMessageConfig,
    ...options,
  });
};

export const showErrorMessage = (
  error: {response: {data: {message: string}}} | string,
  options = {},
) => {
  let errorMessage;
  if (typeof error === 'string') {
    errorMessage = error;
  }
  if (error?.response?.data?.message) {
    errorMessage = error.response.data.message;
  }
  if (!errorMessage) {
    return;
  }
  return showFlashMessage(errorMessage, {type: 'danger', ...options});
};

export const showSuccessMessage = (message: string, options = {}) => {
  if (typeof message !== 'string') {
    return;
  }
  return showFlashMessage(message, {type: 'success', ...options});
};

export const showInfoMessage = (message: string, options = {}) => {
  if (typeof message !== 'string') {
    return;
  }
  return showFlashMessage(message, {type: 'info', ...options});
};

export const keyExtractor = (item: {id: string}) => String(item.id);

export const truncateString = (str: string, num = 50) => {
  if (str.length > num) {
    return `${str.slice(0, num > 3 ? num - 3 : num)}...`;
  }
  return str;
};
