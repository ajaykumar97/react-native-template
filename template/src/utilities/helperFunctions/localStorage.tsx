import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getGenericPassword,
  resetGenericPassword,
  setGenericPassword,
} from 'react-native-keychain';
import logger from 'react-native-simple-logger';

export const setSecuredData = async (key: string, value: string) => {
  if (!key || !value) {
    logger.error('key or value not provided');
    return;
  }
  await setGenericPassword(key, value, {service: key});
};

export const getSecuredData = async (key: string) => {
  if (!key) {
    logger.error('key or value not provided');
    return;
  }

  const credentials = await getGenericPassword({service: key});
  return credentials;
};

export const removeSecuredData = async (key: string) => {
  if (!key) {
    logger.error('key or value not provided');
    return;
  }

  await resetGenericPassword({service: key});
};

export const getUnsecuredData = (key: string) => {
  if (!key) {
    logger.error('key or value not provided');
    return;
  }

  AsyncStorage.getItem(key).then(data => (data ? JSON.parse(data) : null));
};

export const setUnsecuredData = (key: string, value: any) => {
  if (!key || !value) {
    logger.error('key or value not provided');
    return;
  }

  AsyncStorage.setItem(key, JSON.stringify(value));
};

export const deleteUnsecuredData = (key: string) => {
  if (!key) {
    logger.error('key or value not provided');
    return;
  }

  AsyncStorage.removeItem(key);
};
