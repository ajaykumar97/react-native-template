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
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { moderateScale } from 'react-native-size-matters';

import { getAllUsers, updateNetInfo } from '../store/actions/';
import { colors } from '../utilities/constants';
import { UserCard } from '../components/UsersScreen';
import { icUsers } from '../../assets';
import { strings } from '../localization';
import { Loader } from '../components/common/Loader';

class UsersScreen extends PureComponent {
    componentDidMount() {
        this.props.getAllUsers();
        this.unsubscribe = NetInfo.addEventListener(state => {
            // console.log('Connection type: ', state.type);
            // console.log('Is connected? ', state.isConnected);
            if (state) {
                this.props.updateNetInfo(state);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    renderUsers = ({ item }) => <UserCard user={item} />;

    renderListEmptyComponent = () => (
        <View style={styles.noUserFound}>
            <Text>{strings.noUserFound}</Text>
        </View>
    );

    renderItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

    render() {
        const {
            loading,
            users,
            type,
            isConnected,
            isInternetReachable,
        } = this.props;

        let content = null;

        if (loading) {
            content = (
                <Loader isLoading />
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
                        <Text style={styles.headerTitle}>
                            {strings.users}
                        </Text>
                        <Image source={icUsers} style={styles.headerIcon} />
                    </View>
                    {content}
                    <View style={styles.netInfoContainer}>
                        <Text style={styles.netInfoTitle}>
                            {strings.netInfo}
                        </Text>
                        <Text>
                            <Text style={styles.boldText}>
                                {`${strings.type} `}
                            </Text>
                            {String(type)}
                        </Text>
                        <Text>
                            <Text style={styles.boldText}>
                                {`${strings.isConnected} `}
                            </Text>
                            {String(isConnected)}
                        </Text>
                        <Text>
                            <Text style={styles.boldText}>
                                {`${strings.isInternetReachable} `}
                            </Text>
                            {String(isInternetReachable)}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.lightWhite,
    },
    sectionContainer: {
        flex: 1,
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerView: {
        padding: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white1,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.black1,
        shadowOpacity: 0.2,
    },
    headerTitle: {
        fontSize: moderateScale(24),
        fontWeight: '600',
        color: colors.black1,
    },
    headerIcon: {
        height: moderateScale(30),
        width: moderateScale(30),
        marginLeft: moderateScale(5),
    },
    noUserFound: { alignItems: 'center' },
    list: {
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(50),
    },
    itemSeparator: { height: moderateScale(15) },
    netInfoContainer: {
        marginVertical: moderateScale(10),
        paddingHorizontal: moderateScale(20),
    },
    netInfoTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

const mapStatesToProps = ({ user, net }) => {
    const { users, loading } = user;
    const { type, isConnected, isInternetReachable } = net;
    
    return {
        users,
        loading,
        type,
        isConnected,
        isInternetReachable,
    };
};

export default connect(mapStatesToProps, {
    getAllUsers,
    updateNetInfo,
})(UsersScreen);
