import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';

const styles = StyleSheet.create({
  container: {paddingBottom: 24},
  label: {
    marginBottom: scale(4),
  },
  inputContainer: {
    paddingHorizontal: scale(10),
    borderRadius: scale(5),
    borderWidth: scale(1),
    borderColor: COLORS.grey3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: COLORS.black1,
  },
  secureTextEntry: {paddingLeft: scale(10), paddingVertical: scale(10)},
  errorText: {
    position: 'absolute',
    left: 0,
    bottom: 4,
  },
});

export default styles;
