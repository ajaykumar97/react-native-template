import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../../utilities/constants';

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: COLORS.white1,
    marginTop: scale(10),
  },
  inputContainer: {
    flex: 0.65,
    paddingHorizontal: scale(20),
  },
  forgottenPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: scale(5),
    paddingVertical: scale(10),
  },
  forgottenPasswordText: {
    color: COLORS.white1,
  },
  dontHaveAnAccount: {
    paddingVertical: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {paddingHorizontal: scale(5), justifyContent: 'flex-end'},
  signup: {
    color: COLORS.white1,
    textDecorationLine: 'underline',
  },
});

export default styles;
