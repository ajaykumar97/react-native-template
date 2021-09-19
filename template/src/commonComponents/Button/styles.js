import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../../assets';

const styles = StyleSheet.create({
  button: {
    borderRadius: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: scale(18),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
});

export default styles;
