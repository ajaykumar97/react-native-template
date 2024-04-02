import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

export const LAYOUT = {
  size: {width, height},
  isiOS: Platform.OS === 'ios',
};

export const DATE_FORMAT = 'DD/MM/YYYY';
export const TIME_FORMAT = 'hh:mm a';

export const THEME = {
  light: 'light',
  dark: 'dark',
};

export const USER_DATA = 'userData';
export const ACCESS_TOKEN = 'userToken';

export const REGEX = {
  number: /^[0-9]{1,}$/,
  emailMobileNo: /^([0-9]{9})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$/,
  mobileNo: /^([0-9]{5,15})$/,
  price: /^[1-9][0-9]*$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
  password: /^[A-Za-z0-9_@./#&+-]*$/, //alpha-numeric and _@./#&+-
  name: /[^a-zA-Z\s]/,
};

export const CONTENT_TYPE = {
  formData: 'multipart/form-data',
  applicationJson: 'application/json',
  image: 'image/jpeg',
};
