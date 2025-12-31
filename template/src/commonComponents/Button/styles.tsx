import {StyleSheet} from 'react-native';

import {BORDER_RADIUS} from '../../utilities/constants';

const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {textAlign: 'center'},
});

export default styles;
