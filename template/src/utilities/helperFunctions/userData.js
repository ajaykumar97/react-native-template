import AsyncStorage from '@react-native-async-storage/async-storage';

import {USER_DATA} from '../constants/otherConstants';

const getLocalUserData = (key = USER_DATA) =>
  AsyncStorage.getItem(key).then(data => JSON.parse(data));

const setLocalUserData = (data, key = USER_DATA) =>
  AsyncStorage.setItem(key, JSON.stringify(data));

const deleteUserDataFromLocal = (key = USER_DATA) =>
  AsyncStorage.removeItem(key);

const extractUserDataFromDBResponse = (userData = {}, defaultValues) => {
  const {id, email, name, profile_image} = userData;

  return {
    id,
    email,
    name,
    profile_image,
    ...defaultValues,
  };
};

export {
  getLocalUserData,
  setLocalUserData,
  deleteUserDataFromLocal,
  extractUserDataFromDBResponse,
};
