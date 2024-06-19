import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';

const styles = StyleSheet.create({
  wrapper: {
    height: scale(42),
    justifyContent: 'center',
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.grey1,
  },
  borderBottom1px: {borderBottomWidth: scale(1)},
  leftStyle: {
    height: scale(56),
    width: scale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightStyle: {
    height: scale(56),
    width: scale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    textAlign: 'center',
  },
  titleContainer: {flex: 1},
});

export default styles;
