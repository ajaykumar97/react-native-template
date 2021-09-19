import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../../../assets';
import {colors} from '../../../utilities/constants';

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0.65,
    paddingHorizontal: scale(20),
  },
  forgottenPasswordText: {
    alignSelf: 'flex-end',
    fontSize: scale(14),
    color: colors.white1,
    fontFamily: fonts.regular,
    marginTop: scale(5),
    paddingVertical: scale(10),
  },
  dontHaveAnAccount: {
    paddingVertical: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signup: {
    fontSize: scale(14),
    fontFamily: fonts.regular,
    color: colors.white1,
    textDecorationLine: 'underline',
    marginLeft: scale(5),
  },
});

export default styles;
