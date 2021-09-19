import React from 'react';
import {View, ViewProps} from 'react-native';

import styles from './styles';

export const Container = (props: ViewProps) => (
  <View {...props} style={[styles.container, props.style]}>
    {props.children}
  </View>
);
