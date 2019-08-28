import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utilities/constants';
import { CustomText } from '../CustomText';

const UserCard = ({ user }) => (
    <View style={styles.container}>
        <Text style={styles.name}>{user.name}</Text>
        <Text><CustomText text={'username'} />: {user.username}</Text>
        <Text><CustomText text={'email'} />: {user.email}</Text>
        <Text><CustomText text={'phone'} />: {user.phone}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        borderRadius: 5
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export { UserCard };
