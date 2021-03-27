import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../utilities/constants';
import {fonts} from '../assets';

const styles = StyleSheet.create({
  selectedOption: {
    color: colors.black1,
    fontFamily: fonts.proximaRegular,
    paddingHorizontal: scale(10),
  },
});

const pickerProps = {
  style: {
    inputAndroid: styles.selectedOption,
    inputIOS: styles.selectedOption,
  },
  pickerProps: {mode: 'dropdown'},
};

export {pickerProps};
