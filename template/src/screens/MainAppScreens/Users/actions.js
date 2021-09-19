import {GET_USER_REQUESTED, SESSION_EXPIRE_REQUESTED} from './types';

export const getAllUsers = () => ({
  type: GET_USER_REQUESTED,
});

export const logout = params => ({
  type: SESSION_EXPIRE_REQUESTED,
  params,
});
