import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  button: {
    borderRadius: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {textAlign: 'center'},
});

export default styles;
