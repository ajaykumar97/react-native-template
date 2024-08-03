import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginTop: scale(10),
  },
  inputContainer: {
    flex: 0.65,
    paddingHorizontal: scale(15),
  },
  forgottenPasswordContainer: {
    alignSelf: 'flex-end',
    paddingVertical: scale(10),
  },
  dontHaveAnAccount: {
    paddingVertical: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {paddingHorizontal: scale(5), justifyContent: 'flex-end'},
  signup: {
    textDecorationLine: 'underline',
  },
});

export default styles;
