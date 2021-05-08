import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {
  Loader,
  Header,
  Wrapper,
  EmptyListPlaceholder,
  ItemSeparatorComponent,
  Button,
} from '../../../commonComponents';
import {getAllUsers, logout} from './actions';
import UserMethodsObj from './userMethods';
import {UserCard} from './components/UserCard';
import styles from './styles';
import strings from '../../../localization';

class UsersScreen extends PureComponent {
  componentDidMount() {
    UserMethodsObj.setInstance(this);
    this.props.getAllUsers();
  }

  renderUsers = ({item}) => <UserCard user={item} />;

  renderListEmptyComponent = () => (
    <EmptyListPlaceholder placeholder={strings.noUsersFound} />
  );

  renderItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

  renderContent = () => {
    const {gettingUsers, users} = this.props;

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
        <Button label={strings.logout} onPress={this.props.logout} />
      </>
    );
  };

  render() {
    return (
      <Wrapper>
        <Header title={strings.users} />

        {this.renderContent()}
      </Wrapper>
    );
  }
}

const mapStatesToProps = ({user}) => {
  const {users, gettingUsers} = user;
  return {users, gettingUsers};
};

export default connect(mapStatesToProps, {getAllUsers, logout})(UsersScreen);
