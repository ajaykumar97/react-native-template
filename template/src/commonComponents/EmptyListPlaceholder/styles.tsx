import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS, LAYOUT} from '../../utilities/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(30),
    paddingVertical: scale(20),
  },
  placeholder: {
    color: COLORS.white1,
    textAlign: 'center',
  },
  emptyListContainer: {
    height: LAYOUT.size.height * (1 / 2),
    width: LAYOUT.size.width - scale(30),
  },
});

export default styles;
