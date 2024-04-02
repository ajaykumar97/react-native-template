import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import EmptyListPlaceholder from '../../../commonComponents/EmptyListPlaceholder';
import Loader from '../../../commonComponents/Loader';
import {ACCESS_TOKEN, COLORS, SCREEN_NAMES} from '../../../utilities/constants';
import {
  deleteUnsecuredData,
  removeSecuredData,
} from '../../../utilities/helperFunctions/localStorage';
import Button from '../../../commonComponents/Button';
import Header from '../../../commonComponents/Header';
import ItemSeparatorComponent from '../../../commonComponents/ItemSeparatorComponent';
import Wrapper from '../../../commonComponents/Wrapper';
import {replace} from '../../../utilities/navigationService';
import {keyExtractor} from '../../../utilities/helperFunctions/miscellaneous';

import {getUsers} from './slice';
import styles from './styles';
import UserCard from './components/UserCard';

type useSelectorType = {
  users: {
    loading: boolean;
    allUsers: [
      {
        id: string;
        name: string;
        username: string;
        email: string;
        phone: string;
      },
    ];
  };
};

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch() as (dispatch: any) => Promise<void>;
  const allUsers = useSelector(
    (state: useSelectorType) => state.users.allUsers,
  );
  const isLoading = useSelector(
    (state: useSelectorType) => state.users.loading,
  );
  const {t} = useTranslation();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const ListEmptyComponent = useCallback(() => {
    if (isLoading) {
      return null;
    }
    return <EmptyListPlaceholder insideList placeholder={t('noUsersFound')} />;
  }, [isLoading, t]);

  const renderContent = () => {
    return (
      <>
        <FlatList
          data={allUsers}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return <UserCard user={item} />;
          }}
          keyExtractor={keyExtractor}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          contentContainerStyle={styles.list}
        />
        <Button
          label={t('logout')}
          onPress={async () => {
            replace(SCREEN_NAMES.AuthNavigator);
            deleteUnsecuredData(ACCESS_TOKEN);
            await removeSecuredData(ACCESS_TOKEN);
          }}
        />
        {isLoading && (
          <Loader loading={true} absolute={true} loaderColor={COLORS.black1} />
        )}
      </>
    );
  };

  return (
    <Wrapper>
      <Header title={t('users')} />
      {renderContent()}
    </Wrapper>
  );
};

export default UsersScreen;
