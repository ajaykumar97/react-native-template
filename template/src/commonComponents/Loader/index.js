import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {colors} from '../../utilities/constants';
import styles from './styles';

const Loader = ({
  loading,
  absolute,
  backgroundColor,
  containerStyle,
  loaderColor,
}) => {
  if (!loading) {
    return null;
  }

  if (absolute) {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          styles.flexCenterStyle,
          styles.backdrop,
          containerStyle,
        ]}>
        <View style={styles.absoluteLoaderSubContainer}>
          <ActivityIndicator
            color={loaderColor || colors.white1}
            size={'large'}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.flexCenterStyle,
        styles.flex1,
        {backgroundColor: backgroundColor || colors.transparent},
        containerStyle,
      ]}>
      <ActivityIndicator color={loaderColor || colors.white1} size={'large'} />
    </View>
  );
};

export {Loader};
