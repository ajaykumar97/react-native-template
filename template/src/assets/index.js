import {Platform} from 'react-native';

import icUsers from './icons/icUsers.png';

const fonts = Platform.select({
  ios: {
    regular: 'Arial',
    semiBold: 'Arial',
  },
  android: {
    regular: 'Arial',
    semiBold: 'Arial',
  },
});

const icons = {};

export {icUsers, fonts, icons};
