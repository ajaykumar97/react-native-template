import React from 'react';
import {View, StyleSheet, ActivityIndicator, ViewStyle} from 'react-native';

import {COLORS} from '../../utilities/constants';

import styles from './styles';

interface LoaderProps {
  loading: boolean;
  absolute?: boolean;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  loaderColor?: string;
}

const Loader: React.FC<LoaderProps> = ({
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
            color={loaderColor || COLORS.white1}
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
        {backgroundColor: backgroundColor || COLORS.transparent},
        containerStyle,
      ]}>
      <ActivityIndicator color={loaderColor || COLORS.white1} size={'large'} />
    </View>
  );
};

export default Loader;
