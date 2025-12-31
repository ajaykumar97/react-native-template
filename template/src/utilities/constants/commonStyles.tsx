import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const commonStyles = StyleSheet.create({
  shadow: {
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export const FONT_SIZES = {
  xs: scale(12),
  sm: scale(14),
  md: scale(16),
  lg: scale(18),
  xl: scale(20),
  xxl: scale(24),
  xxxl: scale(28),
};

export const BORDER_RADIUS = {
  xs: scale(2),
  sm: scale(5),
  md: scale(8),
  lg: scale(12),
  xl: scale(16),
  round: scale(9999),
};
