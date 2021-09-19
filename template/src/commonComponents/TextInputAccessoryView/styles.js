import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../../assets';
import {colors} from '../../utilities/constants';

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
  label: {
    color: colors.blue2,
    paddingVertical: scale(15),
    paddingRight: scale(15),
    fontFamily: fonts.semiBold,
    fontSize: scale(16),
  },
});

export default styles;
