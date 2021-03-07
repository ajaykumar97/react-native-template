import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { moderateScale } from 'react-native-size-matters';

import {
  Loader,
  Header,
  Wrapper,
  EmptyListPlaceholder,
  ItemSeparatorComponent,
  Button
} from '../../../commonComponents';
import { colors } from '../../../utilities/constants';
import { getAllUsers, logout } from './actions';
import UserMethodsObj from './userMethods';
import { UserCard } from './components/UserCard';

class UsersScreen extends PureComponent {
  componentDidMount() {
    UserMethodsObj.setInstance(this);
    this.props.getAllUsers();
  }

  renderUsers = ({ item }) => <UserCard user={item} />;

  renderListEmptyComponent = () => (
    <EmptyListPlaceholder
      placeholder={'No Users Found'}
    />
  );

  renderItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

  renderContent = () => {
    const { gettingUsers, users } = this.props;

    if (gettingUsers) {
      return <Loader loading />;
    }

    return (
      <>
        <FlatList
          data={users}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderUsers}
          ListEmptyComponent={this.renderListEmptyComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          contentContainerStyle={styles.list}
        />
        <View
          style={{
            position: 'absolute',
            bottom: moderateScale(30),
            left: moderateScale(15),
            right: moderateScale(15),
            backgroundColor: colors.blue1
          }}
        >
          <Button
            label={'Logout'}
            onPress={this.props.logout}
          />
        </View>
      </>
    );
  };

  render() {
    return (
      <Wrapper>
        <Header title={'Users'} />

        {this.renderContent()}
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: moderateScale(15),
    paddingBottom: moderateScale(90)
  },
  itemSeparator: { height: 15 }
});

const mapStatesToProps = ({ user }) => {
  const { users, gettingUsers } = user;
  return { users, gettingUsers };
};

export default connect(mapStatesToProps, { getAllUsers, logout })(UsersScreen);
