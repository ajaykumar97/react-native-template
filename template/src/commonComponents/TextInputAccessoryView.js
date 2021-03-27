import React from 'react';
import {
  View,
  Text,
  InputAccessoryView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../utilities/constants';
import {fonts} from '../assets';
import {layout} from '../utilities/layout';
import strings from '../localization';

const TextInputAccessoryView = ({inputAccessoryViewID, onPress, label}) => {
  if (!layout.isiOS) {
    return null;
  }

  return (
    <InputAccessoryView
      nativeID={inputAccessoryViewID}
      backgroundColor={colors.white1}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
          <Text style={styles.label}>{label || strings.done}</Text>
        </TouchableOpacity>
      </View>
    </InputAccessoryView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
  label: {
    color: colors.blue1,
    paddingVertical: scale(15),
    paddingRight: scale(15),
    fontFamily: fonts.semiBold,
    fontSize: scale(16),
  },
});

export {TextInputAccessoryView};
