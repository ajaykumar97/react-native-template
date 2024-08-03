import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black2,
    paddingHorizontal: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noInternet: {
    textAlign: 'center',
    color: COLORS.white1,
    marginTop: scale(10),
  },
});

export default styles;
