import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {BORDER_RADIUS, COLORS} from '../../utilities/constants';

const styles = StyleSheet.create({
  flex1: {flex: 1},
  flexCenterStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {backgroundColor: COLORS.black2},
  absoluteLoaderSubContainer: {
    backgroundColor: COLORS.white1,
    height: scale(100),
    width: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.lg,
  },
});

export default styles;
