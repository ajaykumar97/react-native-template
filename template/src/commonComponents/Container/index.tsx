import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

import styles from './styles';

interface ContainerProps {
  style?: ViewStyle;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default Container;
