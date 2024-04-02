import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
  label: {
    color: COLORS.blue2,
    paddingVertical: scale(15),
    paddingRight: scale(15),
  },
});

export default styles;
