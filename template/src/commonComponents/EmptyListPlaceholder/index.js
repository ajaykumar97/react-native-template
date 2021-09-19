import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export const EmptyListPlaceholder = ({
  containerStyle,
  placeholderStyle,
  placeholder,
  insideList,
}) => (
  <View
    style={[
      styles.container,
      insideList && styles.emptyListContainer,
      containerStyle,
    ]}>
    <Text style={[styles.placeholder, placeholderStyle]}>{placeholder}</Text>
  </View>
);
