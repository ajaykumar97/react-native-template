import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';
import {scale} from 'react-native-size-matters';

import {DATE_FORMAT, colors} from '../utilities/constants';
import {fonts} from '../assets';

const DateTimePicker = ({
  onDateSelect,
  date,
  datePickerProps = {},
  mode = 'date',
  dateTimeFormat = DATE_FORMAT,
  labelStyle,
  label,
  containerMarginTop,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    hideDatePicker();
    onDateSelect(selectedDate);
  };

  let selectedDate = dateTimeFormat;

  if (date) {
    selectedDate = dayjs(date).format(dateTimeFormat);
  }

  return (
    <View style={{...styles.container, marginTop: containerMarginTop || 0}}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={showDatePicker}
        style={styles.dateContainer}>
        <Text
          style={{
            ...styles.date,
            color: selectedDate ? colors.white1 : colors.grey2,
          }}>
          {selectedDate}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        date={date || new Date()}
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        {...datePickerProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: scale(0.5),
    borderColor: colors.grey2,
    justifyContent: 'center',
  },
  dateContainer: {
    height: scale(40),
  },
  date: {
    margin: scale(10),
    fontSize: scale(14),
    fontFamily: fonts.regular,
    borderColor: colors.grey2,
  },
  label: {
    color: colors.white2,
    fontSize: scale(12),
    fontFamily: fonts.regular,
  },
});

export {DateTimePicker};
