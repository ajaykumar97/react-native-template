import {showMessage} from 'react-native-flash-message';

import {fonts} from '../../assets';
import {layout} from '../layout';

export const flashMessageConfig = {
  floating: true,
  duration: 4000,
  style: {marginTop: layout.isiOS ? 0 : 20},
  textStyle: {fontFamily: fonts.regular},
  titleStyle: {fontFamily: fonts.regular},
};

const showErrorMessage = (alertMessage, options = {}) => {
  showMessage({
    message: String(alertMessage),
    type: 'danger',
    ...flashMessageConfig,
    ...options,
  });
};

const showSuccessMessage = (alertMessage, options = {}) => {
  showMessage({
    message: String(alertMessage),
    type: 'success',
    ...flashMessageConfig,
    ...options,
  });
};

const showInfoMessage = (alertMessage, options = {}) => {
  showMessage({
    message: String(alertMessage),
    type: 'info',
    ...flashMessageConfig,
    ...options,
  });
};

const intoTitleCase = string => {
  let sentence = string.toLowerCase().split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  sentence = sentence.join(' ');
  return sentence;
};

const keyExtractor = item => String(item.id);

const truncateString = (str, num = 50) => {
  if (str.length > num) {
    return `${str.slice(0, num > 3 ? num - 3 : num)}...`;
  }
  return str;
};

const getAPIError = error => {
  if (error?.response?.data?.error?.message) {
    return error.response.data.error.message;
  }
  if (error?.data?.error?.message) {
    return error.data.error.message;
  }

  if (error?.message) {
    return error.message;
  }

  return 'Something went wrong. Please try again later.';
};
export {
  showErrorMessage,
  showSuccessMessage,
  showInfoMessage,
  intoTitleCase,
  keyExtractor,
  truncateString,
  getAPIError,
};
