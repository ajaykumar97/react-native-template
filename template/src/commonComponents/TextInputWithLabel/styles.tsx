import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';

const styles = StyleSheet.create({
  label: {
    marginBottom: scale(4),
  },
  inputContainer: {
    paddingHorizontal: scale(10),
    borderRadius: scale(6),
    borderWidth: scale(1),
    borderColor: COLORS.grey3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: COLORS.black1,
  },
  errorText: {
    marginTop: scale(4),
  },
});

export default styles;
