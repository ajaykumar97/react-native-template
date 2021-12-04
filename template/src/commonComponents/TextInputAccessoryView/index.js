import React from 'react';
import {View, Text, InputAccessoryView, Pressable} from 'react-native';

import {colors} from '../../utilities/constants';
import {layout} from '../../utilities/layout';
import strings from '../../localization';
import styles from './styles';

export const TextInputAccessoryView = ({
  inputAccessoryViewID,
  onPress,
  label,
}) => {
  if (!layout.isiOS) {
    return null;
  }

  return (
    <InputAccessoryView
      nativeID={inputAccessoryViewID}
      backgroundColor={colors.white1}>
      <View style={styles.container}>
        <Pressable onPress={onPress}>
          <Text style={styles.label}>{label || strings.done}</Text>
        </Pressable>
      </View>
    </InputAccessoryView>
  );
};
