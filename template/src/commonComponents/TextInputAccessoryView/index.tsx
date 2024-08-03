import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  InputAccessoryView,
  Pressable,
  GestureResponderEvent,
} from 'react-native';

import {COLORS, LAYOUT} from '../../utilities/constants';
import {Body2} from '../TextComponents';

import styles from './styles';

interface TextInputAccessoryViewProps {
  inputAccessoryViewID: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  label?: string;
}

const TextInputAccessoryView: React.FC<TextInputAccessoryViewProps> = ({
  inputAccessoryViewID,
  onPress,
  label,
}) => {
  const {t} = useTranslation();
  if (!LAYOUT.isiOS) {
    return null;
  }

  return (
    <InputAccessoryView
      nativeID={inputAccessoryViewID}
      backgroundColor={COLORS.white1}>
      <View style={styles.container}>
        <Pressable onPress={onPress}>
          <Body2 style={styles.label}>{label || t('done')}</Body2>
        </Pressable>
      </View>
    </InputAccessoryView>
  );
};

export default TextInputAccessoryView;
