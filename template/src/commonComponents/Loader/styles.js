import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../utilities/constants/colors';

const styles = StyleSheet.create({
  flex1: {flex: 1},
  flexCenterStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {backgroundColor: colors.black2},
  absoluteLoaderSubContainer: {
    backgroundColor: colors.white1,
    height: scale(100),
    width: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
});

export default styles;
