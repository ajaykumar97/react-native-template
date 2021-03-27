import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {fonts} from '../assets';
import {colors} from '../utilities/constants';
import {layout} from '../utilities/layout';

const EmptyListPlaceholder = ({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white1,
    paddingHorizontal: 30,
  },
  placeholder: {
    fontSize: moderateScale(16),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
  emptyListContainer: {
    height: layout.size.height * (1 / 2),
    width: layout.size.width,
  },
});

export {EmptyListPlaceholder};
