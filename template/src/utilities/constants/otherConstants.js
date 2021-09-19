import {Platform} from 'react-native';

const DATE_FORMAT = 'DD/MM/YYYY';
const TIME_FORMAT = 'hh:mm a';

const theme = {
  light: 'light',
  dark: 'dark',
};

const USER_DATA = 'userData';

const regex = {
  number: /^[0-9]{1,}$/,
  emailMobileNo: /^([0-9]{9})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$/,
  mobileNo: /^([0-9]{5,15})$/,
  price: /^[1-9][0-9]*$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
  password: /^[A-Za-z0-9_@./#&+-]*$/, //alpha-numeric and _@./#&+-
  name: /[^a-zA-Z\s]/,
};

const deviceType = Platform.select({
  ios: 'IPHONE',
  android: 'ANDROID',
});

const CONTENT_TYPE = {
  formData: 'multipart/form-data',
  applicationJson: 'application/json',
  image: 'image/jpeg',
};

export {
  DATE_FORMAT,
  theme,
  USER_DATA,
  TIME_FORMAT,
  regex,
  deviceType,
  CONTENT_TYPE,
};
