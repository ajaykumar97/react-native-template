import React from 'react';
import {
  View,
  Text,
  InputAccessoryView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../utilities/constants';
import { fonts } from '../assets';
import { layout } from '../utilities/layout';
import strings from '../localization';

const KeyboardAccessoryView = ({
  inputAccessoryViewID,
  onPress,
  label
}) => {
  if (!layout.isiOS) { return null; }

  return (
    <InputAccessoryView
      nativeID={inputAccessoryViewID}
      backgroundColor={colors.white1}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
        >
          <Text style={styles.label}>
            {label || strings.done}
          </Text>
        </TouchableOpacity>
      </View>
    </InputAccessoryView>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'flex-end' },
  label: {
    color: colors.blue1,
    paddingVertical: moderateScale(15),
    paddingRight: moderateScale(15),
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16)
  }
});

export { KeyboardAccessoryView };
