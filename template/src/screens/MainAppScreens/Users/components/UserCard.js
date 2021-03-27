import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors, commonStyles} from '../../../../utilities/constants';

const UserCard = ({user}) => (
  <View style={styles.container}>
    <Text style={styles.name}>{user.name}</Text>
    <Text>Username: {user.username}</Text>
    <Text>Email: {user.email}</Text>
    <Text>Phone: {user.phone}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    padding: scale(10),
    marginTop: scale(2),
    ...commonStyles.shadow,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {UserCard};
