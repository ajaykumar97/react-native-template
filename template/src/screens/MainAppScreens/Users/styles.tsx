import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: scale(15),
    paddingBottom: scale(45),
  },
  itemSeparator: {height: scale(15)},
});

export default styles;
