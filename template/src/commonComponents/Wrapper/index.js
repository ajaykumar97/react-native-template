import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from '../../utilities/constants';
import styles from './styles';

export const Wrapper = ({
  children,
  wrapperStyle,
  wrapperBackgroundColor = colors.blue1,
}) => (
  <SafeAreaView
    style={[
      styles.container,
      {backgroundColor: wrapperBackgroundColor},
      wrapperStyle,
    ]}>
    {children}
  </SafeAreaView>
);
