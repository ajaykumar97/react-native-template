/**
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { getAllUsers } from '../store/actions/';
import { colors } from '../utilities/constants';
import { UserCard } from '../components/UsersScreen';
import { icUsers } from '../../assets';

class UsersScreen extends PureComponent {
    componentDidMount() {
        this.props.getAllUsers();
    }

    renderUsers = ({ item }) => <UserCard user={item} />;

    renderListEmptyComponent = () => (
        <View style={styles.noUserFound}><Text>No Users Found</Text></View>
    );

    renderItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

    render() {
        const { loading, users } = this.props;
        let content = null;

        if (loading) {
            content = (
                <View style={styles.loader}>
                    <ActivityIndicator size={'large'} />
                </View>
            );
        } else {
            content = (
                <FlatList
                    data={users}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderUsers}
                    ListEmptyComponent={this.renderListEmptyComponent}
                    ItemSeparatorComponent={this.renderItemSeparatorComponent}
                    contentContainerStyle={styles.list}
                />
            );
        }

        return (
            <SafeAreaView style={styles.wrapper}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.sectionContainer}>
                    <View style={styles.headerView}>
                        <Text style={styles.headerTitle}>Users</Text>
                        <Image source={icUsers} style={styles.headerIcon} />
                    </View>
                    {content}
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.lightWhite
    },
    sectionContainer: {
        flex: 1
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerView: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.black,
        shadowOpacity: 0.2,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.black
    },
    headerIcon: {
        height: 30,
        width: 30,
        marginLeft: 5
    },
    noUserFound: { alignItems: 'center' },
    list: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 50
    },
    itemSeparator: { height: 15 }
});

const mapStatesToProps = ({ user }) => {
    const { users, loading } = user;
    return { users, loading };
};

export default connect(mapStatesToProps, { getAllUsers })(UsersScreen);
