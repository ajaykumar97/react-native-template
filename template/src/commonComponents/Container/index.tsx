import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

import styles from './styles';

interface ContainerProps extends ViewProps {
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = props => (
  <View {...props} style={[styles.container, props.style]}>
    {props.children}
  </View>
);

export default Container;
