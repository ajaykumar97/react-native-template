import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../utilities/constants';
import { strings } from '../../localization';

const UserCard = ({ user }) => (
    <View style={styles.container}>
        <Text style={styles.name}>{user.name}</Text>
        <Text>{strings.username}: {user.username}</Text>
        <Text>{strings.email}: {user.email}</Text>
        <Text>{strings.phone}: {user.phone}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(10),
        backgroundColor: colors.white1,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.black1,
        shadowOpacity: 0.2,
        borderRadius: moderateScale(5)
    },
    name: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
});

export { UserCard };
