import {LOGIN_SUCCEEDED} from '../../AuthScreens/Login/types';
import {
  GET_USERS_FAILED,
  GET_USERS_SUCCEEDED,
  SESSION_EXPIRE_REQUESTED,
} from './types';

const initialState = {
  users: [],
  loading: false,
  gettingUsers: true,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SESSION_EXPIRE_REQUESTED:
      return initialState;
    case GET_USERS_SUCCEEDED:
      return {...state, users: payload.users, gettingUsers: false};
    case GET_USERS_FAILED:
      return {...state, gettingUsers: false};
    case LOGIN_SUCCEEDED:
      return {...state, loading: false, ...payload.userData};
    default:
      return state;
  }
};
