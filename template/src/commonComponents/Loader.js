import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../utilities/constants';

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
          {backgroundColor: colors.black2},
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
      style={{
        ...styles.flexCenterStyle,
        backgroundColor: backgroundColor || colors.transparent,
        flex: 1,
        containerStyle,
      }}>
      <ActivityIndicator color={loaderColor || colors.white1} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexCenterStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteLoaderSubContainer: {
    backgroundColor: colors.white1,
    height: scale(100),
    width: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
});

export {Loader};
