import React, {ReactNode} from 'react';
import {ColorValue, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '../../utilities/constants';

import styles from './styles';

interface WrapperProps {
  children: ReactNode;
  wrapperStyle?: ViewStyle;
  wrapperBackgroundColor?: ColorValue;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  wrapperStyle,
  wrapperBackgroundColor = COLORS.blue1,
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
export default Wrapper;
