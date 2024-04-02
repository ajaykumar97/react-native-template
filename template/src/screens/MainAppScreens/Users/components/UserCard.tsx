import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS, commonStyles} from '../../../../utilities/constants';
import {Body1, Body2} from '../../../../commonComponents/TextComponents';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({user}) => (
  <View style={styles.container}>
    <Body1>{user.name}</Body1>
    <Body2>Username: {user.username}</Body2>
    <Body2>Email: {user.email}</Body2>
    <Body2>Phone: {user.phone}</Body2>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white1,
    padding: scale(10),
    marginTop: scale(2),
    borderRadius: scale(2),
    ...commonStyles.shadow,
  },
});

export default UserCard;
