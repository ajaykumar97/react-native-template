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
  mobileNo: /^\d{6,10}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
  password: /^(?=.*[!@#$%^&-?])(?=.*[0-9])(?=.*[A-Z])[!@#$%^&0-9A-Za-z-?]{8,}$/,
  name: /^[a-z\s-]{1,}[A-Z\s-]$|^[A-Z\s-]{1,}[a-z\s-]$/i,
};

export const CONTENT_TYPE = {
  formData: 'multipart/form-data',
  applicationJson: 'application/json',
  image: 'image/jpeg',
};

export const INPUT_FIELDS = {
  name: 'name',
  email: 'email',
  password: 'password',
} as {
  name: 'name';
  email: 'email';
  password: 'password';
};
