import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../../assets';
import {colors} from '../../utilities/constants';
import {layout} from '../../utilities/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white1,
    paddingHorizontal: 30,
  },
  placeholder: {
    fontSize: scale(16),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
  emptyListContainer: {
    height: layout.size.height * (1 / 2),
    width: layout.size.width,
  },
});

export default styles;
