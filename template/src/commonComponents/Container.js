import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../utilities/constants';

const Container = (props) => (
  <View
    {...props}
    style={{ ...styles.container, ...props.style }}
  >
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeBlue
  }
});

export { Container };
