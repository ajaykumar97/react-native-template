import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../../assets';
import {colors} from '../../utilities/constants';

const styles = StyleSheet.create({
  label: {
    color: colors.white2,
    fontSize: scale(12),
    fontFamily: fonts.regular,
  },
  textInput: {
    paddingHorizontal: scale(5),
    borderBottomWidth: scale(0.5),
    borderColor: colors.grey2,
    fontFamily: fonts.semiBold,
    fontSize: scale(14),
    color: colors.white1,
  },
});

export default styles;
