import {Dimensions, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let statusBarPadding = 0;
let isOldDevice = false;
let statusBarHeight = 0;

const majorVersionOS = parseInt(Platform.Version, 10);

if (Platform.OS === 'ios') {
  console.log('ios version is:', majorVersionOS);

  statusBarHeight = getStatusBarHeight();

  if (majorVersionOS < 11) {
    //old iOS device
    statusBarPadding = 20; //safe area doesn't work in old iOS devices
    isOldDevice = true;
  }
} else {
  console.log('android version is:', majorVersionOS);

  statusBarHeight = StatusBar.currentHeight;

  if (majorVersionOS < 23) {
    //old android device
    isOldDevice = true;
  } else {
    statusBarPadding = StatusBar.currentHeight; //to add statusbar height at top of the container in new devices
  }
}

const layout = {
  size: {width, height},
  statusBarPadding,
  statusBarHeight,
  isiOS: Platform.OS === 'ios',
  isOldDevice,
};

export {layout};
