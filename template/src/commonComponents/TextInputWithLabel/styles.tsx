import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {BORDER_RADIUS, COLORS, FONT_SIZES} from '../../utilities/constants';

const styles = StyleSheet.create({
  container: {paddingBottom: scale(5)},
  label: {
    marginBottom: scale(4),
  },
  inputContainer: {
    paddingHorizontal: scale(10),
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: scale(1),
    borderColor: COLORS.grey3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: COLORS.black1,
    fontSize: FONT_SIZES.sm,
  },
  secureTextEntry: {paddingLeft: scale(10), paddingVertical: scale(10)},
  errorText: {
    marginTop: scale(4),
  },
});

export default styles;
