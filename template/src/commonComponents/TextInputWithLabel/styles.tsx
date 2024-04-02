import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';

const styles = StyleSheet.create({
  label: {
    color: COLORS.white2,
  },
  textInput: {
    paddingHorizontal: scale(5),
    borderBottomWidth: scale(0.5),
    borderColor: COLORS.grey2,
    color: COLORS.white1,
  },
});

export default styles;
