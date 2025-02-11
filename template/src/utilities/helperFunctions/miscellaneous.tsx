import i18next from 'i18next';
import {showMessage} from 'react-native-flash-message';
import {scale} from 'react-native-size-matters';

import {fontsFamily} from '../../commonComponents/TextComponents';
import {LAYOUT} from '../constants';

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
  error: {response: {data: {message: string}}} | {message: string} | string,
  options = {},
) => {
  let errorMessage: string | undefined;
  if (typeof error === 'string') {
    errorMessage = error;
  }
  if (typeof error === 'object' && 'response' in error && error.response?.data?.message) {
    errorMessage = error.response.data.message;
  }
  if (!errorMessage) {
    errorMessage = i18next.t('somethingWentWrong');
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
